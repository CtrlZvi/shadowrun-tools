import React, { Component } from 'react';
import { ReactComponent as PersonalDataText } from './PersonalDataText.svg';
import { ReactComponent as PersonalDataTab } from './PersonalDataTab.svg';
import { ReactComponent as PersonalDataStyle } from './PersonalDataStyle.svg';
import { ReactComponent as PersonalDataBox } from './PersonalDataBox.svg';
import { ReactComponent as PersonalDataLine } from './PersonalDataLine.svg';
import { ReactComponent as NamePrimaryAlias } from './NamePrimaryAlias.svg';
import { ReactComponent as Metatype } from './Metatype.svg';
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
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer class PersonalData extends Component {
    render() {
        return (
            <div className="personal-data">
                <PersonalDataTab className="personal-data-tab" />
                <PersonalDataStyle className="personal-data-style" />
                <PersonalDataText className="personal-data-text" />
                <PersonalDataBox className="personal-data-box" />
                <PersonalDataLine className="personal-data-line-1" />
                <PersonalDataLine className="personal-data-line-2" />
                <PersonalDataLine className="personal-data-line-3" />
                <PersonalDataLine className="personal-data-line-4" />
                <PersonalDataLine className="personal-data-line-5" />
                <NamePrimaryAlias className="name-primary-alias" />
                <Metatype className="metatype" />
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