import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as BodyText } from './Body.svg';
import { Character } from '../../models/Character';

@observer class Body extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-body">
                <BodyText />
                <div>{this.props.character.body}</div>
            </div >
        )
    }
}

export default Body;