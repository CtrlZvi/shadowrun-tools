import React, { Component, ChangeEvent } from "react";
import { observer } from 'mobx-react';
import { Character } from "../../models/Character";
import { Priority, Category } from "../../models/Priority";
import { action, trace } from 'mobx';

@observer class PriorityComponent extends Component<{ character: Character, priorities: Map<Priority, Category> }> {
    @action handleChangePriority(priority: Priority, event: ChangeEvent<HTMLSelectElement>) {
        if (event.currentTarget.value === undefined) {
            this.props.priorities.delete(priority)
        } else {
            let selectedCategory = (Category as any)[event.currentTarget.value];
            // FIXME (zeffron 2019-05-05) We can't just set the priority, as
            // there may already be something at that priority that needs to be
            // adjusted.
            for (let [priority, category] of this.props.priorities) {
                if (category === selectedCategory) {
                    this.props.priorities.delete(priority);
                }
            }
            this.props.priorities.set(priority, selectedCategory);
        }
    }

    render() {
        let priorities = Object.entries(Priority).filter(
            ([priorityName, priority]) => !(parseInt(priorityName, 10) >= 0)
        ).map(
            ([priorityName, priority]) => (
                <tr key={priorityName}>
                    <th scope="row">{priorityName}</th>
                    <td>
                        <select value={Category[this.props.priorities.get(priority as Priority)!] || "None"} onChange={this.handleChangePriority.bind(this, priority)}>
                            <option value="None"></option>
                            {Object.keys(Category).filter(
                                categoryName => !(parseInt(categoryName, 10) >= 0)
                            ).map(
                                categoryName => (
                                    <option key={priorityName + ":" + categoryName} value={categoryName}>
                                        {categoryName}
                                    </option>
                                )
                            )}
                        </select>
                    </td>
                </tr>
            )
        )
        return (
            <table className="priority" >
                <thead>
                    <tr>
                        <th colSpan={2}>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {priorities}
                </tbody>
            </table>
        )
    }
}

export default PriorityComponent;