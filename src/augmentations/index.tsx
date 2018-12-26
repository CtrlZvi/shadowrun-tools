import React, { Component } from 'react';
import './Augmentations.scss';
import { ReactComponent as Text } from './AugmentationsText.svg';
import { ReactComponent as Tab } from './AugmentationsTab.svg';
import { ReactComponent as Style } from './AugmentationsStyle.svg';
import { ReactComponent as Box } from './AugmentationsBox.svg';
import { ReactComponent as Line } from './AugmentationsLine.svg';
import { ReactComponent as Name } from './AugmentationsName.svg';
import { ReactComponent as Rating } from './AugmentationsRating.svg';
import { ReactComponent as Notes } from './AugmentationsNotes.svg';
import { ReactComponent as Essence } from './AugmentationsEssence.svg';
import { observer } from 'mobx-react';

@observer class Augmentations extends Component {
    render() {
        return (
            <div className="augmentations">
                <Tab className="augmentations-tab" />
                <Style className="augmentations-style" />
                <Text className="augmentations-text" />
                <Box className="augmentations-box" />
                <Line className="augmentations-line-1" />
                <Line className="augmentations-line-2" />
                <Line className="augmentations-line-3" />
                <Line className="augmentations-line-4" />
                <Line className="augmentations-line-5" />
                <Line className="augmentations-line-6" />
                <Line className="augmentations-line-7" />
                <Line className="augmentations-line-8" />
                <Name className="augmentations-name" />
                <Rating className="augmentations-rating" />
                <Notes className="augmentations-notes" />
                <Essence className="augmentations-essence" />
            </div>
        );
    }
}

export default Augmentations;