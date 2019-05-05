import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as CharismaText } from './Charisma.svg';
import { Character } from '../../models/Character';

@observer class Charisma extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-charisma">
                <CharismaText />
                <div>{this.props.character.charisma}</div>
            </div >
        )
    }
}

export default Charisma;