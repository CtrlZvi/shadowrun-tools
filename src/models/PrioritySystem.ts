import { observable, action, computed } from "mobx";

import { Attribute, SpecialAttribute } from "./Attribute";
import { Character } from "./Character";
import { MagicUser } from "./Magic";
import { Metatype, MetatypeAttribute, Metasapient } from "./Metatype";
import { ResonanceUser } from "./Resonance";
import prioritySystem from '../data/prioritySystem.json'

export enum Priority {
    A,
    B,
    C,
    D,
    E,
}

// The categories are sorted by their order of importance. When attempting to
// automatically adjust the priorities, a lower importance category will not
// bubble up past a higher importance one, and a higher importance one will
// not bubble down past a lower importance one.
export enum Category {
    None,
    Magic,
    Resonance,
    Metatype,
    Attributes,
    Skills,
    Resources,
}

interface MetatypeMetadata {
    specialAttributePoints: number;
    karmaCost: number;
}

interface MagicMetadata {
    magic: number;
    skills: { type: string, rating: number, group: boolean }[];
    spells: number;
}

interface ResonanceMetadata {
    magic: number;
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
                        (Metasapient as any)[metasapient],
                        metadata
                    ])
            ])
        ])
]);
const magic = new Map<Priority, Map<MagicUser, MagicMetadata>>([
    ...Object.entries(prioritySystem.magic)
        .map(([priority, magicUserTypes]): [Priority, Map<MagicUser, MagicMetadata>] => [
            (Priority as any)[priority],
            new Map<MagicUser, MagicMetadata>([
                ...Object.entries(magicUserTypes)
                    .map(([userType, metadata]): [MagicUser, MagicMetadata] => [
                        userType as MagicUser,
                        metadata as MagicMetadata
                    ])
            ])
        ])
]);
const resonance = new Map<Priority, Map<ResonanceUser, ResonanceMetadata>>([
    ...Object.entries(prioritySystem.resonance)
        .map(([priority, resonanceUserTypes]): [Priority, Map<ResonanceUser, ResonanceMetadata>] => [
            (Priority as any)[priority],
            new Map<ResonanceUser, ResonanceMetadata>([
                ...Object.entries(resonanceUserTypes)
                    .map(([userType, metadata]): [ResonanceUser, ResonanceMetadata] => [
                        userType as ResonanceUser,
                        metadata as ResonanceMetadata
                    ])
            ])
        ])
]);
const attributes = new Map<Priority, number>([
    ...Object.entries(prioritySystem.attributes)
        .map(([priority, points]): [Priority, number] => [(Priority as any)[priority], points])
]);

export class PrioritySystem {
    @observable priorities = new Map<Priority, Category>(
        Object.values(Priority)
            .filter(priority => !isNaN(Number(priority)))
            .map((priority: Priority) => [priority, Category.None])
    );

    character: Character;

    constructor(character: Character) {
        this.character = character;
    }

    @action private adjustPriorities = () => {
        let availablePriorities = [...this.priorities.keys()].sort().reverse();
        const categories: Category[] = Object.entries(Category)
            .filter(([name, category]) => isNaN(Number(name)))
            .map(([name, category]) => category);
        for (const category of categories) {
            if (category === Category.None) {
                continue;
            }
            if (availablePriorities.length == 0) {
                break;
            }
            const priorityIndex = availablePriorities.findIndex(priority => this.satisfies(priority, category));
            if (priorityIndex == -1) {
                continue;
            }
            const priority = availablePriorities.splice(priorityIndex, 1)[0];
            this.priorities.set(priority, category);
        }
        for (let priority of availablePriorities) {
            this.priorities.set(priority, Category.None);
        }
    }

