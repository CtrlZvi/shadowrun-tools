import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as SVG } from './Intuition.svg';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterContext from '../../contexts/Character';

const Intuition = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;

    return (
        <div className="attributes-intuition">
            {svg}
            <div>{character.intuition}</div>
        </div>
    )
});

export default Intuition;