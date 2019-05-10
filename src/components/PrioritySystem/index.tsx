import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from "react";

import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Priority, Category } from '../../models/PrioritySystem';

const PriorityComponent = observer(() => {
    const prioritySystem = useContext(PrioritySystemContext);

    return (
        <div className="prioritySystem">
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Priorities</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...prioritySystem.priorities.entries()].map(([priority, category]) => (
                            <tr key={Priority[priority]}>
                                <th>{Priority[priority]}</th>
                                <td>
                                    <select value={Category[category]} onChange={action(
                                        (event: ChangeEvent<HTMLSelectElement>) => {
                                            try {
                                                prioritySystem.setPriority(
                                                    priority,
                                                    (Category as any)[event.currentTarget.value],
                                                );
                                            } catch (error) {
                                                console.debug(error);
                                            }
                                        })}>
                                        {Object.keys(Category)
                                            .filter(name => isNaN(Number(name)))
                                            .map(name => (
                                                <option key={Priority[priority] + ":" + name} value={name}>
                                                    {name}
                                                </option>
                                            ))}
                                    </select>
                                    {category === Category.Attributes ? `${prioritySystem.remainingAttributePoints} / ${prioritySystem.attributePoints}` : undefined}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
});

export default PriorityComponent;