    private satisfies(priority: Priority, category: Category) {
        switch (category) {
            case Category.Metatype:
                const metatype = metatypes.get(priority)!.get(this.character.metatype.metasapient);
                return metatype !== undefined && this._specialAttributePoints <= metatype.specialAttributePoints;
            case Category.Magic:
                const magicUserType = [...Object.values(MagicUser)]
                    .find(magicUserType => magicUserType == this.character.magicOrResonanceType && magicUserType != MagicUser.None);
                const magicMetadata = magic.get(priority)!.get(magicUserType)!
                return magicUserType !== undefined && magicMetadata !== undefined;
            case Category.Resonance:
                const resonanceUserType: ResonanceUser = [...Object.values(ResonanceUser)]
                    .find(resonanceUserType => resonanceUserType == this.character.magicOrResonanceType && resonanceUserType != ResonanceUser.None);
                const resonanceMetadata = resonance.get(priority)!.get(resonanceUserType)!
                return resonanceUserType !== undefined && resonanceMetadata !== undefined;
            case Category.Attributes:
                return this._attributePoints <= attributes.get(priority)!;
            default:
                return true;
        }
    }

    private satisfied(category: Category) {
        const priority = [...this.priorities.entries()]
            .find(([priority, candidateCategory]) => category === candidateCategory);
        if (priority === undefined) {
            return false;
        }
        return this.satisfies(priority[0], category);
    }

    @action updateMetatype = (metatype: Metatype) => {
        this.character.metatype = metatype;

        if (this.satisfied(Category.Metatype)) {
            return;
        }

        this.adjustPriorities();
    }

    @action updateMagicOrResonanceType = (userType: MagicUser | ResonanceUser) => {
        switch (this.character.metatype.metasapient) {
            case Metasapient.Centaur:
            case Metasapient.Naga:
            case Metasapient.Pixie:
            case Metasapient.Sasquatch:
                if (userType == ResonanceUser.Technomancer) {
                    throw new Error(
                        `metasapients (such as a ${this.character.metatype.metasapient}) have natural magic and cannot have Resonance [Run Faster (CAT27004) page 102]`
                    )
                }
        }
        this.character.magicOrResonanceType = userType;

        if (this.satisfied(Category.Magic) && this.satisfied(Category.Resonance)) {
            return;
        }

        this.adjustPriorities();
    }

    @observable private _attributePoints: number = 0;

    @computed get remainingAttributePoints() {
        return this.attributePoints - this._attributePoints;
    }

    @computed get attributePoints() {
        let priority = [...this.priorities.entries()]
            .find(([priority, category]) => category === Category.Attributes);
        if (priority === undefined) {
            return 0;
        }
        return attributes.get(priority[0])!;
    }

    @observable private _specialAttributePoints: number = 0;

    @computed get remainingSpecialAttributePoints() {
        return this.specialAttributePoints - this._specialAttributePoints;
    }

    @computed get specialAttributePoints() {
        let priority = [...this.priorities.entries()]
            .find(([priority, category]) => category === Category.Metatype);
        if (priority === undefined) {
            return 0;
        }
        return metatypes.get(priority[0])!.get(this.character.metatype.metasapient)!.specialAttributePoints;
    }

    @action updateAttribute = (attribute: Attribute, points: number) => {
        // Adjust the character's attribute value.
        let name = Attribute[attribute].toLowerCase();
        let metatypeAttribute: MetatypeAttribute = (this.character.metatype as any)[name];
        let delta = points - this.character.attributes.get(attribute)!;
        let value: number = (this.character as any)[name] + delta;
        if (value > metatypeAttribute.maximum) {
            throw new RangeError(`cannot increase ${name} beyond the ${this.character.metatype.metasapient}'s natural maximum`);
        }
        if (value < metatypeAttribute.base) {
            throw new RangeError(`cannot decrease ${name} beyond the ${this.character.metatype.metasapient}'s base`);
        }
        this.character.attributes.set(attribute, points);

        if ((SpecialAttribute as any)[Attribute[attribute]] === undefined) {
            this._attributePoints += delta;
        } else {
            this._specialAttributePoints += delta;
        }
        if (this.satisfied(Category.Attributes) && this.satisfied(Category.Metatype)) {
            return;
        }

        this.adjustPriorities();
    }
}
