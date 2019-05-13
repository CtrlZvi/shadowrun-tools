import { observer } from 'mobx-react-lite';
import React, { Component } from 'react';

import { ReactComponent as Age } from './Age.svg';
import { ReactComponent as Ethnicity } from './Ethnicity.svg';
import { ReactComponent as Height } from './Height.svg';
import { ReactComponent as Karma } from './Karma.svg';
import { ReactComponent as Notoriety } from './Notoriety.svg';
import './PersonalData.scss';
import { ReactComponent as Box } from './PersonalDataBox.svg';
import { ReactComponent as Line } from './PersonalDataLine.svg';
import { ReactComponent as Style } from './PersonalDataStyle.svg';
import { ReactComponent as Tab } from './PersonalDataTab.svg';
import { ReactComponent as Text } from './PersonalDataText.svg';
import { ReactComponent as PublicAwareness } from './PublicAwareness.svg';
import { ReactComponent as Sex } from './Sex.svg';
import { ReactComponent as StreetCred } from './StreetCred.svg';
import { ReactComponent as TotalKarma } from './TotalKarma.svg';
import { ReactComponent as Weight } from './Weight.svg';

import Metatype from './Metatype'
import Misc from './Misc';
import NamePrimaryAlias from './NamePrimaryAlias';

const PersonalData = observer(() => {
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
            <NamePrimaryAlias />
            <Metatype />
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
            <Misc />
        </div>
    );
});

export default PersonalData;