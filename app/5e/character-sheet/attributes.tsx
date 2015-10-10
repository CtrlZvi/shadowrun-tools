export const enum AttributeId {
  Agility,
  Body,
  Charisma,
  Edge,
  Essence,
  Intuition,
  Logic,
  Magic,
  Reaction,
  Resonance,
  Strength,
  Willpower
}

export class Attribute {
  id: AttributeId;
  displayName: string;
}

export const agility: Attribute = {
  displayName: "Agility",
  id: AttributeId.Agility
};

export const body: Attribute = {
  displayName: "Body",
  id: AttributeId.Body
};

export const charisma: Attribute = {
  displayName: "Charisma",
  id: AttributeId.Charisma
};

export const edge: Attribute = {
  displayName: "Edge",
  id: AttributeId.Edge
};

export const essence: Attribute = {
  displayName: "Essence",
  id: AttributeId.Essence
};

export const intuition: Attribute = {
  displayName: "Intuition",
  id: AttributeId.Intuition
};

export const logic: Attribute = {
  displayName: "Logic",
  id: AttributeId.Logic
};

export const magic: Attribute = {
  displayName: "Magic",
  id: AttributeId.Magic
};

export const reaction: Attribute = {
  displayName: "Reaction",
  id: AttributeId.Reaction
};

export const resonance: Attribute = {
  displayName: "Resonance",
  id: AttributeId.Resonance
};

export const strength: Attribute = {
  displayName: "Strength",
  id: AttributeId.Strength
};

export const willpower: Attribute = {
  displayName: "Willpower",
  id: AttributeId.Willpower
};

export const attributes = [
  agility,
  body,
  charisma,
  edge,
  essence,
  intuition,
  logic,
  magic,
  reaction,
  resonance,
  strength,
  willpower
];
