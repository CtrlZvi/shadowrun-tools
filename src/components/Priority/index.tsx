import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from "react";

import PriorityContext from '../../contexts/Priority';
import { Priority, Category } from '../../models/PrioritySystem';

const PriorityComponent = observer(() => {
    const priorityMetadata = useContext(PriorityContext);

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Priorities</th>
                </tr>
            </thead>
            <tbody>
                {
                    [...priorityMetadata.priorities.entries()].map(([priority, category]) => (
                        <tr key={Priority[priority]}>
                            <th>{Priority[priority]}</th>
                            <td>
                                <select value={Category[category]} onChange={action(
                                    (event: ChangeEvent<HTMLSelectElement>) => priorityMetadata.setPriority(
                                        priority,
                                        (Category as any)[event.currentTarget.value],
                                    )
                                )}>
                                    {Object.keys(Category)
                                        .filter(name => isNaN(Number(name)))
                                        .map(name => (
                                            <option key={Priority[priority] + ":" + name} value={name}>
                                                {name}
                                            </option>
                                        ))}
                                </select>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
});

export default PriorityComponent;