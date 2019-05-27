import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import './style.scss';
import CharacterSheetSection from '../CharacterSheetSection';
import CharacterContext from "../../contexts/Character";
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Attribute } from '../../models/Attribute';

const AttributesComponent = observer(
    (_: {}, ref) => {
        const character = useContext(CharacterContext);
        const prioritySystem = useContext(PrioritySystemContext);

        console.debug(`Screen resolution ${screen.width}x${screen.height}`); // eslint-disable-line no-restricted-globals
        console.debug(`Device Pixel Ratio: ${window.devicePixelRatio}`);
        return (
            <CharacterSheetSection className="attributes" name={"ATTRIBUTES"} ref={ref}>
                <label htmlFor="attribute-body">
                    <span>Body</span>
                </label>
                <div>
                    {character.body}({character.body})
                        <input
                        type="number"
                        id="attribute-body"
                        value={character.body}
                        min={character.metatype.body !== undefined ? character.metatype.body.base : 0}
                        max={character.metatype.body !== undefined ? character.metatype.body.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Body,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-">
                    <span>Essence</span>
                </label>
                <div></div>
                <label htmlFor="attribute-agility">
                    <span>Agility</span>
                </label>
                <div>
                    {character.agility}({character.agility})
                        <input
                        type="number"
                        id="attribute-agility"
                        value={character.agility}
                        min={character.metatype.agility !== undefined ? character.metatype.agility.base : 0}
                        max={character.metatype.agility !== undefined ? character.metatype.agility.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Agility,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-magic-or-resonance">
                    <span>Magic/Resonance</span>
                </label>
                <div>
                    {character.magicOrResonance}({character.magicOrResonance})
                        <input
                        type="number"
                        id="attribute-magic-or-resonance"
                        value={character.magicOrResonance}
                        min={0}
                        max={6}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.MagicOrResonance,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-reaction">
                    <span>Reaction</span>
                </label>
                <div>
                    {character.reaction}({character.reaction})
                        <input
                        type="number"
                        id="attribute-reaction"
                        value={character.reaction}
                        min={character.metatype.reaction !== undefined ? character.metatype.reaction.base : 0}
                        max={character.metatype.reaction !== undefined ? character.metatype.reaction.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Reaction,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-initiative">
                    <span>Initiative</span>
                </label>
                <div></div>
                <label htmlFor="attribute-strength">
                    <span>Strength</span>
                </label>
                <div>
                    {character.strength}({character.strength})
                        <input
                        type="number"
                        id="attribute-strength"
                        value={character.strength}
                        min={character.metatype.strength !== undefined ? character.metatype.strength.base : 0}
                        max={character.metatype.strength !== undefined ? character.metatype.strength.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Strength,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-matrix-initiative">
                    <span>Matrix Initiative</span>
                </label>
                <div></div>
                <label htmlFor="attribute-willpower">
                    <span>Willpower</span>
                </label>
                <div>
                    {character.willpower}({character.willpower})
                        <input
                        type="number"
                        id="attribute-willpower"
                        value={character.willpower}
                        min={character.metatype.willpower !== undefined ? character.metatype.willpower.base : 0}
                        max={character.metatype.willpower !== undefined ? character.metatype.willpower.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Willpower,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-astral-initiative">
                    <span>Astral Initiative</span>
                </label>
                <div></div>
                <label htmlFor="attribute-logic">
                    <span>Logic</span>
                </label>
                <div>
                    {character.logic}({character.logic})
                        <input
                        type="number"
                        id="attribute-logic"
                        value={character.logic}
                        min={character.metatype.logic !== undefined ? character.metatype.logic.base : 0}
                        max={character.metatype.logic !== undefined ? character.metatype.logic.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Logic,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-composure">
                    <span>Composure</span>
                </label>
                <div></div>
                <label htmlFor="attribute-intuition">
                    <span>Intuition</span>
                </label>
                <div>
                    {character.intuition}({character.intuition})
                        <input
                        type="number"
                        id="attribute-intuition"
                        value={character.intuition}
                        min={character.metatype.intuition !== undefined ? character.metatype.intuition.base : 0}
                        max={character.metatype.intuition !== undefined ? character.metatype.intuition.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Intuition,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-judge-intentions">
                    <span>Judge Intentions</span>
                </label>
                <div></div>
                <label htmlFor="attribute-charisma">
                    <span>Charisma</span>
                </label>
                <div>
                    {character.charisma}({character.charisma})
                        <input
                        type="number"
                        id="attribute-charisma"
                        value={character.charisma}
                        min={character.metatype.charisma !== undefined ? character.metatype.charisma.base : 0}
                        max={character.metatype.charisma !== undefined ? character.metatype.charisma.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Charisma,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-memory">
                    <span>Memory</span>
                </label>
                <div></div>
                <label htmlFor="attribute-edge">
                    <span>Edge</span>
                </label>
                <div>
                    {character.edge}({character.edge})
                        <input
                        type="number"
                        id="attribute-edge"
                        value={character.edge}
                        min={character.metatype.edge !== undefined ? character.metatype.edge.base : 0}
                        max={character.metatype.edge !== undefined ? character.metatype.edge.maximum : 0}
                        onChange={action(
                            (event: ChangeEvent<HTMLInputElement>) => prioritySystem
                                .updateAttribute(
                                    Attribute.Edge,
                                    event.currentTarget.valueAsNumber,
                                )
                        )} />
                </div>
                <label htmlFor="attribute-lift-carry">
                    <span>Lift/Carry</span>
                </label>
                <div></div>
                <label htmlFor="attribute-edge-points">
                    <span>Edge Points</span>
                </label>
                <div className="edge-points"></div>
                <label htmlFor="attribute-movement">
                    <span>Movement</span>
                </label>
                <div></div>
                <div className="limits">
                    <label htmlFor="attribute-physical-limit">
                        <span>Physical Limit</span>
                    </label>
                    <div></div>
                    <label htmlFor="attribute-mental-limit">
                        <span>Mental Limit</span>
                    </label>
                    <div></div>
                    <label htmlFor="attribute-social-limit">
                        <span>Social Limit</span>
                    </label>
                    <div></div>
                </div>
            </CharacterSheetSection >
        )
    },
    { forwardRef: true },
)

AttributesComponent.displayName = "ATTRIBUTES";

export default AttributesComponent;