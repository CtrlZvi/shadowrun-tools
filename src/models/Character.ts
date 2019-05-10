import { observable, computed, action } from "mobx";

import { Attribute } from "./Attribute";
import { Metatype, Metatypes, Metasapient } from './Metatype';

export class Character {
    // Meta Text
    @observable name: string = "";
    @observable player: string = "";
    @observable notes: string = "";

    // Personal Data
    @observable metatype: Metatype = Metatypes.get(Metasapient.None)!;

    // Attributes
    @observable attributes = new Map<Attribute, number>(
        Object.values(Attribute)
            .filter((attribute) => !isNaN(Number(attribute)))
            .map((attribute: Attribute) => [attribute, 0])
    );

    @computed get body() {
        return this.metatype.body.base + this.attributes.get(Attribute.Body)!;
    }
    @computed get agility() {
        return this.metatype.agility.base + this.attributes.get(Attribute.Agility)!;
    }
    @computed get reaction() {
        return this.metatype.reaction.base + this.attributes.get(Attribute.Reaction)!;
    }
    @computed get strength() {
        return this.metatype.strength.base + this.attributes.get(Attribute.Strength)!;
    }
    @computed get willpower() {
        return this.metatype.willpower.base + this.attributes.get(Attribute.Willpower)!;
    }
    @computed get logic() {
        return this.metatype.logic.base + this.attributes.get(Attribute.Logic)!;
    }
    @computed get intuition() {
        return this.metatype.intuition.base + this.attributes.get(Attribute.Intuition)!;
    }
    @computed get charisma() {
        return this.metatype.charisma.base + this.attributes.get(Attribute.Charisma)!;
    }
    @computed get edge() {
        return this.metatype.edge.base + this.attributes.get(Attribute.Edge)!;
    }
}
