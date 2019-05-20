import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import { ReactComponent as SVG } from './Misc.svg';

import CharacterContext from '../../contexts/Character';
import CharacterSheetContext from '../../contexts/CharacterSheet';
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { MagicOrResonanceUser } from '../../models/MagicOrResonance';

const types = [...Object.values(MagicOrResonanceUser)]
    .map(userType => (
        <option key={userType} value={userType}>
            {userType}
        </option>
    ));

const MagicUserComponent = observer(() => {
    const characterSheet = useContext(CharacterSheetContext);
    const character = useContext(CharacterContext);
    const prioritySystem = useContext(PrioritySystemContext);

    const svg = !characterSheet.rendered ? <SVG /> : undefined;

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