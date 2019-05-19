import { action, computed, reaction } from "mobx";

import { Attribute } from "./Attribute";
import { Character } from "./Character";
import { MagicOrResonanceUser } from "./MagicOrResonance";
import { Metatype, Metasapient } from "./Metatype";
import prioritySystem from '../data/prioritySystem.json'

export enum Priority {
    A,
    B,
    C,
    D,
    E,
}

export enum Category {
    MagicOrResonance = "Magic or Resonance",
    Metatype = "Metatype",
    Attributes = "Attributes",
    Skills = "Skills",
    Resources = "Resources",
}
const categories: Category[] = [...Object.values(Category)]

interface MetatypeMetadata {
    specialAttributePoints: number;
    karmaCost: number;
}

interface MagicMetadata {
    magic: number;
    skills: { type: string, rating: number, group: boolean }[];
    spells: number;
}

function isMagicMetadata(metadata: MagicMetadata | ResonanceMetadata): metadata is MagicMetadata {
    return (metadata as MagicMetadata).magic !== undefined;
}

interface ResonanceMetadata {
    resonance: number;
    skills: { type: string, rating: number, group: boolean }[];
    complexForms: number;
}

const metatypes = new Map<Priority, Map<Metasapient, MetatypeMetadata>>([
    ...Object.entries(prioritySystem.metatypes)
        .map(([priority, metatypes]): [Priority, Map<Metasapient, MetatypeMetadata>] => [
            (Priority as any)[priority],
            new Map<Metasapient, MetatypeMetadata>([
                ...Object.entries(metatypes)
                    .map(([metasapient, metadata]): [Metasapient, MetatypeMetadata] => [
                        metasapient as Metasapient,
                        metadata
                    ])
            ])
        ])
]);
const magicOrResonance = new Map<Priority, Map<MagicOrResonanceUser, MagicMetadata | ResonanceMetadata>>([
    ...Object.entries(prioritySystem.magicOrResonance)
        .map(([priority, userTypes]): [Priority, Map<MagicOrResonanceUser, MagicMetadata | ResonanceMetadata>] => [
            (Priority as any)[priority],
            new Map<MagicOrResonanceUser, MagicMetadata | ResonanceMetadata>([
                ...Object.entries(userTypes)
                    .map(([userType, metadata]): [MagicOrResonanceUser, MagicMetadata | ResonanceMetadata] => [
                        userType as MagicOrResonanceUser,
                        metadata as MagicMetadata | ResonanceMetadata,
                    ])
            ])
        ])
]);
const attributes = new Map<Priority, number>([
    ...Object.entries(prioritySystem.attributes)
        .map(([priority, points]): [Priority, number] => [(Priority as any)[priority], points])
]);

class PriorityConfiguration {
    A: Category;
    B: Category;
    C: Category;
    D: Category;
    E: Category;

    constructor(a: Category, b: Category, c: Category, d: Category, e: Category) {
        this.A = a;
        this.B = b;
        this.C = c;
        this.D = d;
        this.E = e;
    }

    priority(category: Category): Priority {
        return this.A === category ?
            Priority.A :
            this.B === category ?
                Priority.B :
                this.C === category ?
                    Priority.C :
                    this.D === category ?
                        Priority.D :
                        Priority.E;
    }
}

const priorityConfigurations: PriorityConfiguration[] = categories
    .flatMap(a => categories
        .filter(category => ![a].includes(category))
        .flatMap(b => categories
            .filter(category => ![a, b].includes(category))
            .flatMap(c => categories
                .filter(category => ![a, b, c].includes(category))
                .flatMap(d => categories
                    .filter(category => ![a, b, c, d].includes(category))
                    .map(e => new PriorityConfiguration(a, b, c, d, e))
                )
            )
        )
    )


export class PrioritySystem {
    private character: Character;

    // Remembered pieces of data for Magic or Resonance recomputation.
    private previousMagicOrResonancePriority = Priority.E;
    private previousMagicOrResonanceUser = MagicOrResonanceUser.None;

    constructor(character: Character) {
        this.character = character;

        reaction(
            () => {
                const magicOrResonanceMetadata = magicOrResonance
                    .get(this.priorities.priority(Category.MagicOrResonance))!
                    .get(this.character.magicOrResonanceUser)!;
                return isMagicMetadata(magicOrResonanceMetadata) ?
                    magicOrResonanceMetadata.magic :
                    magicOrResonanceMetadata.resonance;
            },
            (data, reaction) => {
                const previousMagicOrResonanceMetadata = magicOrResonance
                    .get(this.previousMagicOrResonancePriority)!
                    .get(this.previousMagicOrResonanceUser)!;
                const previousPriorityContribution = isMagicMetadata(previousMagicOrResonanceMetadata) ?
                    previousMagicOrResonanceMetadata.magic :
                    previousMagicOrResonanceMetadata.resonance;
                this.character.magicorresonance = this.character.magicorresonance - previousPriorityContribution + data;
                this.previousMagicOrResonancePriority = this.priorities.priority(Category.MagicOrResonance)!;
                this.previousMagicOrResonanceUser = this.character.magicOrResonanceUser;
            }
        )
    }

