import { observer, useLocalStore } from 'mobx-react-lite';
import React from "react";

import CharacterSheet from "../CharacterSheet";
import PriorityComponent from "../Priority";
import CharacterContext from "../../contexts/Character";
import PriorityContext from '../../contexts/Priority';
import { Character } from "../../models/Character";
import { PrioritySystemMetadata } from '../../models/PrioritySystem';

const CharacterCreator = observer(() => {
    const character = useLocalStore(() => new Character());
    const priorityMetadata = useLocalStore(() => new PrioritySystemMetadata(character));

    return (
        <PriorityContext.Provider value={priorityMetadata}>
            <CharacterContext.Provider value={character} >
                <PriorityComponent />
                <CharacterSheet />
            </CharacterContext.Provider>
        </PriorityContext.Provider>
    )
});

export default CharacterCreator;
