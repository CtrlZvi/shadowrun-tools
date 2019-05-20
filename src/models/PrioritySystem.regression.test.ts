import { Attribute } from './Attribute';
import { Character } from './Character';
import { MagicOrResonanceUser } from './MagicOrResonance';
import { Metatypes, Metasapient } from './Metatype';
import { PrioritySystem, Category } from './PrioritySystem';
import { Qualities } from './Quality';

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
});

it("Regression: duplicating instead of replacing qualities", () => {
    const character = new Character()
    const prioritySystem = new PrioritySystem(character);
    prioritySystem.updateQuality(Qualities.get("Ambidextrous")!, 0, 0);
    prioritySystem.updateQuality(Qualities.get("Analytical Mind")!, 0, 1);
    prioritySystem.updateQuality(Qualities.get("Aptitude")!, 0, 2);
    prioritySystem.updateQuality(Qualities.get("Analytical Mind")!, 0, 3);

    expect(character.qualities.length).toBe(3);
    expect(character.qualities).toMatchObject([
        Qualities.get("Ambidextrous")!,
        Qualities.get("Aptitude")!,
        Qualities.get("Analytical Mind")!,
    ]);
});

it("Regression: changing a quality rating doesn't remove the quality", () => {
    const character = new Character()
    const prioritySystem = new PrioritySystem(character);

    prioritySystem.updateQuality(Qualities.get("Focused Concentration")!, 0, 0);
    expect(character.qualities.length).toBe(1);
    expect(character.qualities).toMatchObject([
        { rating: 0, ...Qualities.get("Focused Concentration")! },
    ]);

    prioritySystem.updateQuality(Qualities.get("Focused Concentration")!, 5, 0);
    expect(character.qualities.length).toBe(1);
    expect(character.qualities).toMatchObject([
        { rating: 5, ...Qualities.get("Focused Concentration")! },
    ]);
});
