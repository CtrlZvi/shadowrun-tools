import { Attribute } from './Attribute';
import { Character } from './Character';
import { MagicOrResonanceUser } from './MagicOrResonance';
import { Metatypes, Metasapient } from './Metatype';
import { PrioritySystem, Category } from './PrioritySystem';

it("Regression: inability to increase magic or resonance attribute", () => {
    const character = new Character()
    const prioritySystem = new PrioritySystem(character);
    prioritySystem.updateMetatype(Metatypes.get(Metasapient.Human)!);
    prioritySystem.updateMagicOrResonanceUser(MagicOrResonanceUser.Technomancer);
    prioritySystem.updateAttribute(Attribute.Body, 6);
    prioritySystem.updateAttribute(Attribute.Agility, 6);
    prioritySystem.updateAttribute(Attribute.Reaction, 6);
    prioritySystem.updateAttribute(Attribute.Strength, 6);
    prioritySystem.updateAttribute(Attribute.Willpower, 2);
    prioritySystem.updateAttribute(Attribute.Edge, 7);

    expect(character.magicorresonance).toBe(4);
    expect(prioritySystem.priorities).toEqual({
        A: Category.Attributes,
        B: Category.MagicOrResonance,
        C: Category.Metatype,
        D: Category.Skills,
        E: Category.Resources,
    });

    prioritySystem.updateAttribute(Attribute.MagicOrResonance, 5);

    expect(character.magicorresonance).toBe(5);
    expect(prioritySystem.priorities).toEqual({
        A: Category.Attributes,
        B: Category.Metatype,
        C: Category.MagicOrResonance,
        D: Category.Skills,
        E: Category.Resources,
    });
})