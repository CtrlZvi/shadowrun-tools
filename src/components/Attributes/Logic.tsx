import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as LogicText } from './Logic.svg';
import { Character } from '../../models/Character';

@observer class Logic extends Component<{ character: Character }> {
    render() {
        return (
            <div className="attributes-logic">
                <LogicText />
                <div>{this.props.character.logic}</div>
            </div >
        )
    }
}

export default Logic;