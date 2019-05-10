import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import { ReactComponent as SVG } from './Metatype.svg';

import CharacterContext from '../../contexts/Character';
import CharacterSheetContext from '../../contexts/CharacterSheet';
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Metatypes, Metasapient } from '../../models/Metatype';

const Metatype = observer(() => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);
    let prioritySystem = useContext(PrioritySystemContext);

    let svg = !characterSheet.rendered ? <SVG /> : undefined;
    let metatypes = Object.entries(Metasapient).map(
        ([metasapient, name]) => (
            <option key={name} value={metasapient}>
                {name}
            </option>
        )
    )

    return (
        <div className="metatype">
            {svg}
            <select value={character.metatype.metasapient} onChange={
                action((event: ChangeEvent<HTMLSelectElement>) => prioritySystem.updateMetatype(
                    Metatypes.get(event.currentTarget.value as Metasapient)!
                ))
            }>
                {metatypes}
            </select>
        </div >
    )
});

export default Metatype;