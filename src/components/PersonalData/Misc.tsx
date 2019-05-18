import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import { ReactComponent as SVG } from './Misc.svg';

import CharacterContext from '../../contexts/Character';
import CharacterSheetContext from '../../contexts/CharacterSheet';
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { MagicOrResonanceUser } from '../../models/MagicOrResonance';

const MagicUserComponent = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);
    let prioritySystem = useContext(PrioritySystemContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;
    const types = [...Object.values(MagicOrResonanceUser)]
        .map(userType => (
            <option key={userType} value={userType}>
                {userType}
            </option>
        ));

    return (
        <div className="tradition">
            {svg}
            <select value={character.magicOrResonanceUser} onChange={
                action((event: ChangeEvent<HTMLSelectElement>) => prioritySystem.updateMagicOrResonanceUser(
                    event.currentTarget.value as MagicOrResonanceUser
                ))
            }>
                {types}
            </select>
        </div >
    )
});

export default MagicUserComponent;