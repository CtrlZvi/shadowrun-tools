export const enum RuleBookIds {
  Shadowrun
}

export class RuleBook {
  id: RuleBookIds;
  displayName: string;
  abbreviation: string;
}

export const shadowrun: RuleBook = {
  abbreviation: "SR",
  displayName: "Shadowrun",
  id: RuleBookIds.Shadowrun
};

export const ruleBooks = [
  shadowrun
];
