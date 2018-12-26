import React, { Component } from 'react';
import { ReactComponent as Background } from './Background.svg';
import { ReactComponent as MetaText } from './MetaText.svg';
import PersonalData from './personalData';
import Attributes from './attributes';
import Skills from './skills';
import IDsLifestylesCurrency from './idsLifestylesCurrency';
import CoreCombatInfo from './coreCombatInfo';
import ConditionMonitor from './conditionMonitor';
import Qualities from './qualities';
import Contacts from './contacts';
import AdeptPowers from './adeptPowers';
import Armor from './armor';
import Augmentations from './augmentations';
import Cyberdeck from './cyberdeck';
import Gear from './gear';
import MeleeWeapons from './meleeWeapons';
import RangedWeapons from './rangedWeapons';
import Spells from './spells';
import Vehicle from './vehicle';
import './CharacterSheet.scss';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const developmentState = observable({
    rendered: false,
});

@observer class CharacterSheet extends Component {
    render() {
        return (
        <div className="character-sheet">
            <div className={"character-sheet-page" + (developmentState.rendered ? " rendered" : "")}>
                <Background className="background" />
                <MetaText className="metatext" />
                <PersonalData />
                <Attributes />
                <Skills />
                <IDsLifestylesCurrency />
                <CoreCombatInfo />
                <ConditionMonitor />
                <Qualities />
                <Contacts />
            </div>
            <div className={"character-sheet-page" + (developmentState.rendered ? " rendered" : "")}>
                <Background className="background" />
                <MetaText className="metatext" />
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
        );
    }
}

window.onkeydown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === "F12") {
        developmentState.rendered = !developmentState.rendered;
        event.preventDefault();
        return false;
    }
}

export default CharacterSheet;