import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import './style.scss';
import CharacterSheetSection from '../CharacterSheetSection';
import CharacterContext from '../../contexts/Character';
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Attribute } from '../../models/Attribute'
import { Skill, Skills, SkillGroup, SkillGroups, Type as SkillType, isSkill } from '../../models/Skill';

const skills = ([...SkillGroups.values()] as (Skill | SkillGroup)[])
    .concat([...Skills.values()])
    .map((skill: Skill | SkillGroup) => (
        <option key={skill.name} value={skill.name}>
            {skill.name}
        </option>
    ));

const SkillsComponent = observer(
    (_: {}, ref) => {
        const character = useContext(CharacterContext);
        const prioritySystem = useContext(PrioritySystemContext);

        const characterSkills = character.skills
            .concat([[SkillGroups.get("")!, 0]])
            .map(
                ([skill, rating], index) =>
                    <div key={skill.name}>
                        <input
                            type="text"
                            list="skills"
                            value={skill.name}
                            // FIXME (zeffron 2019-06-08) Focus is lost after
                            // each character when typing in the skill name.
                            onChange={action(
                                (event: ChangeEvent<HTMLInputElement>) =>
                                    prioritySystem.updateSkill(
                                        Skills.get(event.currentTarget.value) || SkillGroups.get(event.currentTarget.value) || {
                                            name: event.currentTarget.value,
                                            attribute: Attribute.Intuition,
                                            type: SkillType.Knowledge,
                                        },
                                        1,
                                        index,
                                    )
                            )} />
                        <input
                            type="number"
                            value={rating}
                            min={1}
                            max={6}
                            onChange={action(
                                (event: ChangeEvent<HTMLInputElement>) => prioritySystem.updateSkill(
                                    skill,
                                    event.currentTarget.valueAsNumber,
                                    index,
                                )
                            )} />
                        <span className="skill-type">
                            <span className={isSkill(skill) ? skill.type === SkillType.Active ? "selected" : "" : "selected"}>A</span>
                            /
                            <span className={isSkill(skill) ? skill.type !== SkillType.Active ? "selected" : "" : ""}>K</span>
                        </span>
                    </div>
            )

        return (
            <CharacterSheetSection className="skills" name={"SKILLS"} ref={ref}>
                <datalist id="skills">
                    {skills}
                </datalist>
                <div>
                    <span>Skill</span>
                    <span>RTG</span>
                    <span>Type</span>
                </div>
                <div>
                    <span>Skill</span>
                    <span>RTG</span>
                    <span>Type</span>
                </div>
                {characterSkills}
            </CharacterSheetSection >
        )
    },
    { forwardRef: true },
)

SkillsComponent.displayName = "SKILLS";

export default SkillsComponent;