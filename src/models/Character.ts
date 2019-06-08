import { observable, computed, action } from "mobx";
import { computedFn } from "mobx-utils";

import { MagicOrResonanceUser } from "./MagicOrResonance";
import { Metatype, Metatypes, Metasapient } from './Metatype';
import { Quality } from './Quality';
import { Skill, Skills, SkillGroup, SkillGroups, isSkill, Type as SkillType } from './Skill';
import chummer from '../data/chummer.json';
import { Attribute } from "./Attribute";

const chummerSkills = new Map<string, Skill | SkillGroup>(
    Object.entries(chummer.skills)
        .map(
            ([id, name]) =>
                [id, Skills.has(name) ? Skills.get(name)! : SkillGroups.get(name)!]
        )
);

interface AttributesJSON {
    body: number;
    agility: number;
    reaction: number;
    strength: number;
    willpower: number;
    logic: number;
    intuition: number;
    charisma: number;
    edge: number;
    magic?: number;
    resonance?: number;
}

interface CharacterJSON {
    metatype: string;
    attributes: AttributesJSON;
    skills: {
        name: string;
        value: number;
        type?: SkillType;
    }[];
}

export class Character {

    static async load(files: FileList): Promise<Character> {
        let file = files.item(0)!;
        const reader = new FileReader();

        let loadAction: (result: string | ArrayBuffer | null) => Character;
        const chummerLoadAction = action(
            (result: string | ArrayBuffer | null) =>
                Character.fromChummer5a(
                    new DOMParser()
                        .parseFromString(result as string, "text/xml")
                )
        );
        const jsonLoadAction = action(
            (result: string | ArrayBuffer | null) =>
                Character.fromJSON(JSON.parse(result as string))
        );
        switch (file.type) {
            case "application/json":
                loadAction = jsonLoadAction;
                break;
            case "text/xml":
                loadAction = chummerLoadAction;
                break;
            default:
                switch (file.name.split(".").pop()) {
                    case "chum5":
                        loadAction = chummerLoadAction;
                        break;
                }
                break;
        }
        reader.readAsText(files.item(0)!);
        return new Promise<Character>((resolve, reject) => {
            reader.onload = (event) => resolve(loadAction(reader.result))
        });
    }

    static fromJSON(json: CharacterJSON): Character {
        const character = new Character();
        character.metatype = Metatypes.get(json.metatype as Metasapient)!;
        for (const [attribute, value] of Object.entries(json.attributes)) {
            switch (attribute) {
                case "body":
                    character.body = value!;
                    break;
                case "agility":
                    character.agility = value!;
                    break;
                case "reaction":
                    character.reaction = value!;
                    break;
                case "strength":
                    character.strength = value!;
                    break;
                case "willpower":
                    character.willpower = value!;
                    break;
                case "logic":
                    character.logic = value!;
                    break;
                case "intuition":
                    character.intuition = value!;
                    break;
                case "charisma":
                    character.charisma = value!;
                    break;
                case "edge":
                    character.edge = value!;
                    break;
                case "magic":
                    if (![MagicOrResonanceUser.None, MagicOrResonanceUser.Technomancer].includes(character.magicOrResonanceUser)) {
                        character.magicOrResonance = value!;
                    }
                    // TODO (zeffron 2019-06-08) Raise an error in the else
                    // case
                    break;
                case "resonance":
                    if (character.magicOrResonanceUser === MagicOrResonanceUser.Technomancer) {
                        character.magicOrResonance = value!;
                    }
                    // TODO (zeffron 2019-06-08) Raise an error in the else
                    // case
                    break;
            }
        }
        json.skills.forEach(({ name, value, type }) =>
            character.skills.push([
                Skills.get(name) || SkillGroups.get(name) || {
                    name: name,
                    attribute: Attribute.Intuition,
                    type: type !== undefined ? type : SkillType.Knowledge,
                },
                value
            ]));
        return character;
    }

