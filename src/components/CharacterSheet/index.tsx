import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import { ReactComponent as SVG } from './Background.svg';
import './CharacterSheet.scss';

import AdeptPowers from '../AdeptPowers';
import Armor from '../Armor';
import Attributes from '../Attributes';
import Augmentations from '../Augmentations';
import ConditionMonitor from '../ConditionMonitor';
import Contacts from '../Contacts';
import CoreCombatInfo from '../CoreCombatInfo';
import Cyberdeck from '../Cyberdeck';
import Gear from '../Gear';
import IDsLifestylesCurrency from '../IDsLifestylesCurrency';
import Metatext from '../Metatext';
import MeleeWeapons from '../MeleeWeapons';
import PersonalData from '../PersonalData';
import Qualities from '../Qualities';
import RangedWeapons from '../RangedWeapons';
import Skills from '../Skills';
import Spells from '../Spells';
import Vehicle from '../Vehicle';
import CharacterSheetContext from '../../contexts/CharacterSheet';

let toggleRendered = () => { }

const CharacterSheet = observer(() => {
    const [developmentState, setDevelopmentState] = useState({
        rendered: false,
    });
    // HACK (zeffron 2019-05-05) This is not ideal because it causes the
    // function to be updated every time the state changes, but it works.
    toggleRendered = () => {
        setDevelopmentState({
            rendered: !developmentState.rendered,
        })
    };

    let background = !developmentState.rendered ?
        <SVG className="background" /> :
        <div className="background-rendered"></div>

    return (
        <CharacterSheetContext.Provider value={developmentState}>
            <div className="character-sheet">
                <div className={"character-sheet-page"}>
                    {background}
                    <Metatext />
                    <PersonalData />
                    <Attributes />
                    <Skills />
                    <IDsLifestylesCurrency />
                    <CoreCombatInfo />
                    <ConditionMonitor />
                    <Qualities />
                    <Contacts />
                </div>
                <div className={"character-sheet-page"}>
                    {background}
                    <Metatext />
                    <RangedWeapons />
                    <Armor />
                    <Augmentations />
                    <Gear />
                    <MeleeWeapons />
                    <Cyberdeck />
                    <Vehicle />
                    <Spells />
                    <AdeptPowers />
                </div>
            </div>
        </CharacterSheetContext.Provider>
    )
});

window.onkeydown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === "F12") {
        toggleRendered();
        event.preventDefault();
        return false;
    }
}

export default CharacterSheet;
