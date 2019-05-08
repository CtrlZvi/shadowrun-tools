import { observable, action, computed } from "mobx";
import { isUndefined } from "util";

import { Character } from "./Character";
import { Metatype } from "./Metatype";

export enum Priority {
    A,
    B,
    C,
    D,
    E,
}

export enum Category {
    None,
    Metatype,
    Attributes,
    Magic,
    Resonance,
    Skills,
    Resources,
}

export class PrioritySystemMetadata {
    @observable priorities = new Map<Priority, Category>(
        Object.values(Priority)
            .filter((priority) => !isNaN(Number(priority)))
            .map((priority: Priority) => [priority, Category.None])
    );

    character: Character;

    constructor(character: Character) {
        this.character = character;
    }

    @action setPriority = (priority: Priority, category: Category) => {
        let previousPriority = [...this.priorities.entries()]
            .find(([priority, candidateCategory]) => candidateCategory === category);
        if (!isUndefined(previousPriority) && category !== Category.None) {
            this.priorities.set(previousPriority[0], this.priorities.get(priority)!);
        }
        this.priorities.set(priority, category);
    }

    @action updateMetatype = (metatype: Metatype) => {
        this.character.metatype = metatype;

        // Check to see if we need to adjust the priorities.
        // TODO (zeffron 2019-05-07) Also check to see if we need to adjust for
        // the special attribute points or the karma spend.
        if (!isUndefined(this.metatypePriority) && Priority[this.metatypePriority] in this.character.metatype.priorities) {
            return;
        }

        // Adjust priorities via the following algorithm:
        // 1) Clear the current metatype priority.
        // 2) Identify the lowest priority for the new metatype.
        // 3) If there is no lowest available priority, clearing the metatype
        //    priority is the correct result, so return. 
        // 4) If there is nothing using that priority, use it.
        // 5) Otherwise, look for a higher empty priority.
        // 6) If there's a higher empty priority, use it for the replaced
        //     category.
        // 7) Otherwise, look for a lower empty priority.
        // 8) If there's not a lower available priority, a priority invariant
        //    has been violated, raise an exception.
        // 9) Use the lower available priority for the replaced category.
        // FIXME (zeffron 2019-05-08) This algorithm doesn't take into account
        // the relative priority of other categories and could choose
        // sub-optimal choices. For example, given A: Skills, B: Magic,
        // C: Metatype, D: Attributes, E: Resources, and the metatype changing
        // to Troll, the above algorithm will reach step 9 and swap Magic for
        // Metatype, demoting Magic from B to C. The better solution would be
        // to notice that Magic is more selective than Skills, and demote
        // Skills instead. (It's arguable the correct solution would be to
        // promote Magic, demote Skills, and then assign Metatype to where
        // Skills was as Magic is likely more important than Metatype, but that
        // may be up to each individual user.)
        if (!isUndefined(this.metatypePriority)) {
            this.priorities.set(this.metatypePriority, Category.None);
        }
        let metatypePriority = Object
            .keys(this.character.metatype.priorities)
            .sort()
            .reverse()
            .filter(key => key in this.character.metatype.priorities)
            .map(priority => (Priority as any)[priority] as Priority)[0];
        if (isUndefined(metatypePriority)) {
            return;
        }
        if (this.priorities.get(metatypePriority) === Category.None) {
            this.priorities.set(metatypePriority, Category.Metatype);
            return;
        }
        let priorities = [...this.priorities.entries()]
            .sort((a, b) => a[0] - b[0])
            .filter(([priority, category]) => category === Category.None);
        let availablePriority = (
            [...priorities].reverse().find(([priority, category]) => priority < metatypePriority) ||
            priorities.find(([priority, category]) => priority > metatypePriority)
        )
        if (availablePriority === undefined) {
            throw new Error("priority invariant violation detected");
        }
        this.priorities.set(availablePriority[0], this.priorities.get(metatypePriority)!);
        this.priorities.set(metatypePriority, Category.Metatype);
    }

    @computed get metatypePriority() {
        for (let [priority, category] of this.priorities) {
            if (category == Category.Metatype) {
                return priority
            }
        }
    }
}
