import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as AgilityText } from './Agility.svg';
import { Character } from '../../models/Character';

@observer class Agility extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-agility">
                <AgilityText />
                <div>{this.props.character.agility}</div>
            </div >
        )
    }
}

export default Agility;