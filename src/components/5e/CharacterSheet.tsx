import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import './CharacterSheet.scss';

const developmentState = observable({
    rendered: false
});

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
                    Test test
                </div>
            </div>
        );
    }
}

export default CharacterSheet;
