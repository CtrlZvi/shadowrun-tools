import { observable, action, computed } from "mobx";

import { Attribute, SpecialAttribute } from "./Attribute";
import { Character } from "./Character";
import { Metatype, MetatypeAttribute, Metasapient } from "./Metatype";
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

const metatypes = new Map<Priority, Map<Metasapient, MetatypeMetadata>>([
    ...Object.entries(prioritySystem.metatypes)
        .map(([priority, metatypes]): [Priority, Map<Metasapient, MetatypeMetadata>] => [
            (Priority as any)[priority],
            new Map<Metasapient, MetatypeMetadata>([
                ...Object.entries(metatypes)
                    .map(([metasapient, attributes]): [Metasapient, MetatypeMetadata] => [
                        (Metasapient as any)[metasapient],
                        attributes
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
            if (category === Category.Resonance && [...this.priorities.values()].includes(Category.Magic)) {
                continue;
            }
            if (availablePriorities.length == 0) {
                break;
            }
            const priorityIndex = availablePriorities.findIndex(priority => this.satisfies(priority, category));
            if (priorityIndex == -1) {
                this.priorities.set(availablePriorities.pop()!, category);
                continue;
            }
            const priority = availablePriorities.splice(priorityIndex, 1)[0];
            this.priorities.set(priority, category);
        }
    }

    private satisfies(priority: Priority, category: Category) {
        switch (category) {
            case Category.Metatype:
                const metatype = metatypes.get(priority)!.get(this.character.metatype.metasapient);
                return metatype !== undefined && this._specialAttributePoints <= metatype.specialAttributePoints;
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
            throw new RangeError("cannot increase attribute ${name} beyond the metatype maximum");
        }
        if (value < metatypeAttribute.base) {
            throw new RangeError("cannot decrease attribute ${name} beyond the metatype minimum");
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
