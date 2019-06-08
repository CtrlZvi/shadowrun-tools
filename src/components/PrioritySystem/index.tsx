import { observer } from 'mobx-react-lite';
import React, { useContext } from "react";

import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Category } from '../../models/PrioritySystem';

const PriorityComponent = observer(() => {
    const prioritySystem = useContext(PrioritySystemContext);

    return (
        <div className="prioritySystem">
            Karma: {prioritySystem.karma}
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
                    <tr>
                        <th>A</th>
                        <td>{prioritySystem.priorities.A}</td>
                        <td>
                            {prioritySystem.priorities.A === Category.Metatype ? `${prioritySystem.availableSpecialAttributePoints} / ${prioritySystem.totalSpecialAttributePoints}` : undefined}
                            {prioritySystem.priorities.A === Category.Attributes ? `${prioritySystem.availableAttributePoints} / ${prioritySystem.totalAttributePoints}` : undefined}
                            {prioritySystem.priorities.A === Category.Skills ? `${prioritySystem.availableSkillPoints} / ${prioritySystem.totalSkillPoints} (${prioritySystem.availableSkillGroupPoints} / ${prioritySystem.totalSkillGroupPoints})` : undefined}
                        </td>
                    </tr>
                    <tr>
                        <th>B</th>
                        <td>{prioritySystem.priorities.B}</td>
                        <td>
                            {prioritySystem.priorities.B === Category.Metatype ? `${prioritySystem.availableSpecialAttributePoints} / ${prioritySystem.totalSpecialAttributePoints}` : undefined}
                            {prioritySystem.priorities.B === Category.Attributes ? `${prioritySystem.availableAttributePoints} / ${prioritySystem.totalAttributePoints}` : undefined}
                            {prioritySystem.priorities.B === Category.Skills ? `${prioritySystem.availableSkillPoints} / ${prioritySystem.totalSkillPoints} (${prioritySystem.availableSkillGroupPoints} / ${prioritySystem.totalSkillGroupPoints})` : undefined}
                        </td>
                    </tr>
                    <tr>
                        <th>C</th>
                        <td>{prioritySystem.priorities.C}</td>
                        <td>
                            {prioritySystem.priorities.C === Category.Metatype ? `${prioritySystem.availableSpecialAttributePoints} / ${prioritySystem.totalSpecialAttributePoints}` : undefined}
                            {prioritySystem.priorities.C === Category.Attributes ? `${prioritySystem.availableAttributePoints} / ${prioritySystem.totalAttributePoints}` : undefined}
                            {prioritySystem.priorities.C === Category.Skills ? `${prioritySystem.availableSkillPoints} / ${prioritySystem.totalSkillPoints} (${prioritySystem.availableSkillGroupPoints} / ${prioritySystem.totalSkillGroupPoints})` : undefined}
                        </td>
                    </tr>
                    <tr>
                        <th>D</th>
                        <td>{prioritySystem.priorities.D}</td>
                        <td>
                            {prioritySystem.priorities.D === Category.Metatype ? `${prioritySystem.availableSpecialAttributePoints} / ${prioritySystem.totalSpecialAttributePoints}` : undefined}
                            {prioritySystem.priorities.D === Category.Attributes ? `${prioritySystem.availableAttributePoints} / ${prioritySystem.totalAttributePoints}` : undefined}
                            {prioritySystem.priorities.D === Category.Skills ? `${prioritySystem.availableSkillPoints} / ${prioritySystem.totalSkillPoints} (${prioritySystem.availableSkillGroupPoints} / ${prioritySystem.totalSkillGroupPoints})` : undefined}
                        </td>
                    </tr>
                    <tr>
                        <th>E</th>
                        <td>{prioritySystem.priorities.E}</td>
                        <td>
                            {prioritySystem.priorities.E === Category.Metatype ? `${prioritySystem.availableSpecialAttributePoints} / ${prioritySystem.totalSpecialAttributePoints}` : undefined}
                            {prioritySystem.priorities.E === Category.Attributes ? `${prioritySystem.availableAttributePoints} / ${prioritySystem.totalAttributePoints}` : undefined}
                            {prioritySystem.priorities.E === Category.Skills ? `${prioritySystem.availableSkillPoints} / ${prioritySystem.totalSkillPoints} (${prioritySystem.availableSkillGroupPoints} / ${prioritySystem.totalSkillGroupPoints})` : undefined}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
});

export default PriorityComponent;