import React, { Component } from 'react';
import { ReactComponent as Text } from './PersonalDataText.svg';
import { ReactComponent as Tab } from './PersonalDataTab.svg';
import { ReactComponent as Style } from './PersonalDataStyle.svg';
import { ReactComponent as Box } from './PersonalDataBox.svg';
import { ReactComponent as Line } from './PersonalDataLine.svg';
import { ReactComponent as NamePrimaryAlias } from './NamePrimaryAlias.svg';
import { ReactComponent as Ethnicity } from './Ethnicity.svg';
import { ReactComponent as Age } from './Age.svg';
import { ReactComponent as Sex } from './Sex.svg';
import { ReactComponent as Height } from './Height.svg';
import { ReactComponent as Weight } from './Weight.svg';
import { ReactComponent as StreetCred } from './StreetCred.svg';
import { ReactComponent as Notoriety } from './Notoriety.svg';
import { ReactComponent as PublicAwareness } from './PublicAwareness.svg';
import { ReactComponent as Karma } from './Karma.svg';
import { ReactComponent as TotalKarma } from './TotalKarma.svg';
import { ReactComponent as Misc } from './Misc.svg';
import './PersonalData.scss';
import { observer } from 'mobx-react';
import Metatype from './Metatype'
import { Character } from '../../models/Character';
import { Priority, Category } from '../../models/Priority';

@observer class PersonalData extends Component<{ character: Character, priorities: Map<Priority, Category> }> {
    render() {
        return (
            <div className="personal-data">
                <Tab className="personal-data-tab" />
                <Style className="personal-data-style" />
                <Text className="personal-data-text" />
                <Box className="personal-data-box" />
                <Line className="personal-data-line-1" />
                <Line className="personal-data-line-2" />
                <Line className="personal-data-line-3" />
                <Line className="personal-data-line-4" />
                <Line className="personal-data-line-5" />
                <NamePrimaryAlias className="name-primary-alias" />
                <Metatype character={this.props.character} priorities={this.props.priorities} />
                <Ethnicity className="ethnicity" />
                <Age className="age" />
                <Sex className="sex" />
                <Height className="height" />
                <Weight className="weight" />
                <StreetCred className="street-cred" />
                <Notoriety className="notoriety" />
                <PublicAwareness className="public-awareness" />
                <Karma className="karma" />
                <TotalKarma className="total-karma" />
                <Misc className="misc" />
            </div>
        );
    }
}

export default PersonalData;