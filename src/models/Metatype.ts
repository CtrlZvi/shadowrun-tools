import metatypes from '../data/metatypes.json'

export interface MetatypeAttribute {
    base: number;
    maximum: number;
}

export interface Metatype {
    metasapient: Metasapient;
    body: MetatypeAttribute;
    agility: MetatypeAttribute;
    reaction: MetatypeAttribute;
    strength: MetatypeAttribute;
    willpower: MetatypeAttribute;
    logic: MetatypeAttribute;
    intuition: MetatypeAttribute;
    charisma: MetatypeAttribute;
    edge: MetatypeAttribute;
    magic: MetatypeAttribute;
    resonance: MetatypeAttribute;
}

export enum Metasapient {
    None = "None",
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

const InvalidMetatype: Metatype = {
    metasapient: Metasapient.None,
    body: { base: 0, maximum: 0 },
    agility: { base: 0, maximum: 0 },
    reaction: { base: 0, maximum: 0 },
    strength: { base: 0, maximum: 0 },
    willpower: { base: 0, maximum: 0 },
    logic: { base: 0, maximum: 0 },
    intuition: { base: 0, maximum: 0 },
    charisma: { base: 0, maximum: 0 },
    edge: { base: 0, maximum: 0 },
    magic: { base: 0, maximum: 0 },
    resonance: { base: 0, maximum: 0 },
}

export const Metatypes: Map<Metasapient, Metatype> = new Map(
    [
        ...Object.entries(metatypes).map(
            ([name, value]): [Metasapient, Metatype] => {
                let metasapient = [...Object.values(Metasapient)]
                    .find(value => value == name)!;
                return [metasapient, { metasapient: metasapient, ...value }];
            }
        ),
        [Metasapient.None, InvalidMetatype],
    ]
);
