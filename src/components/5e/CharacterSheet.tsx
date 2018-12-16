import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import './CharacterSheet.scss';

const developmentState = observable({
    rendered: false
});

function CharacterSheetHeader() {
    return (
        <div className="header">
            <div className="shadowrun-logo">
                <div className="logo" />
                <div className="shadow" />
                <div className="trademark" />
            </div>
            <div className="name-box">
                <div className="character">CHARACTER</div>
                <div className="character-line">________________________</div>
                <div className="player">PLAYER</div>
                <div className="player-line">___________________________</div>
                <div className="notes">NOTES</div>
                <div className="notes-line">____________________________</div>
            </div>
        </div>
    );
}

function CharacterSheetFooter() {
    return (
        <div className="footer">
            © 2013 The Topps Company, Inc. Shadowrun is a registered trademark of The Topps Company, Inc., in the United States and/or other countries. Permission given to copy for personal use.
        </div>
    );
}

@observer class CharacterSheet extends React.Component {
    constructor(props: {}) {
        window.onkeyup = action(
            (event: KeyboardEvent) => {
                if (event.ctrlKey && event.shiftKey && event.key === 'F12') {
                    developmentState.rendered = !developmentState.rendered;
                    event.preventDefault();
                    return false;
                }
                return true;
            }
        );
        super(props);
    }

    public render() {
        return (
            <div className={"character-sheet " + (developmentState.rendered ? "rendered" : "wip")}>
                <div className="character-sheet-page">
                    <div className="background" />
                    <CharacterSheetHeader />
                    <CharacterSheetFooter />
                </div>
                <div className="character-sheet-page">
                    <div className="background" />
                    <CharacterSheetHeader />
                    <CharacterSheetFooter />
                </div>
            </div>
        );
    }
}

export default CharacterSheet;
