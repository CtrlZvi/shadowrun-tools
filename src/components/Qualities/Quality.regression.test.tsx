import { configure, shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";

import QualityComponent from "./Quality";
import CharacterContext from "../../contexts/Character";
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Character } from "../../models/Character";
import { PrioritySystem } from "../../models/PrioritySystem";
import { Qualities } from '../../models/Quality';

configure({ adapter: new Adapter() });

it("Regression: updating a quality rating results in a rating change", () => {
    const character = new Character()
    const prioritySystem = new PrioritySystem(character);

    prioritySystem.updateQuality(Qualities.get("Focused Concentration")!, 0, 0);

    const wrapper = mount(
        <PrioritySystemContext.Provider value={prioritySystem}>
            <CharacterContext.Provider value={character} >
                <table>
                    <tbody>
                        <QualityComponent quality={character.qualities[0]} index={0} />
                    </tbody>
                </table>
            </CharacterContext.Provider>
        </PrioritySystemContext.Provider>
    );

    (wrapper.find(".quality-rating").getDOMNode() as HTMLSelectElement).value = "6";
    wrapper
        .find(".quality-rating")
        .simulate(
            "change"
        );

    expect(character.qualities.length).toBe(1);
    expect(character.qualities).toMatchObject([
        { rating: 5, ...Qualities.get("Focused Concentration")! },
    ]);
});