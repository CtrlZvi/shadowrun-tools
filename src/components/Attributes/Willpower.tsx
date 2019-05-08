import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as SVG } from './Willpower.svg';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterContext from '../../contexts/Character';

const Willpower = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;

    return (
        <div className="attributes-willpower">
            {svg}
            <div>{character.willpower}</div>
        </div>
    )
});

export default Willpower;