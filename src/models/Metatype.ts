import metatypes from '../data/metatypes.json'

interface Priority {
    specialAttributePoints: number;
    karmaCost: number;
}

interface Priorities {
    A?: Priority;
    B?: Priority;
    C?: Priority;
    D?: Priority;
    E?: Priority;
}

interface MetatypeAttribute {
    base: number;
    maximum: number;
}

export interface Metatype {
    priorities: Priorities;
    species: Metasapient;
    body: MetatypeAttribute;
    agility: MetatypeAttribute;
    reaction: MetatypeAttribute;
    strength: MetatypeAttribute;
    willpower: MetatypeAttribute;
    logic: MetatypeAttribute;
    intuition: MetatypeAttribute;
    charisma: MetatypeAttribute;
    edge: MetatypeAttribute;
}

export enum Metasapient {
    // Base Types
    Human = "Human",
    Elf = "Elf",
    Dwarf = "Dwarf",
    Ork = "Ork",
    Troll = "Troll",
    // Metasapients
    Gnome = "Gnome",
    Hanuman = "Hanuman",
    Koborokuru = "Koborokuru",
    Menehune = "Menehune",
    Dryad = "Dryad",
    Nocturna = "Nocturna",
    Wakyambi = "Wakyambi",
    XapiriThëpë = "Xapiri Thëpë",
    Nartaki = "Nartaki",
    Hobgoblin = "Hobgoblin",
    Ogre = "Ogre",
    Oni = "Oni",
    Satyr = "Satyr",
    Cyclops = "Cyclops",
    Fomorian = "Fomorian",
    Giant = "Giant",
    Minotaur = "Minotaur",
    Centaur = "Centaur",
    Naga = "Naga",
    Pixie = "Pixie",
    Sasquatch = "Sasquatch",
}

export function stringToMetasapient(name: string): Metasapient {
    for (let key in Metasapient) {
        if (Metasapient[key] == name) {
            return key as Metasapient;
        }
    }
    throw new Error(name + ' is not a valid Metasapient');
}

export const Metatypes: Map<Metasapient, Metatype> = new Map(
    Object.entries(metatypes).map(
        ([key, value]) => {
            // The iteration order will matter later when we're deciding what
            // changes to make to the character's priorities based on metatype
            // changes.
            // TODO (zeffron 2019-05-05) Ensure the priorities are sorted.
            return [stringToMetasapient(key), value as Metatype];
        }
    )
);
