import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as SVG } from './Strength.svg';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterContext from '../../contexts/Character';

const Strength = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;

    return (
        <div className="attributes-strength">
            {svg}
            <div>{character.strength}</div>
        </div>
    )
});

export default Strength;