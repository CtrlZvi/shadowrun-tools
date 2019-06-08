import skills from '../data/skills.json';

import { Attribute } from "./Attribute";

export enum Type {
    Active,
    Knowledge,
    Language,
}

export interface Skill {
    name: string;
    attribute: Attribute;
    type: Type;
};

export function isSkill(skill: Skill | SkillGroup): skill is Skill {
    return (skill as Skill).attribute !== undefined;
}

export interface SkillGroup {
    name: string;
    skills: Skill[]
}

export function isSkillGroup(skill: Skill | SkillGroup): skill is Skill {
    return (skill as SkillGroup).skills !== undefined;
}

export const Skills: Map<string, Skill> = new Map(
    [
        ...Object.entries(skills.skills).map(
            ([name, value]): [string, Skill] => {
                return [
                    name,
                    {
                        name: name,
                        attribute: (Attribute as any)[value.attribute],
                        type: Type.Active,
                    },
                ];
            }
        )
    ]
);

export const SkillGroups: Map<string, SkillGroup> = new Map(
    [
        ...Object.entries(skills.skillsGroups).map(
            ([name, value]): [string, SkillGroup] => {
                return [
                    name,
                    {
                        name: name,
                        skills: value.map(skill => Skills.get(skill)!),
                    },
                ];
            }
        )
    ]
);
