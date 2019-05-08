import { observer } from 'mobx-react-lite';
import React from 'react';

import './RangedWeapons.scss';
import { ReactComponent as Attributes } from './RangedWeaponsAttributes.svg';
import { ReactComponent as Box } from './RangedWeaponsBox.svg';
import { ReactComponent as Line } from './RangedWeaponsLine.svg';
import { ReactComponent as Name } from './RangedWeaponsName.svg';
import { ReactComponent as Style } from './RangedWeaponsStyle.svg';
import { ReactComponent as Tab } from './RangedWeaponsTab.svg';
import { ReactComponent as Text } from './RangedWeaponsText.svg';

const RangedWeapons = observer(() => {
    return (
        <div className="ranged-weapons">
            <Tab className="ranged-weapons-tab" />
            <Style className="ranged-weapons-style" />
            <Text className="ranged-weapons-text" />
            <Box className="ranged-weapons-box" />
            <Line className="ranged-weapons-line-1" />
            <Line className="ranged-weapons-line-2" />
            <Line className="ranged-weapons-line-3" />
            <Line className="ranged-weapons-line-4" />
            <Line className="ranged-weapons-line-5" />
            <Line className="ranged-weapons-line-6" />
            <Line className="ranged-weapons-line-7" />
            <Name className="ranged-weapons-name" />
            <Attributes className="ranged-weapons-attributes" />
        </div>
    );
});

export default RangedWeapons;