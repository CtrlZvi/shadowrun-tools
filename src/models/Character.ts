import { observable, computed } from "mobx";
import { computedFn } from "mobx-utils";

import { MagicOrResonanceUser } from "./MagicOrResonance";
import { Metatype, Metatypes, Metasapient } from './Metatype';
import { Quality } from './Quality';
import { Skill, SkillGroup } from './Skill';

export class Character {

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
        return character;
    }

    toJSON = computedFn(
        function (this: Character) {
            return {
                metatype: this.metatype.metasapient,
                attributes: {
                    body: this.body,
                    agility: this.agility,
                    reaction: this.reaction,
                    strength: this.strength,
                    willpower: this.willpower,
                    logic: this.logic,
                    intuition: this.intuition,
                    charisma: this.charisma,
                    edge: this.edge,
                    magic: ![MagicOrResonanceUser.Technomancer, MagicOrResonanceUser.None].includes(this.magicOrResonanceUser) ? this.magicOrResonance : 0,
                    resonance: this.magicOrResonanceUser === MagicOrResonanceUser.Technomancer ? this.magicOrResonance : 0,
                }
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
