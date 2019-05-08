import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent, } from 'react';

import { ReactComponent as Image } from './Metatext.svg';
import "./Metatext.scss";

import CharacterContext from '../../contexts/Character';
import CharacterSheetContext from '../../contexts/CharacterSheet';

const Metatext = observer(() => {
    const character = useContext(CharacterContext);
    const characterSheet = useContext(CharacterSheetContext);

    let image = !characterSheet.rendered ? <Image /> : undefined;

    return (
        <div className="metatext">
            {image}
            <input className="character" type="text" value={character.name} onChange={
                action((event: ChangeEvent<HTMLInputElement>) => character.name = event.currentTarget.value)
            } />
            <input className="player" type="text" value={character.player} onChange={
                action((event: ChangeEvent<HTMLInputElement>) => character.player = event.currentTarget.value)
            } />
            <input className="notes" type="text" value={character.notes} onChange={
                action((event: ChangeEvent<HTMLInputElement>) => character.notes = event.currentTarget.value)
            } />
        </div>
    )
});

export default Metatext;