    @computed get priorities() {
        // There's a computation cycle for the used special attribute points,
        // because calculating them requires knowing the priority of Magic or
        // Resonance, but knowing the priority of Magic or Resonance requires
        // knowing the used special attribute points. We break this cycle by
        // redefining the function here on a per priority basis so evaluation
        // can be correct.
        const usedSpecialAttributePoints = (magicOrResonancePriority: Priority) => {
            const magicOrResonanceMetadata = magicOrResonance
                .get(magicOrResonancePriority)!
                .get(this.character.magicOrResonanceUser);
            return this.character.attributes.get(Attribute.Edge)! + Math.max(
                this.character.attributes.get(Attribute.MagicOrResonance)! - (
                    magicOrResonanceMetadata !== undefined ?
                        isMagicMetadata(magicOrResonanceMetadata) ?
                            magicOrResonanceMetadata.magic :
                            magicOrResonanceMetadata.resonance :
                        0,
                    0
                )
            );
        };

        let weightedPriorityConfigurations = priorityConfigurations.map(
            configuration => ({ configuration: configuration, count: 0 })
        );

        // Inviolable Constraint: Metatype priority must be in range for the
        // character's metatype.
        for (const configuration of weightedPriorityConfigurations) {
            const priority = configuration.configuration.priority(Category.Metatype);
            const metatypeMetadata = metatypes.get(priority)!.get(this.character.metatype.metasapient);
            configuration.count += metatypeMetadata !== undefined ? 0 : Infinity;
        }

        // Weighted Constraint: Metatype priority must be high enough priority for the
        // character's used special attribute points.
        for (const configuration of weightedPriorityConfigurations) {
            const priority = configuration.configuration.priority(Category.Metatype);
            const metatypeMetadata = metatypes.get(priority)!.get(this.character.metatype.metasapient);
            configuration.count += Math.max(
                0,
                usedSpecialAttributePoints(priority) - (
                    metatypeMetadata !== undefined ?
                        metatypeMetadata.specialAttributePoints :
                        0
                ),
            );
        }

        // Inviolable Constraint: Magic or Resonance priority must be in range for the
        // character's user type.
        for (const configuration of weightedPriorityConfigurations) {
            const priority = configuration.configuration.priority(Category.MagicOrResonance);
            const magicOrResonanceMetadata = magicOrResonance.get(priority)!.get(this.character.magicOrResonanceUser);
            configuration.count += magicOrResonanceMetadata !== undefined ? 0 : Infinity;
        };

        // Weighted Constraint: Attributes must be high enough priority for the
        // character's used attribute points.
        for (const configuration of weightedPriorityConfigurations) {
            const priority = configuration.configuration.priority(Category.Attributes);
            configuration.count += Math.max(
                0,
                this.usedAttributePoints - attributes.get(priority)!,
            );
        };

        return weightedPriorityConfigurations
            .sort((a, b) => a.count - b.count)[0].configuration;
    };


    @action updateMetatype(metatype: Metatype) {
        this.character.metatype = metatype;
    }

    @computed get totalSpecialAttributePoints() {
        return metatypes
            .get(this.priorities.priority(Category.Metatype))!
            .get(this.character.metatype.metasapient)!
            .specialAttributePoints;
    }

    @computed private get usedSpecialAttributePoints() {
        const magicOrResonancePriority = this.priorities.priority(Category.MagicOrResonance)!;
        const magicOrResonanceMetadata = magicOrResonance
            .get(magicOrResonancePriority)!
            .get(this.character.magicOrResonanceUser)!;
        return this.character.attributes.get(Attribute.Edge)! + Math.max(
            this.character.attributes.get(Attribute.MagicOrResonance)! - (
                isMagicMetadata(magicOrResonanceMetadata) ?
                    magicOrResonanceMetadata.magic :
                    magicOrResonanceMetadata.resonance
            ),
            0
        );
    }

    @computed get availableSpecialAttributePoints() {
        return this.totalSpecialAttributePoints - this.usedSpecialAttributePoints;
    }

    @action updateMagicOrResonanceUser(magicOrResonanceUser: MagicOrResonanceUser) {
        this.character.magicOrResonanceUser = magicOrResonanceUser;
    }

    @action updateAttribute(attribute: Attribute, value: number) {
        switch (attribute) {
            default:
                (this.character as any)[Attribute[attribute].toLowerCase()] = value;
        }
    }

    @computed get totalAttributePoints() {
        return attributes.get(this.priorities.priority(Category.Attributes))!;
    }

    @computed private get usedAttributePoints() {
        return [...this.character.attributes.entries()]
            .filter(([attribute, points]) => ![Attribute.Edge, Attribute.MagicOrResonance].includes(attribute))
            .map(([attribute, points]) => points)
            .reduce((previous, current) => previous + current, 0);
    }

    @computed get availableAttributePoints() {
        return this.totalAttributePoints - this.usedAttributePoints;
    }
}
