import { observer } from 'mobx-react-lite';
import React from 'react';

import './AdeptPowers.scss';
import { ReactComponent as Box } from './AdeptPowersBox.svg';
import { ReactComponent as Line } from './AdeptPowersLine.svg';
import { ReactComponent as Name } from './AdeptPowersName.svg';
import { ReactComponent as Notes } from './AdeptPowersNotes.svg';
import { ReactComponent as Or } from './AdeptPowersOr.svg';
import { ReactComponent as OtherAbilities } from './AdeptPowersOtherAbilities.svg';
import { ReactComponent as Rating } from './AdeptPowersRating.svg';
import { ReactComponent as Style } from './AdeptPowersStyle.svg';
import { ReactComponent as Tab } from './AdeptPowersTab.svg';
import { ReactComponent as Text } from './AdeptPowersText.svg';

const AdeptPowers = observer(() => {
    return (
        <div className="adept-powers">
            <Tab className="adept-powers-tab" />
            <Style className="adept-powers-style" />
            <Text className="adept-powers-text" />
            <Or className="adept-powers-or" />
            <OtherAbilities className="adept-powers-other-abilities" />
            <Box className="adept-powers-box" />
            <Line className="adept-powers-line-1" />
            <Line className="adept-powers-line-2" />
            <Line className="adept-powers-line-3" />
            <Line className="adept-powers-line-4" />
            <Line className="adept-powers-line-5" />
            <Line className="adept-powers-line-6" />
            <Line className="adept-powers-line-7" />
            <Line className="adept-powers-line-8" />
            <Line className="adept-powers-line-9" />
            <Name className="adept-powers-name" />
            <Rating className="adept-powers-ratings" />
            <Notes className="adept-powers-notes" />
        </div>
    );
});

export default AdeptPowers;