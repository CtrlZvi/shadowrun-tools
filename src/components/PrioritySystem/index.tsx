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
                        <th colSpan={3}>Priorities</th>
                    </tr>
                    <tr>
                        <td>Priority</td>
                        <td>Selection</td>
                        <td>Information</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...prioritySystem.priorities.entries()].map(([priority, category]) => (
                            <tr key={priority}>
                                <th>{Priority[priority]}</th>
                                <td>{Category[prioritySystem.priorities.get(priority)!]}</td>
                                <td>
                                    {category === Category.Metatype ? `${prioritySystem.remainingSpecialAttributePoints} / ${prioritySystem.specialAttributePoints}` : undefined}
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