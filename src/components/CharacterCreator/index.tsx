import { observer, useLocalStore } from 'mobx-react-lite';
import React from "react";

import CharacterSheet from "../CharacterSheet";
import PrioritySystemComponent from "../PrioritySystem";
import CharacterContext from "../../contexts/Character";
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Character } from "../../models/Character";
import { PrioritySystem } from '../../models/PrioritySystem';

const CharacterCreator = observer(() => {
    const character = useLocalStore(() => new Character());
    const priorityMetadata = useLocalStore(() => new PrioritySystem(character));

    return (
        <PrioritySystemContext.Provider value={priorityMetadata}>
            <CharacterContext.Provider value={character} >
                <PrioritySystemComponent />
                <CharacterSheet />
            </CharacterContext.Provider>
        </PrioritySystemContext.Provider>
    )
});

export default CharacterCreator;
