import React, { Component } from 'react';
import { ReactComponent as Background } from './Background.svg';
import { ReactComponent as MetaText } from './MetaText.svg';
import PersonalData from './personalData';
import Attributes from './attributes';
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