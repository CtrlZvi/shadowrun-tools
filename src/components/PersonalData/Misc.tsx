import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import { ReactComponent as SVG } from './Misc.svg';

import CharacterContext from '../../contexts/Character';
import CharacterSheetContext from '../../contexts/CharacterSheet';
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { MagicUser } from '../../models/Magic';
import { ResonanceUser } from '../../models/Resonance';

const MagicUserComponent = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);
    let prioritySystem = useContext(PrioritySystemContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;
    const types = [...new Set<MagicUser | ResonanceUser>(
        Object.values(MagicUser)
            .concat(Object.values(ResonanceUser))
    ).values()]
        .map(userType => (
            <option key={userType} value={userType}>
                {userType}
            </option>
        ));

    return (
        <div className="tradition">
            {svg}
            <select value={character.magicOrResonanceType} onChange={
                action((event: ChangeEvent<HTMLSelectElement>) => prioritySystem.updateMagicOrResonanceType(
                    event.currentTarget.value as (MagicUser | ResonanceUser)
                ))
            }>
                {types}
            </select>
        </div >
    )
});

export default MagicUserComponent;