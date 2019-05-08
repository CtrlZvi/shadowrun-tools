import { observer } from 'mobx-react-lite';
import React from 'react';

import './Armor.scss';
import { ReactComponent as Line } from './ArmorLine.svg';
import { ReactComponent as Box } from './ArmorBox.svg';
import { ReactComponent as Name } from './ArmorName.svg';
import { ReactComponent as Notes } from './ArmorNotes.svg';
import { ReactComponent as Rating } from './ArmorRating.svg';
import { ReactComponent as Style } from './ArmorStyle.svg';
import { ReactComponent as Tab } from './ArmorTab.svg';
import { ReactComponent as Text } from './ArmorText.svg';

const Armor = observer(() => {
    return (
        <div className="armor">
            <Tab className="armor-tab" />
            <Style className="armor-style" />
            <Text className="armor-text" />
            <Box className="armor-box" />
            <Line className="armor-line-1" />
            <Line className="armor-line-2" />
            <Line className="armor-line-3" />
            <Line className="armor-line-4" />
            <Line className="armor-line-5" />
            <Line className="armor-line-6" />
            <Line className="armor-line-7" />
            <Name className="armor-name" />
            <Rating className="armor-rating" />
            <Notes className="armor-notes" />
        </div>
    );
});

export default Armor;