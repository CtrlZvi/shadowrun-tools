import { observable, computed } from "mobx";
import { Metatype, Metatypes, Metasapient } from './Metatype';

export class Character {
    // Meta Text
    @observable name: string = "";
    @observable player: string = "";
    @observable notes: string = "";

    // Personal Data
    @observable metatype: Metatype = Metatypes.get(Metasapient.None)!;

    // Attributes
    @computed get body() {
        return this.metatype.body.base;
    }
    @computed get agility() {
        return this.metatype.agility.base;
    }
    @computed get reaction() {
        return this.metatype.reaction.base;
    }
    @computed get strength() {
        return this.metatype.strength.base;
    }
    @computed get willpower() {
        return this.metatype.willpower.base;
    }
    @computed get logic() {
        return this.metatype.logic.base;
    }
    @computed get intuition() {
        return this.metatype.intuition.base;
    }
    @computed get charisma() {
        return this.metatype.charisma.base;
    }
    @computed get edge() {
        return this.metatype.edge.base;
    }
}
