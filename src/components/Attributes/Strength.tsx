import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as StrengthText } from './Strength.svg';
import { Character } from '../../models/Character';

@observer class Strength extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-strength">
                <StrengthText />
                <div>{this.props.character.strength}</div>
            </div >
        )
    }
}

export default Strength;