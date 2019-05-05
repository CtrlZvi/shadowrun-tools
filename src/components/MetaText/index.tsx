import React, { Component, useContext, FormEvent, ChangeEvent, Context, Dispatch, SetStateAction } from 'react';
import { ReactComponent as Image } from './MetaText.svg';
import "./MetaText.scss";
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { Character } from '../../models/Character';

@observer class MetaText extends Component<{ character: Character }> {
    @action handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        this.props.character.name = event.currentTarget.value;
    }

    @action handleChangePlayer(event: ChangeEvent<HTMLInputElement>) {
        this.props.character.player = event.currentTarget.value;
    }

    @action handleChangeNotes(event: ChangeEvent<HTMLInputElement>) {
        this.props.character.notes = event.currentTarget.value;
    }

    render() {
        return (
            <div className="metatext">
                <Image className="metatext-image" />
                <input className="character" type="text" value={this.props.character.name} onChange={this.handleChangeName.bind(this)} />
                <input className="player" type="text" value={this.props.character.player} onChange={this.handleChangePlayer.bind(this)} />
                <input className="notes" type="text" value={this.props.character.notes} onChange={this.handleChangeNotes.bind(this)} />
            </div>
        );
    }
}

export default MetaText;
