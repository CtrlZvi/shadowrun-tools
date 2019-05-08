import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as SVG } from './Edge.svg';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterContext from '../../contexts/Character';

const Edge = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;

    return (
        <div className="attributes-edge">
            {svg}
            <div>{character.edge}</div>
        </div>
    )
});

export default Edge;