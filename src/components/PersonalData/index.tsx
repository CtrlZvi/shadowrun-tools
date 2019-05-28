import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent } from 'react';

import './style.scss';
import CharacterSheetSection from '../CharacterSheetSection';
import CharacterContext from "../../contexts/Character";
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { MagicOrResonanceUser } from "../../models/MagicOrResonance";
import { Metasapient, Metatypes } from "../../models/Metatype";

const metatypes = Object.values(Metasapient)
    .map(metasapient => (
        <option key={metasapient} value={metasapient}>
            {metasapient}
        </option>
    ));

const magicOrResonanceUsers = [...Object.values(MagicOrResonanceUser)]
    .map(userType => (
        <option key={userType} value={userType}>
            {userType}
        </option>
    ));

const PersonalDataComponent = observer(
    (_: {}, ref) => {
        const character = useContext(CharacterContext);
        const prioritySystem = useContext(PrioritySystemContext);

        return (
            <CharacterSheetSection className="personal-data" name={"PERSONAL DATA"} ref={ref}>
                <div>
                    <label className="name-primary-alias">
                        NAME/PRIMARY ALIAS
                        <input
                            type="text"
                            value={character.name}
                            onChange={action(
                                (event: ChangeEvent<HTMLInputElement>) => character.name = event.currentTarget.value
                            )} />
                    </label>
                </div>
                <div>
                    <label className="metatype">
                        Metatype
                        <select
                            value={character.metatype.metasapient}
                            onChange={action(
                                (event: ChangeEvent<HTMLSelectElement>) => prioritySystem
                                    .updateMetatype(
                                        Metatypes.get(event.currentTarget.value as Metasapient)!
                                    )
                            )}>
                            {metatypes}
                        </select>
                    </label>
                    <label className="ethnicity">
                        Ethnicity
                    </label>
                </div>
                <div>
                    <label className="age">
                        Age
                    </label>
                    <label className="sex">
                        Sex
                    </label>
                    <label className="height">
                        Height
                    </label>
                    <label className="weight">
                        Weight
                    </label>
                </div>
                <div>
                    <label className="street-cred">
                        Street Cred
                    </label>
                    <label className="notoriety">
                        Notoriety
                    </label>
                    <label className="public-awareness">
                        Public Awareness
                    </label>
                </div>
                <div>
                    <label className="karma">
                        Karma
                    </label>
                    <label className="total-karma">
                        Total Karma
                    </label>
                    <label className="misc">
                        Misc
                        <select
                            value={character.magicOrResonanceUser}
                            onChange={action(
                                (event: ChangeEvent<HTMLSelectElement>) => prioritySystem
                                    .updateMagicOrResonanceUser(
                                        event.currentTarget.value as MagicOrResonanceUser
                                    )
                            )}>
                            {magicOrResonanceUsers}
                        </select>
                    </label>
                </div>
            </CharacterSheetSection >
        )
    },
    { forwardRef: true },
)

PersonalDataComponent.displayName = "PERSONAL DATA";

export default PersonalDataComponent;
