import * as Attributes from "./attributes";
import * as RuleBooks from "./rulebooks";

export const enum SkillId {
  AcademicKnowledge,
  AeronauticsMechanic,
  Alchemy,
  AnimalHandling,
  Arcana,
  Archery,
  Armorer,
  Artificing,
  Artisan,
  Assensing,
  AstralCombat,
  Automatics,
  AutomotiveMechanic,
  Banishing,
  Binding,
  Biotechnology,
  Blades,
  Chemistry,
  Clubs,
  Compiling,
  Computer,
  Con,
  Counterspelling,
  Cybertechnology,
  Cybercombat,
  Decompiling,
  Demolitions,
  Disenchanting,
  Disguise,
  Diving,
  ElectronicWarfare,
  EscapeArtist,
  Etiquette,
  ExoticMeleeWeapon,
  ExoticRangedWeapon,
  FirstAid,
  Forgery,
  FreeFall,
  Gunnery,
  Gymnastics,
  Hacking,
  Hardware,
  HeavyWeapons,
  Herding,
  Impersonation,
  IndustrialMechanic,
  Instruction,
  InterestsKnowledge,
  Intimidation,
  Language,
  Leadership,
  Locksmith,
  Lockpicking,
  Longarms,
  Medicine,
  NauticalMechanic,
  Navigation,
  Negotiation,
  Palming,
  Perception,
  Performance,
  PilotAerospace,
  PilotAircraft,
  PilotExoticVehicle,
  PilotGroundCraft,
  PilotWalker,
  PilotWatercraft,
  Pistols,
  ProfessionalKnowledge,
  Registering,
  RitualSpellcasting,
  Running,
  Sneaking,
  Software,
  Spellcasting,
  StreetKnowledge,
  Summoning,
  Survival,
  Swimming,
  ThrowingWeapons,
  Tracking,
  UnarmedCombat
}

export const enum SkillType {
  Active,
  Knowledge
}

class Skill {
  id: SkillId;
  displayName: string;
  attribute: Attributes.Attribute;
  type: SkillType;
  source: RuleBooks.RuleBook;
  pages: number[];
}

