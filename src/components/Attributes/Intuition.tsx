import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as IntuitionText } from './Intuition.svg';
import { Character } from '../../models/Character';

@observer class Intuition extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-intuition">
                <IntuitionText />
                <div>{this.props.character.intuition}</div>
            </div >
        )
    }
}

export default Intuition;