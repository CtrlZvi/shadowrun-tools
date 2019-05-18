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
                        [...Object.entries(prioritySystem.priorities)].map(([priority, category]) => (
                            <tr key={priority}>
                                <th>{priority}</th>
                                <td>{category}</td>
                                <td>
                                    {category === Category.Metatype ? `${prioritySystem.availableSpecialAttributePoints} / ${prioritySystem.totalSpecialAttributePoints}` : undefined}
                                    {category === Category.Attributes ? `${prioritySystem.availableAttributePoints} / ${prioritySystem.totalAttributePoints}` : undefined}
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