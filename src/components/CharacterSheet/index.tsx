import React, { Component, createContext, Context, useState, Dispatch, SetStateAction } from 'react';
import { ReactComponent as Background } from './Background.svg';
import MetaText from '../MetaText';
import PersonalData from '../PersonalData';
import Attributes from '../Attributes';
import Skills from '../Skills';
import IDsLifestylesCurrency from '../IDsLifestylesCurrency';
import CoreCombatInfo from '../CoreCombatInfo';
import ConditionMonitor from '../ConditionMonitor';
import Qualities from '../Qualities';
import Contacts from '../Contacts';
import AdeptPowers from '../AdeptPowers';
import Armor from '../Armor';
import Augmentations from '../Augmentations';
import Cyberdeck from '../Cyberdeck';
import Gear from '../Gear';
import MeleeWeapons from '../MeleeWeapons';
import RangedWeapons from '../RangedWeapons';
import Spells from '../Spells';
import Vehicle from '../Vehicle';
import './CharacterSheet.scss';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { Character } from '../../models/Character';
import { Priority, Category } from '../../models/Priority';

const developmentState = observable({
    rendered: false,
});

@observer class CharacterSheet extends Component<{ character: Character, priorities: Map<Priority, Category> }> {

    render() {
        return (
            <div className="character-sheet">
                <div className={"character-sheet-page" + (developmentState.rendered ? " rendered" : "")}>
                    <Background className="background" />
                    <MetaText character={this.props.character} />
                    <PersonalData character={this.props.character} priorities={this.props.priorities} />
                    <Attributes character={this.props.character} />
                    <Skills />
                    <IDsLifestylesCurrency />
                    <CoreCombatInfo />
                    <ConditionMonitor />
                    <Qualities />
                    <Contacts />
                </div>
                <div className={"character-sheet-page" + (developmentState.rendered ? " rendered" : "")}>
                    <Background className="background" />
                    <MetaText character={this.props.character} />
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

window.onkeydown = action((event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === "F12") {
        developmentState.rendered = !developmentState.rendered;
        event.preventDefault();
        return false;
    }
})

export default CharacterSheet;