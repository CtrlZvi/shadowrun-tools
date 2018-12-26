import React, { Component } from 'react';
import './MeleeWeapons.scss';
import { ReactComponent as Text } from './MeleeWeaponsText.svg';
import { ReactComponent as Tab } from './MeleeWeaponsTab.svg';
import { ReactComponent as Style } from './MeleeWeaponsStyle.svg';
import { ReactComponent as Box } from './MeleeWeaponsBox.svg';
import { ReactComponent as Line } from './MeleeWeaponsLine.svg';
import { ReactComponent as Name } from './MeleeWeaponsName.svg';
import { ReactComponent as Attributes } from './MeleeWeaponsAttributes.svg';
import { ReactComponent as Accuracy } from './MeleeWeaponsAccuracy.svg';
import { ReactComponent as AP } from './MeleeWeaponsAP.svg';
import { observer } from 'mobx-react';

@observer class MeleeWeapons extends Component {
    render() {
        return (
            <div className="melee-weapons">
                <Tab className="melee-weapons-tab" />
                <Style className="melee-weapons-style" />
                <Text className="melee-weapons-text" />
                <Box className="melee-weapons-box" />
                <Line className="melee-weapons-line-1" />
                <Line className="melee-weapons-line-2" />
                <Line className="melee-weapons-line-3" />
                <Line className="melee-weapons-line-4" />
                <Line className="melee-weapons-line-5" />
                <Line className="melee-weapons-line-6" />
                <Line className="melee-weapons-line-7" />
                <Name className="melee-weapons-name" />
                <Attributes className="melee-weapons-attributes" />
                <Accuracy className="melee-weapons-accuracy" />
                <AP className="melee-weapons-ap" />
            </div>
        );
    }
}

export default MeleeWeapons;