import { observer } from 'mobx-react-lite';
import React from 'react';

import './Gear.scss';
import { ReactComponent as Box } from './GearBox.svg';
import { ReactComponent as Line } from './GearLine.svg';
import { ReactComponent as Name } from './GearName.svg';
import { ReactComponent as Rating } from './GearRating.svg';
import { ReactComponent as Style } from './GearStyle.svg';
import { ReactComponent as Tab } from './GearTab.svg';
import { ReactComponent as Text } from './GearText.svg';

const Gear = observer(() => {
    return (
        <div className="gear">
            <Tab className="gear-tab" />
            <Style className="gear-style" />
            <Text className="gear-text" />
            <Box className="gear-box" />
            <Line className="gear-line-1" />
            <Line className="gear-line-2" />
            <Line className="gear-line-3" />
            <Line className="gear-line-4" />
            <Line className="gear-line-5" />
            <Line className="gear-line-6" />
            <Line className="gear-line-7" />
            <Line className="gear-line-8" />
            <Line className="gear-line-9" />
            <Line className="gear-line-10" />
            <Line className="gear-line-11" />
            <Line className="gear-line-12" />
            <Line className="gear-line-13" />
            <Line className="gear-line-14" />
            <Line className="gear-line-15" />
            <Line className="gear-line-16" />
            <Line className="gear-line-17" />
            <Line className="gear-line-18" />
            <Line className="gear-line-19" />
            <Line className="gear-line-20" />
            <Name className="gear-name" />
            <Rating className="gear-rating" />
        </div>
    );
});

export default Gear;
