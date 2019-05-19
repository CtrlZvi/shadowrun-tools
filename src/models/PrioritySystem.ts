import { action, computed, reaction, observable, IReactionPublic, IReactionDisposer } from "mobx";

import { Attribute } from "./Attribute";
import { Character } from "./Character";
import { MagicOrResonanceUser } from "./MagicOrResonance";
import { Metatype, Metasapient, Metatypes } from "./Metatype";
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

    @observable private _priorities = new PriorityConfiguration(
        Category.Attributes,
        Category.Skills,
        Category.Resources,
        Category.Metatype,
        Category.MagicOrResonance
    );

    @computed get priorities() {
        return this._priorities
    }

    // Remembered pieces of data for Magic or Resonance recomputation.
    // private previousMagicOrResonancePriority = Priority.E;
    @observable private previousMagicOrResonanceUser = MagicOrResonanceUser.None;
    @observable private previousMetatype = Metatypes.get(Metasapient.None)!;

    constructor(character: Character) {
        this.character = character;

        // When priorities change, it's possible the Magic or Resonance
        // priority changed. Since that priority provides some of the Magic or
        // Resonance attribute points, we need to adjust the character's magic
        // value accordingly. If the priority change increased the amount of
        // provided magic or resonance points, it should replace the used
        // special attribute points as much as possible before increasing the
        // magic or resonance value itself. If it decreased the amount of
        // provided points, it should not attempt to replace the removed points
        // with special attribute points, except in the special case where
        // Metatype moves up giving more special attribute points at the same
        // time that Magic or Resonance moves down, taking away magic or
        // resonance points. In this edge case, the additional special
        // attribute points should be used to compensate for the lost magic
        // or resonance points.
        this.adjustPriorities = reaction(
            () => this.bestPriorities,
            action((priorities: PriorityConfiguration, reaction: IReactionPublic) => {
                const magicOrResonancePriority = priorities.priority(Category.MagicOrResonance);
                const previousMetadata = magicOrResonance
                    .get(this.priorities.priority(Category.MagicOrResonance))!
                    .get(this.previousMagicOrResonanceUser)!;
                const previousPoints = isMagicMetadata(previousMetadata) ?
                    previousMetadata.magic :
                    previousMetadata.resonance;
                const currentMetadata = magicOrResonance
                    .get(magicOrResonancePriority)!
                    .get(this.character.magicOrResonanceUser)!;
                const currentPoints = isMagicMetadata(currentMetadata) ?
                    currentMetadata.magic :
                    currentMetadata.resonance;
                const pointDelta = currentPoints - previousPoints;
                const previousMagicOrResonanceAttributePoints = this.character.magicorresonance - previousPoints;
                if (pointDelta > 0) {
                    this.character.magicorresonance += Math.max(
                        0,
                        pointDelta - previousMagicOrResonanceAttributePoints,
                    )
                } else {
                    const additionalSpecialAttributePoints = metatypes
                        .get(priorities.priority(Category.Metatype))!
                        .get(this.character.metatype.metasapient)!.specialAttributePoints - metatypes
                            .get(this.priorities.priority(Category.Metatype))!
                            .get(this.previousMetatype.metasapient)!.specialAttributePoints;
                    this.character.magicorresonance += Math.min(
                        0,
                        pointDelta + Math.max(0, additionalSpecialAttributePoints),
                    );
                }
                this.previousMagicOrResonanceUser = this.character.magicOrResonanceUser;
                this.previousMetatype = this.character.metatype;
                this._priorities = this.bestPriorities;
            }),
        )
    }

    @computed private get bestPriorities() {
        // There's a computation cycle for the used special attribute points,
        // because calculating them requires knowing the priority of Magic or
        // Resonance, but knowing the priority of Magic or Resonance requires
        // knowing the used special attribute points. We break this cycle by
        // redefining the function here on a per priority basis so evaluation
        // can be correct.
        const usedSpecialAttributePoints = (configuration: PriorityConfiguration) => {
            const magicOrResonancePriority = configuration.priority(Category.MagicOrResonance);
            const magicOrResonanceMetadata = magicOrResonance
                .get(magicOrResonancePriority)!
                .get(this.character.magicOrResonanceUser);
            return this.character.attributes.get(Attribute.Edge)! + Math.max(
                this.character.attributes.get(Attribute.MagicOrResonance)! - (
                    magicOrResonanceMetadata !== undefined ?
                        isMagicMetadata(magicOrResonanceMetadata) ?
                            magicOrResonanceMetadata.magic :
                            magicOrResonanceMetadata.resonance :
                        0
                ),
                0
            );
        };

        // We put the current priority into the front of the map so the
        // stable sort at the end of the function will prefer it over any
        // others with equal score.
        // TODO (zeffron 2019-05-19) Determine a way that doesn't cost an
        // additional element to be added, since we're already going to be
        // doing this calculation, anyway. 
        let weightedPriorityConfigurations = priorityConfigurations.map(
            configuration => ({ configuration: configuration, count: 0 })
        );

        for (const configuration of weightedPriorityConfigurations) {
            const metatypePriority = configuration.configuration.priority(Category.Metatype);
            const metatypeMetadata = metatypes
                .get(metatypePriority)!
                .get(this.character.metatype.metasapient);

            const magicOrResonancePriority = configuration.configuration.priority(Category.MagicOrResonance);
            const magicOrResonanceMetadata = magicOrResonance
                .get(magicOrResonancePriority)!
                .get(this.character.magicOrResonanceUser);

            const attributePriority = configuration.configuration.priority(Category.Attributes);

            // Inviolable Constraint: Metatype priority must be in range
            // for the character's metatype.
            configuration.count += metatypeMetadata !== undefined ? 0 : Infinity;

            // Weighted Constraint: Metatype priority must be high enough
            // priority for the character's used special attribute points.
            configuration.count += Math.max(
                0,
                usedSpecialAttributePoints(configuration.configuration) - (
                    metatypeMetadata !== undefined ?
                        metatypeMetadata.specialAttributePoints :
                        0
                ),
            );

            // Inviolable Constraint: Magic or Resonance priority must be
            // in range for the character's user type.
            configuration.count += magicOrResonanceMetadata !== undefined ? 0 : Infinity;

            // Weighted Constraint: Attributes must be high enough priority
            // for the character's used attribute points.
            configuration.count += Math.max(
                0,
                this.usedAttributePoints - attributes.get(attributePriority)!,
            );
        }

        return weightedPriorityConfigurations
            .sort((a, b) => a.count - b.count)[0].configuration;
    }
    private adjustPriorities: IReactionDisposer;


    @action updateMetatype(metatype: Metatype) {
        this.previousMetatype = this.character.metatype;
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
        this.previousMagicOrResonanceUser = this.character.magicOrResonanceUser;
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
