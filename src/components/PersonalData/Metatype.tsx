import React, { Component, ChangeEvent } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { Metatypes, Metasapient } from '../../models/Metatype';
import { ReactComponent as MetatypeText } from './Metatype.svg';
import { Character } from '../../models/Character';
import { Priority, Category } from '../../models/Priority';

@observer class MetatypeComponent extends Component<{ character: Character, priorities: Map<Priority, Category> }> {
    @action handleChangeMetatype(event: ChangeEvent<HTMLSelectElement>) {
        let metatype = Metatypes.get(
            event.currentTarget.value as Metasapient
        )!;
        let metatypePriority = [...this.props.priorities.entries()].filter(
            ([priority, category]) => category == Category.Metatype
        ).map(([priority, category]) => priority)[0];

        this.props.character.metatype = metatype;
        if (!(Priority[metatypePriority] in metatype.priorities)) {
            let priorities = Object.keys(metatype.priorities);
            // FIXME (zeffron 2019-05-05) We can't just set the priority, as
            // there may already be something at that priority that needs to be
            // adjusted.
            this.props.priorities.set((Priority as any)[priorities.slice(-1)[0]], Category.Metatype);
        }
    }

    render() {
        let metatypePriority = [...this.props.priorities.entries()].filter(
            ([priority, category]) => category == Category.Metatype
        ).map(([priority, category]) => priority)[0];
        let metatypes = [...Metatypes.entries()].filter(
            ([metasapient, metatype]) => metatypePriority === undefined || Priority[metatypePriority] in metatype.priorities
        ).map(
            ([metasapient, metatype]) => (
                <option key={metasapient} value={metasapient}>
                    {metasapient}
                </option>
            )
        );
        return (
            <div className="metatype">
                <MetatypeText />
                <select onChange={this.handleChangeMetatype.bind(this)}>
                    {metatypes}
                </select>
            </div>
        )
    }
}

export default MetatypeComponent;