export const archery: Skill = {
  attribute: Attributes.agility,
  displayName: "Archery",
  id: SkillId.Archery,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const automatics: Skill = {
  attribute: Attributes.agility,
  displayName: "Automatics",
  id: SkillId.Automatics,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const blades: Skill = {
  attribute: Attributes.agility,
  displayName: "Blades",
  id: SkillId.Blades,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const clubs: Skill = {
  attribute: Attributes.agility,
  displayName: "Clubs",
  id: SkillId.Clubs,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const escapeArtist: Skill = {
  attribute: Attributes.agility,
  displayName: "Escape Artist",
  id: SkillId.EscapeArtist,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const exoticMeleeWeapon: Skill = {
  attribute: Attributes.agility,
  displayName: "Exotic Melee Weapon (Specific)",
  id: SkillId.ExoticMeleeWeapon,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const exoticRangedWeapon: Skill = {
  attribute: Attributes.agility,
  displayName: "Exotic Ranged Weapon (Specific)",
  id: SkillId.ExoticRangedWeapon,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const gunnery: Skill = {
  attribute: Attributes.agility,
  displayName: "Gunnery",
  id: SkillId.Gunnery,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const gymnastics: Skill = {
  attribute: Attributes.agility,
  displayName: "Gymnastics",
  id: SkillId.Gymnastics,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const heavyWeapons: Skill = {
  attribute: Attributes.agility,
  displayName: "Heavy Weapons",
  id: SkillId.HeavyWeapons,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const herding: Skill = {
  attribute: Attributes.agility,
  displayName: "Herding",
  id: SkillId.Herding,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const locksmith: Skill = {
  attribute: Attributes.agility,
  displayName: "Locksmith",
  id: SkillId.Locksmith,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const lockpicking: Skill = {
  attribute: Attributes.agility,
  displayName: "Lockpicking",
  id: SkillId.Lockpicking,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const longarms: Skill = {
  attribute: Attributes.agility,
  displayName: "Longarms",
  id: SkillId.Longarms,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const palming: Skill = {
  attribute: Attributes.agility,
  displayName: "Palming",
  id: SkillId.Palming,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const pistols: Skill = {
  attribute: Attributes.agility,
  displayName: "Pistols",
  id: SkillId.Pistols,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const sneaking: Skill = {
  attribute: Attributes.agility,
  displayName: "Sneaking",
  id: SkillId.Sneaking,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const throwingWeapons: Skill = {
  attribute: Attributes.agility,
  displayName: "Throwing Weapons",
  id: SkillId.ThrowingWeapons,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const unarmedCombat: Skill = {
  attribute: Attributes.agility,
  displayName: "Unarmed Combat",
  id: SkillId.UnarmedCombat,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const diving: Skill = {
  attribute: Attributes.body,
  displayName: "Diving",
  id: SkillId.Diving,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const freeFall: Skill = {
  attribute: Attributes.body,
  displayName: "Free-Fall",
  id: SkillId.FreeFall,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const pilotAerospace: Skill = {
  attribute: Attributes.reaction,
  displayName: "Pilot Aerospace",
  id: SkillId.PilotAerospace,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const pilotAircraft: Skill = {
  attribute: Attributes.reaction,
  displayName: "Pilot Aircraft",
  id: SkillId.PilotAircraft,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const pilotExoticVehicle: Skill = {
  attribute: Attributes.reaction,
  displayName: "Pilot Exotic Vehicle (Specific)",
  id: SkillId.PilotExoticVehicle,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const pilotGroundCraft: Skill = {
  attribute: Attributes.reaction,
  displayName: "Pilot Ground Craft",
  id: SkillId.PilotGroundCraft,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const pilotWalker: Skill = {
  attribute: Attributes.reaction,
  displayName: "Pilot Walker",
  id: SkillId.PilotWalker,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const pilotWatercraft: Skill = {
  attribute: Attributes.reaction,
  displayName: "Pilot Watercraft",
  id: SkillId.PilotWatercraft,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const running: Skill = {
  attribute: Attributes.strength,
  displayName: "Running",
  id: SkillId.Running,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const swimming: Skill = {
  attribute: Attributes.strength,
  displayName: "Swimming",
  id: SkillId.Swimming,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const animalHandling: Skill = {
  attribute: Attributes.charisma,
  displayName: "Animal Handling",
  id: SkillId.AnimalHandling,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const con: Skill = {
  attribute: Attributes.charisma,
  displayName: "Con",
  id: SkillId.Con,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const etiquette: Skill = {
  attribute: Attributes.charisma,
  displayName: "Etiquette",
  id: SkillId.Etiquette,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const impersonation: Skill = {
  attribute: Attributes.charisma,
  displayName: "Impersonation",
  id: SkillId.Impersonation,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const instruction: Skill = {
  attribute: Attributes.charisma,
  displayName: "Instruction",
  id: SkillId.Instruction,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const intimidation: Skill = {
  attribute: Attributes.charisma,
  displayName: "Intimidation",
  id: SkillId.Intimidation,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const leadership: Skill = {
  attribute: Attributes.charisma,
  displayName: "Leadership",
  id: SkillId.Leadership,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const negotiation: Skill = {
  attribute: Attributes.charisma,
  displayName: "Negotiation",
  id: SkillId.Negotiation,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const performance: Skill = {
  attribute: Attributes.charisma,
  displayName: "Performance",
  id: SkillId.Performance,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const artisan: Skill = {
  attribute: Attributes.intuition,
  displayName: "Artisan",
  id: SkillId.Artisan,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const assensing: Skill = {
  attribute: Attributes.intuition,
  displayName: "Assensing",
  id: SkillId.Assensing,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const disguise: Skill = {
  attribute: Attributes.intuition,
  displayName: "Disguise (includes makeup and enhancement)",
  id: SkillId.Disguise,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const interestsKnowledge: Skill = {
  attribute: Attributes.intuition,
  displayName: "Interests Knowledge",
  id: SkillId.InterestsKnowledge,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Knowledge
};

export const language: Skill = {
  attribute: Attributes.intuition,
  displayName: "Language",
  id: SkillId.Language,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Knowledge
};

export const navigation: Skill = {
  attribute: Attributes.intuition,
  displayName: "Navigation",
  id: SkillId.Navigation,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const perception: Skill = {
  attribute: Attributes.intuition,
  displayName: "Perception",
  id: SkillId.Perception,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const streetKnowledge: Skill = {
  attribute: Attributes.intuition,
  displayName: "Street Knowledge",
  id: SkillId.StreetKnowledge,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Knowledge
};

export const tracking: Skill = {
  attribute: Attributes.intuition,
  displayName: "Tracking",
  id: SkillId.Tracking,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const academicKnowledge: Skill = {
  attribute: Attributes.logic,
  displayName: "Academic Knowledge",
  id: SkillId.AcademicKnowledge,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Knowledge
};

export const aeronauticsMechanic: Skill = {
  attribute: Attributes.logic,
  displayName: "Aeronautics Mechanic",
  id: SkillId.AeronauticsMechanic,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const arcana: Skill = {
  attribute: Attributes.logic,
  displayName: "Arcana",
  id: SkillId.Arcana,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const armorer: Skill = {
  attribute: Attributes.logic,
  displayName: "Armorer",
  id: SkillId.Armorer,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const automotiveMechanic: Skill = {
  attribute: Attributes.logic,
  displayName: "Automotive Mechanic",
  id: SkillId.AutomotiveMechanic,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const biotechnology: Skill = {
  attribute: Attributes.logic,
  displayName: "Biotechnology",
  id: SkillId.Biotechnology,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const chemistry: Skill = {
  attribute: Attributes.logic,
  displayName: "Chemistry",
  id: SkillId.Chemistry,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const computer: Skill = {
  attribute: Attributes.logic,
  displayName: "Computer",
  id: SkillId.Computer,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const cybertechnology: Skill = {
  attribute: Attributes.logic,
  displayName: "Cybertechnology",
  id: SkillId.Cybertechnology,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const cybercombat: Skill = {
  attribute: Attributes.logic,
  displayName: "Cybercombat",
  id: SkillId.Cybercombat,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const demolitions: Skill = {
  attribute: Attributes.logic,
  displayName: "Demolitions",
  id: SkillId.Demolitions,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const electronicWarfare: Skill = {
  attribute: Attributes.logic,
  displayName: "Electronic Warfare",
  id: SkillId.ElectronicWarfare,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const firstAid: Skill = {
  attribute: Attributes.logic,
  displayName: "First Aid",
  id: SkillId.FirstAid,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const forgery: Skill = {
  attribute: Attributes.logic,
  displayName: "Forgery",
  id: SkillId.Forgery,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const hacking: Skill = {
  attribute: Attributes.logic,
  displayName: "Hacking",
  id: SkillId.Hacking,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const hardware: Skill = {
  attribute: Attributes.logic,
  displayName: "Hardware",
  id: SkillId.Hardware,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const industrialMechanic: Skill = {
  attribute: Attributes.logic,
  displayName: "Industrial Mechanic",
  id: SkillId.IndustrialMechanic,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const medicine: Skill = {
  attribute: Attributes.logic,
  displayName: "Medicine",
  id: SkillId.Medicine,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const nauticalMechanic: Skill = {
  attribute: Attributes.logic,
  displayName: "Nautical Mechanic",
  id: SkillId.NauticalMechanic,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const professionalKnowledge: Skill = {
  attribute: Attributes.logic,
  displayName: "Professional Knowledge",
  id: SkillId.ProfessionalKnowledge,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Knowledge
};

export const software: Skill = {
  attribute: Attributes.logic,
  displayName: "Software",
  id: SkillId.Software,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const astralCombat: Skill = {
  attribute: Attributes.willpower,
  displayName: "Astral Combat",
  id: SkillId.AstralCombat,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const survival: Skill = {
  attribute: Attributes.willpower,
  displayName: "Survival",
  id: SkillId.Survival,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const alchemy: Skill = {
  attribute: Attributes.magic,
  displayName: "Alchemy",
  id: SkillId.Alchemy,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const artificing: Skill = {
  attribute: Attributes.magic,
  displayName: "Artificing",
  id: SkillId.Artificing,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const banishing: Skill = {
  attribute: Attributes.magic,
  displayName: "Banishing",
  id: SkillId.Banishing,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const binding: Skill = {
  attribute: Attributes.magic,
  displayName: "Binding",
  id: SkillId.Binding,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const counterspelling: Skill = {
  attribute: Attributes.magic,
  displayName: "Counterspelling",
  id: SkillId.Counterspelling,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const disenchanting: Skill = {
  attribute: Attributes.magic,
  displayName: "Disenchanting",
  id: SkillId.Disenchanting,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const ritualSpellcasting: Skill = {
  attribute: Attributes.magic,
  displayName: "Ritual Spellcasting",
  id: SkillId.RitualSpellcasting,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const spellcasting: Skill = {
  attribute: Attributes.magic,
  displayName: "Spellcasting",
  id: SkillId.Spellcasting,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const summoning: Skill = {
  attribute: Attributes.magic,
  displayName: "Summoning",
  id: SkillId.Summoning,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const compiling: Skill = {
  attribute: Attributes.resonance,
  displayName: "Compiling",
  id: SkillId.Compiling,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const decompiling: Skill = {
  attribute: Attributes.resonance,
  displayName: "Decompiling",
  id: SkillId.Decompiling,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const registering: Skill = {
  attribute: Attributes.resonance,
  displayName: "Registering",
  id: SkillId.Registering,
  pages: [],
  source: RuleBooks.shadowrun,
  type: SkillType.Active
};

export const skills = [
  academicKnowledge,
  aeronauticsMechanic,
  alchemy,
  animalHandling,
  arcana,
  archery,
  armorer,
  artificing,
  artisan,
  assensing,
  astralCombat,
  automatics,
  automotiveMechanic,
  banishing,
  binding,
  biotechnology,
  blades,
  chemistry,
  clubs,
  compiling,
  computer,
  con,
  counterspelling,
  cybertechnology,
  cybercombat,
  decompiling,
  demolitions,
  disenchanting,
  disguise,
  diving,
  electronicWarfare,
  escapeArtist,
  etiquette,
  exoticMeleeWeapon,
  exoticRangedWeapon,
  firstAid,
  forgery,
  freeFall,
  gunnery,
  gymnastics,
  hacking,
  hardware,
  heavyWeapons,
  herding,
  impersonation,
  industrialMechanic,
  instruction,
  interestsKnowledge,
  intimidation,
  language,
  leadership,
  locksmith,
  lockpicking,
  longarms,
  medicine,
  nauticalMechanic,
  navigation,
  negotiation,
  palming,
  perception,
  performance,
  pilotAerospace,
  pilotAircraft,
  pilotExoticVehicle,
  pilotGroundCraft,
  pilotWalker,
  pilotWatercraft,
  pistols,
  professionalKnowledge,
  registering,
  ritualSpellcasting,
  running,
  sneaking,
  software,
  spellcasting,
  streetKnowledge,
  summoning,
  survival,
  swimming,
  throwingWeapons,
  tracking,
  unarmedCombat
];

export function getSkillsByAttribute(attribute: Attributes.Attribute): Skill[] {
  "use strict";
  let matchingSkills: Skill[] = [];
  for (let skill of skills) {
    if (skill.attribute === attribute) {
      matchingSkills.push(skill);
    }
  }
  return matchingSkills;
}
