import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import CharacterSheet from './components/CharacterSheet';
import { Character } from './models/Character';
import PriorityComponent from './components/Priority';
import { Priority, Category } from './models/Priority';

@observer class CharacterCreator extends Component {
    @observable character = new Character();
    @observable priorities = new Map<Priority, Category>();

    render() {
        return (
            <div>
                <PriorityComponent character={this.character} priorities={this.priorities} />
                <CharacterSheet character={this.character} priorities={this.priorities} />
            </div>
        )
    }
}

export default CharacterCreator;