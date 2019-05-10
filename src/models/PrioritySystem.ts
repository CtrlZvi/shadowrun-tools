import { observable, action, computed } from "mobx";

import { Attribute } from "./Attribute";
import { Character } from "./Character";
import { Metatype, MetatypeAttribute } from "./Metatype";

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

// TODO (zeffron 2019-05-08) Move this to a data file along with data for the
// rest of the priority system. Should also move the metatype priority data out
// of the metatype data file and into the priority one.
const perPriorityAttributes = new Map<Priority, number>([
    [Priority.A, 24],
    [Priority.B, 20],
    [Priority.C, 16],
    [Priority.D, 14],
    [Priority.E, 12],
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

    @action setPriority = (priority: Priority, category: Category) => {
        let previousPriority: Priority | undefined;
        if (category === Category.Magic || category === Category.Resonance) {
            previousPriority = this.categoryPriority(Category.Magic);
            if (previousPriority === undefined) {
                previousPriority = this.categoryPriority(Category.Resonance);
            }
        } else {
            previousPriority = this.categoryPriority(category);;
        }
        if (previousPriority !== undefined && category !== Category.None) {
            this.priorities.set(previousPriority, this.priorities.get(priority)!);
        }
        this.priorities.set(priority, category);
    }

    // adjustPriority automatically finds the best configuration of priorities
    // given that satisfy the request to set the specified priority to the
    // given category. It does this via an algorithm that must satisfy the
    // following invariants:
    // 1) A lower importance category cannot displace a higher importance
    // category if doing so would cause the higher importance category's
    // priority to no longer satisfy its requirements.
    // 2) If the given category cannot be placed at the specified or higher
    // priority, no changes are made.
    // The algorithm operates as follows:
    // 1) Clear the previous priority for the category. As a special case, if
    //    the category is Magic or Resonance, clear both. This frees up space
    //    for priorities to shift.
    // 2) If the desired priority is free, use it and complete.
    // 3) If there is a higher priority free, shift every priority between the
    //    desired priority and the available priority up one. This guarantees
    //    no constraints are violated. 
    // 4) There must be a lower priority free, as it would have been cleared in
    //    step 1. Set that priority to be the baseline for the remaining steps.
    // 5) Find the lowest priority above the baseline priority with a category
    //    that would be satisfied by the free priority.
    // 6) If there is no such priority, find the lowest priority above the
    //    free priority with a category that is already unsatisfied with its
    //    priority. (Note that while step 4 used the baseline priority as the
    //    lower limit, this step uses the free priority. If no priority is
    //    satisfied by the free priority, moving an unsatisfied priority up to
    //    fill it is less ideal than moving another unsatisfied priority down.)
    // 7) If there is no such priority, find the lowest priority above the
    //    baseline priority with a category that is already unsatisfied with
    //    its priority. (Note that again the lower limit is the baseline
    //    priority.)
    // 8) If there is no such priority, or the priority is alreadu=y in the
    //    swap chain reset the cleared priority and abort.
    // 9) Otherwise, append it to the swap chain, call it the "free" priority
    //    and repeat steps 5-9 until the desired priority is the free priority.
    // 10) Execute the discovered swap path using the swap chain as a guide.
    @action private adjustPriority = (priority: Priority, category: Category) => {
        const previousPriority = category === Category.Magic || category === Category.Resonance
            ? this.categoryPriority(Category.Magic) || this.categoryPriority(Category.Resonance)
            : this.categoryPriority(category);
        const previousCategory = previousPriority !== undefined
            ? this.priorities.get(previousPriority)!
            : undefined;

        // Step 1
        if (category === Category.Magic || category === Category.Resonance) {
            const magicPriority = this.categoryPriority(Category.Magic);
            if (magicPriority !== undefined) {
                this.priorities.set(magicPriority, Category.None)
            }
            const resonancePriority = this.categoryPriority(Category.Resonance);
            if (resonancePriority !== undefined) {
                this.priorities.set(resonancePriority, Category.None)
            }
        } else {
            const categoryPriority = this.categoryPriority(category);
            if (categoryPriority !== undefined) {
                this.priorities.set(categoryPriority, Category.None);
            }
        }

        // Step 2
        if (this.priorities.get(priority) === Category.None) {
            this.priorities.set(priority, category);
            return;
        }

        const priorities = [...this.priorities.entries()]
            .sort((a, b) => a[0] - b[0])
        const availablePriorities = priorities
            .filter(([priority, category]) => category === Category.None)
            .map(([priority, category]) => priority);

        // Step 3
        const higherAvailablePriority = [...availablePriorities]
            .reverse()
            .find(candidatePriority => candidatePriority < priority);
        if (higherAvailablePriority !== undefined) {
            while (category !== Category.None) {
                const nextCategory = this.priorities.get(priority)!;
                this.priorities.set(priority, category);
                [priority, category] = [priority - 1, nextCategory];
            }
            return;
        }

        let swapChain: Priority[] = [];
        const freePriority = availablePriorities
            .find(candidatePriority => candidatePriority > priority)!;
        let evaluationPriority = freePriority;
        // Step 4
        const adjustablePriorities = priorities
            .filter(([priority, category]) => priority < freePriority)
            .reverse();
        while (evaluationPriority !== priority) {
            // Step 5
            let candidatePriority = adjustablePriorities
                .find(([priority, category]) => this.satisfies(freePriority, category));

            // Step 6
            if (candidatePriority === undefined) {
                candidatePriority = adjustablePriorities
                    .find(([priority, category]) => priority < freePriority, !this.satisfies(priority, category))
            }

            // Step 7
            if (candidatePriority === undefined) {
                candidatePriority = adjustablePriorities
                    .find(([priority, category]) => priority > freePriority, !this.satisfies(priority, category))
            }

            // Step 8
            if (candidatePriority === undefined || swapChain.includes(candidatePriority[0])) {
                if (previousCategory !== undefined) {
                    this.priorities.set(previousPriority!, previousCategory);
                }
                throw new Error(`Could not set ${Priority[priority]} to ${Category[category]} without violating other requirements`);
            }

            evaluationPriority = candidatePriority[0];
            swapChain.push(freePriority);
        }

        // Step 9
        evaluationPriority = freePriority;
        for (let swapPriority of swapChain) {
            this.priorities.set(evaluationPriority, this.priorities.get(swapPriority)!);
            evaluationPriority = swapPriority;
        }
        this.priorities.set(evaluationPriority, category);
    }

    private categoryPriority(category: Category) {
        let priority = [...this.priorities.entries()].find(([priority, candidateCategory]) => category === candidateCategory);
        if (priority !== undefined) {
            return priority[0];
        }
    }

    private satisfies(priority: Priority, category: Category) {
        switch (category) {
            case Category.Metatype:
                return Priority[priority] in this.character.metatype.priorities;
            case Category.Attributes:
                return this._attributePoints <= perPriorityAttributes.get(priority)!;
            default:
                return false;
        }
    }

    private satisfied(category: Category) {
        const priority = [...this.priorities.entries()]
            .find(([priority, candidateCategory]) => category === candidateCategory);
        if (priority === undefined) {
            return false;
        }
        switch (category) {
            case Category.Metatype:
                return Priority[priority[0]] in this.character.metatype.priorities;
            case Category.Attributes:
                return this._attributePoints <= perPriorityAttributes.get(priority[0])!;
            default:
                return false;
        }
    }

    @action updateMetatype = (metatype: Metatype) => {
        this.character.metatype = metatype;

        if (this.satisfied(Category.Metatype)) {
            return;
        }

        const priority = Object
            .keys(this.character.metatype.priorities)
            .sort()
            .reverse()
            .map(priority => (Priority as any)[priority] as Priority)[0];
        try {
            this.adjustPriority(priority, Category.Metatype);
        }
        catch (exception) {
            // TODO (zeffron 2019-05-09) This indicates an consistency
            // issue with the character sheet that must be resolved by the
            // user. Indicate this to the user appropriately.
            console.log(exception);
        }
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
        return perPriorityAttributes.get(priority[0])!;
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

        this._attributePoints += delta;
        if (this.satisfied(Category.Attributes)) {
            return;
        }

        // Adjust the Attributes priority.
        let priority = [...this.priorities.keys()]
            .sort((a, b) => a - b)
            .reverse()
            .find(priority => perPriorityAttributes.get(priority)! > this._attributePoints);
        if (priority === undefined) {
            priority = Priority.A;
        }
        try {
            this.adjustPriority(priority, Category.Attributes);
        }
        catch (exception) {
            // TODO (zeffron 2019-05-09) This indicates an consistency
            // issue with the character sheet that must be resolved by the
            // user. Indicate this to the user appropriately.
            console.log(exception);
        }
    }
}
