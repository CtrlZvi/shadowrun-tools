import { action } from 'mobx';
import { observer, useLocalStore } from 'mobx-react-lite';
import React, { ChangeEvent } from "react";

import './style.scss';
import CharacterSheet from "../CharacterSheet";
import PrioritySystemComponent from "../PrioritySystem";
import CharacterContext from "../../contexts/Character";
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Character } from "../../models/Character";
import { PrioritySystem } from '../../models/PrioritySystem';

const CharacterCreator = observer(() => {
    const characterStore = useLocalStore(() => ({ character: new Character() }));
    const prioritySystemStore = useLocalStore(() => ({ prioritySystem: new PrioritySystem(characterStore.character) }));

    return (
        <PrioritySystemContext.Provider value={prioritySystemStore.prioritySystem}>
            <input
                type="file"
                accept=".chum5,application/json"
                onChange={
                    (event: ChangeEvent) => Character.load(
                        (event.currentTarget as HTMLInputElement).files!
                    ).then(
                        action((character: Character) => {
                            characterStore.character = character;
                            prioritySystemStore.prioritySystem = new PrioritySystem(characterStore.character);
                        })
                    )
                } />
            <a download="character_sheet.json" href={characterStore.character.url}>
                <button type="button" >
                    Save
                </button>
            </a>
            <CharacterContext.Provider value={characterStore.character} >
                <PrioritySystemComponent />
                <CharacterSheet />
            </CharacterContext.Provider>
        </PrioritySystemContext.Provider>
    )
});

export default CharacterCreator;
