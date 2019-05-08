import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as SVG } from './Charisma.svg';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterContext from '../../contexts/Character';

const Charisma = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;

    return (
        <div className="attributes-charisma">
            {svg}
            <div>{character.charisma}</div>
        </div>
    )
});

export default Charisma;