    static fromChummer5a(dom: XMLDocument): Character {
        const character = new Character();
        character.metatype = Metatypes.get(
            dom.evaluate(
                "string(/character/metatype)",
                dom,
                null,
                XPathResult.STRING_TYPE,
                null,
            ).stringValue as Metasapient
        )!
        const attributeIterator = dom.evaluate(
            "/character/attributes/attribute",
            dom,
            null,
            XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
            null,
        );
        let attribute: Node | null;
        while ((attribute = attributeIterator.iterateNext()) !== null) {
            const attributeIdentifier = dom.evaluate(
                "string(name)",
                attribute,
                null,
                XPathResult.STRING_TYPE,
                null,
            ).stringValue;
            const attributeValue = dom.evaluate(
                "number(totalvalue)",
                attribute,
                null,
                XPathResult.NUMBER_TYPE,
                null,
            ).numberValue;
            switch (attributeIdentifier) {
                case "AGI":
                    character.agility = attributeValue;
                    break;
                case "BOD":
                    character.body = attributeValue;
                    break;
                case "CHA":
                    character.charisma = attributeValue;
                    break;
                case "EDG":
                    character.edge = attributeValue;
                    break;
                case "INT":
                    character.intuition = attributeValue;
                    break;
                case "LOG":
                    character.logic = attributeValue;
                    break;
                case "MAG":
                    if (![MagicOrResonanceUser.None, MagicOrResonanceUser.Technomancer].includes(character.magicOrResonanceUser)) {
                        character.magicOrResonance = attributeValue;
                    }
                    break;
                case "MAGAdept":
                    if (![MagicOrResonanceUser.None, MagicOrResonanceUser.Technomancer].includes(character.magicOrResonanceUser)) {
                        character.magicOrResonance = attributeValue;
                    }
                    break;
                case "REA":
                    character.reaction = attributeValue;
                    break;
                case "RES":
                    if (character.magicOrResonanceUser === MagicOrResonanceUser.Technomancer) {
                        character.magicOrResonance = attributeValue;
                    }
                    break;
                case "STR":
                    character.strength = attributeValue;
                    break;
                case "WIL":
                    character.willpower = attributeValue;
                    break;
            }
        }
        let skill: Node | null;
        const skillIterator = dom.evaluate(
            "/character/newskills/skills/skill",
            dom,
            null,
            XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
            null,
        );
        while ((skill = skillIterator.iterateNext()) !== null) {
            const skillIdentifier = dom.evaluate(
                "string(suid)",
                skill,
                null,
                XPathResult.STRING_TYPE,
                null,
            ).stringValue;
            const skillValue = dom.evaluate(
                "number(base)+number(karma)",
                skill,
                null,
                XPathResult.NUMBER_TYPE,
                null,
            ).numberValue;
            if (skillValue === 0) {
                continue;
            }
            character.skills.push([
                chummerSkills.get(skillIdentifier)!,
                skillValue,
            ]);
        }
        return character;
    }

    toJSON = computedFn(
        function (this: Character): CharacterJSON {
            const attributes: AttributesJSON = {
                body: this.body,
                agility: this.agility,
                reaction: this.reaction,
                strength: this.strength,
                willpower: this.willpower,
                logic: this.logic,
                intuition: this.intuition,
                charisma: this.charisma,
                edge: this.edge,

            }
            if (this.magicOrResonanceUser === MagicOrResonanceUser.Technomancer) {
                attributes.resonance = this.magicOrResonance;
            } else if (this.magicOrResonanceUser !== MagicOrResonanceUser.None) {
                attributes.magic = this.magicOrResonance;
            }
            return {
                metatype: this.metatype.metasapient,
                attributes: attributes,
                skills: this.skills.map(
                    ([skill, value]) => ({
                        name: skill.name,
                        value: value,
                        type: isSkill(skill) ? skill.type : SkillType.Active,
                    })
                )
            }
        }
    );

    @computed get url() {
        const blob = new Blob(
            [JSON.stringify(this, null, 2)],
            {
                type: "application/json",
                endings: "transparent",
            },
        );
        if (this._url !== undefined) {
            URL.revokeObjectURL(this._url)
        }
        this._url = URL.createObjectURL(blob);
        return this._url;
    }
    private _url: string | undefined = undefined;

    // Meta Text
    @observable name: string = "";
    @observable player: string = "";
    @observable notes: string = "";

    @observable metatype: Metatype = Metatypes.get(Metasapient.None)!;

    // Magic or Resonance
    @observable magicOrResonanceUser = MagicOrResonanceUser.None;

    // Qualities
    @observable qualities: Quality[] = [];

    // Attributes
    @observable body: number = 0;
    @observable agility: number = 0;
    @observable reaction: number = 0;
    @observable strength: number = 0;
    @observable willpower: number = 0;
    @observable logic: number = 0;
    @observable intuition: number = 0;
    @observable charisma: number = 0;
    @observable edge: number = 0;
    @observable magicOrResonance: number = 0;
    @observable essence: number = 6;

    // Limits
    @computed get mentalLimit() {
        return Math.ceil((this.logic * 2 + this.intuition + this.willpower) / 3);
    }

    @computed get physicalLimit() {
        return Math.ceil((this.strength * 2 + this.body + this.reaction) / 3);
    }

    @computed get socialLimit() {
        return Math.ceil((this.charisma * 2 + this.willpower + this.essence) / 3);
    }


    // Skills
    @observable skills: [Skill | SkillGroup, number][] = [];
}
