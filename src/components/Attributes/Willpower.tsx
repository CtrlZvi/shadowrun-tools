import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as WillpowerText } from './Willpower.svg';
import { Character } from '../../models/Character';

@observer class Willpower extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-willpower">
                <WillpowerText />
                <div>{this.props.character.willpower}</div>
            </div >
        )
    }
}

export default Willpower;