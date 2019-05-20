import { observable, computed } from "mobx";

import { Attribute } from "./Attribute";
import { MagicOrResonanceUser } from "./MagicOrResonance";
import { Metatype, Metatypes, Metasapient } from './Metatype';
import { Quality } from './Quality';

export class Character {
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

    @computed get magicorresonance() {
        return this.magicOrResonanceUser !== MagicOrResonanceUser.None ?
            this.attributes.get(Attribute.MagicOrResonance)! :
            this.metatype.magic.base;
    }
    set magicorresonance(value) {
        this.attributes.set(Attribute.MagicOrResonance, value);
    }
}
