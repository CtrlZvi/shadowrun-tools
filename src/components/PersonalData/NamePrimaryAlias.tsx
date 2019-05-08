import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import { ReactComponent as SVG } from './NamePrimaryAlias.svg';

import CharacterContext from '../../contexts/Character';
import CharacterSheetContext from '../../contexts/CharacterSheet';

const NamePrimaryAlias = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;

    return (
        <div className="name-primary-alias">
            {svg}
            <input type="text" value={character.name} onChange={
                action((event: ChangeEvent<HTMLInputElement>) => character.name = event.currentTarget.value)
            } />
        </div>
    )
});

export default NamePrimaryAlias;