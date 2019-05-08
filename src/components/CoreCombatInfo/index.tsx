import { observer } from 'mobx-react-lite';
import React from 'react';

import './CoreCombatInfo.scss';
import { ReactComponent as Box } from './CoreCombatInfoBox.svg';
import { ReactComponent as Line } from './CoreCombatInfoLine.svg';
import { ReactComponent as Style } from './CoreCombatInfoStyle.svg';
import { ReactComponent as Tab } from './CoreCombatInfoTab.svg';
import { ReactComponent as Text } from './CoreCombatInfoText.svg';
import { ReactComponent as PrimaryArmor } from './PrimaryArmor.svg';
import { ReactComponent as PrimaryArmorRating } from './PrimaryArmorRating.svg';
import { ReactComponent as PrimaryMeleeWeapon } from './PrimaryMeleeWeapon.svg';
import { ReactComponent as PrimaryRangedWeapon } from './PrimaryRangedWeapon.svg';
import { ReactComponent as WeaponAttributes } from './WeaponAttributes.svg';

const CoreCombatInfo = observer(() => {
    return (
        <div className="core-combat-info">
            <Tab className="core-combat-info-tab" />
            <Style className="core-combat-info-style" />
            <Text className="core-combat-info-text" />
            <Box className="core-combat-info-box" />
            <Line className="core-combat-info-line-1" />
            <Line className="core-combat-info-line-2" />
            <Line className="core-combat-info-line-3" />
            <PrimaryArmor className="primary-armor" />
            <PrimaryArmorRating className="primary-armor-rating" />
            <PrimaryRangedWeapon className="primary-ranged-weapon" />
            <PrimaryMeleeWeapon className="primary-melee-weapon" />
            <WeaponAttributes className="weapon-attributes" />
        </div>
    );
});

export default CoreCombatInfo;
