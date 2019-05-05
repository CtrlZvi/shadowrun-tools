import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as ReactionText } from './Reaction.svg';
import { Character } from '../../models/Character';

@observer class Reaction extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-reaction">
                <ReactionText />
                <div>{this.props.character.reaction}</div>
            </div >
        )
    }
}

export default Reaction;