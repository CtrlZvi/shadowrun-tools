import { observable, computed } from "mobx";

import { Attribute } from "./Attribute";
import { MagicOrResonanceUser } from "./MagicOrResonance";
import { Metatype, Metatypes, Metasapient } from './Metatype';
import { Quality } from './Quality';
import { Skill, SkillGroup } from './Skill';

export class Character {

    public static fromChummer5a(dom: XMLDocument): Character {
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
        let attribute: Node | null;;
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

    public toJSON() {
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
    @observable attributes = new Map<Attribute, number>(
        Object.values(Attribute)
            .filter((attribute) => !isNaN(Number(attribute)))
            .map((attribute: Attribute) => [attribute, 0])
    );

    @computed get body() {
        return this.metatype.body.base + this.attributes.get(Attribute.Body)!;
    }
    set body(value) {
        this.attributes.set(Attribute.Body, value - this.metatype.body.base);
    }

    @computed get agility() {
        return this.metatype.agility.base + this.attributes.get(Attribute.Agility)!;
    }
    set agility(value) {
        this.attributes.set(Attribute.Agility, value - this.metatype.agility.base);
    }

    @computed get reaction() {
        return this.metatype.reaction.base + this.attributes.get(Attribute.Reaction)!;
    }
    set reaction(value) {
        this.attributes.set(Attribute.Reaction, value - this.metatype.reaction.base);
    }

    @computed get strength() {
        return this.metatype.strength.base + this.attributes.get(Attribute.Strength)!;
    }
    set strength(value) {
        this.attributes.set(Attribute.Strength, value - this.metatype.strength.base);
    }

    @computed get willpower() {
        return this.metatype.willpower.base + this.attributes.get(Attribute.Willpower)!;
    }
    set willpower(value) {
        this.attributes.set(Attribute.Willpower, value - this.metatype.willpower.base);
    }

    @computed get logic() {
        return this.metatype.logic.base + this.attributes.get(Attribute.Logic)!;
    }
    set logic(value) {
        this.attributes.set(Attribute.Logic, value - this.metatype.logic.base);
    }

    @computed get intuition() {
        return this.metatype.intuition.base + this.attributes.get(Attribute.Intuition)!;
    }
    set intuition(value) {
        this.attributes.set(Attribute.Intuition, value - this.metatype.intuition.base);
    }

    @computed get charisma() {
        return this.metatype.charisma.base + this.attributes.get(Attribute.Charisma)!;
    }
    set charisma(value) {
        this.attributes.set(Attribute.Charisma, value - this.metatype.charisma.base);
    }

    @computed get edge() {
        return this.metatype.edge.base + this.attributes.get(Attribute.Edge)!;
    }
    set edge(value) {
        this.attributes.set(Attribute.Edge, value - this.metatype.edge.base);
    }

    @computed get magicOrResonance() {
        return this.magicOrResonanceUser !== MagicOrResonanceUser.None ?
            this.attributes.get(Attribute.MagicOrResonance)! :
            this.metatype.magic.base;
    }
    set magicOrResonance(value) {
        this.attributes.set(Attribute.MagicOrResonance, value);
    }

    // Skills
    @observable skills: [Skill | SkillGroup, number][] = [];
}
