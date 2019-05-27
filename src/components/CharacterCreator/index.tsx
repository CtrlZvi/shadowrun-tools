import { observer, useLocalStore } from 'mobx-react-lite';
import React, { ChangeEvent, MouseEvent } from "react";

import './style.scss';
import CharacterSheet from "../CharacterSheet";
import PrioritySystemComponent from "../PrioritySystem";
import CharacterContext from "../../contexts/Character";
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Character } from "../../models/Character";
import { PrioritySystem } from '../../models/PrioritySystem';
import { action } from 'mobx';

const CharacterCreator = observer(() => {
    const characterStore = useLocalStore(() => ({ character: new Character() }));
    const prioritySystemStore = useLocalStore(() => ({ prioritySystem: new PrioritySystem(characterStore.character) }));

    return (
        <PrioritySystemContext.Provider value={prioritySystemStore.prioritySystem}>
            <input
                type="file"
                accept=".chum5"
                onChange={
                    (event: ChangeEvent) => {
                        const reader = new FileReader();
                        reader.onload = action((event) => {
                            const parser = new DOMParser();
                            const dom = parser.parseFromString(
                                reader.result as string,
                                "text/xml",
                            )
                            characterStore.character = Character.fromChummer5a(dom);
                            prioritySystemStore.prioritySystem = new PrioritySystem(characterStore.character);
                        })
                        reader.readAsText(
                            (event.currentTarget as HTMLInputElement).files!.item(0)!,
                        );
                    }
                } />
            <a download="character_sheet.json" href="">
                <button
                    type="button"
                    onClick={
                        (event: MouseEvent) => {
                            const blob = new Blob(
                                [JSON.stringify(characterStore.character)],
                                {
                                    type: "application/json",
                                    endings: "transparent",
                                },
                            );
                            const url = URL.createObjectURL(blob);
                            (event.currentTarget.parentElement as HTMLAnchorElement).href = url;
                        }
                    }>
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
