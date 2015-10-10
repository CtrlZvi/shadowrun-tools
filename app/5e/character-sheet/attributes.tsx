export const enum AttributeId {
  Agility,
  Body,
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

class Attribute {
  id: AttributeId;
  displayName: string;
}

export const Agility: Attribute = {
  displayName: "Agility",
  id: AttributeId.Agility
}

export const Body: Attribute = {
  displayName: "Body",
  id: AttributeId.Body
}

export const Edge: Attribute = {
  displayName: "Edge",
  id: AttributeId.Edge
}

export const Essence: Attribute = {
  displayName: "Essence",
  id: AttributeId.Essence
}

export const Intuition: Attribute = {
  displayName: "Intuition",
  id: AttributeId.Intuition
}
export const Logic: Attribute = {
  displayName: "Logic",
  id: AttributeId.Logic
}

export const Magic: Attribute = {
  displayName: "Magic",
  id: AttributeId.Magic
}

export const Reaction: Attribute = {
  displayName: "Reaction",
  id: AttributeId.Reaction
}

export const Resonance: Attribute = {
  displayName: "Resonance",
  id: AttributeId.Resonance
}

export const Strength: Attribute = {
  displayName: "Strength",
  id: AttributeId.Strength
}

export const Willpower: Attribute = {
  displayName: "Willpower",
  id: AttributeId.Willpower
}

export const Attributes = [
  Agility,
  Body,
  Edge,
  Essence,
  Intuition,
  Logic,
  Magic,
  Reaction,
  Resonance,
  Strength,
  Willpower
]