import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useContext } from 'react';

import { PrioritySystemContext } from '../../contexts/PrioritySystem';
import { Skill, Skills, SkillGroup, SkillGroups } from '../../models/Skill';

const skills = ([...SkillGroups.values()] as (Skill | SkillGroup)[])
    .concat([...Skills.values()])
    .map((skill: Skill | SkillGroup) => (
        <option key={skill.name} value={skill.name}>
            {skill.name}
        </option>
    ));

const SkillComponent = observer(({ skill, rating, index }: { skill: Skill | SkillGroup, rating: number, index: number }) => {
    const prioritySystem = useContext(PrioritySystemContext);
    const ratingInput = rating > 0 ?
        <input type="number" value={rating} min={1} max={6} onChange={
            action((event: ChangeEvent<HTMLInputElement>) => prioritySystem.updateSkill(
                skill,
                event.currentTarget.valueAsNumber,
                index,
            ))
        } /> :
        undefined;

    return (
        <tr className={`skill`} >
            <td>
                <select value={skill.name} onChange={
                    action((event: ChangeEvent<HTMLSelectElement>) => prioritySystem.updateSkill(
                        Skills.get(event.currentTarget.value) || SkillGroups.get(event.currentTarget.value)!,
                        1,
                        index,
                    ))
                }>
                    {skills}
                </select>
            </td>
            <td className="rating">
                {ratingInput}
            </td>
        </tr>
    )
});

export default SkillComponent;
