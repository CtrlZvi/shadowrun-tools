import React, { Component } from 'react';
import './Qualities.scss';
import { ReactComponent as Text } from './QualitiesText.svg';
import { ReactComponent as Tab } from './QualitiesTab.svg';
import { ReactComponent as Style } from './QualitiesStyle.svg';
import { ReactComponent as Box } from './QualitiesBox.svg';
import { ReactComponent as Line } from './QualitiesLine.svg';
import { ReactComponent as Quality } from './QualitiesQuality.svg';
import { ReactComponent as Notes } from './QualitiesNotes.svg';
import { ReactComponent as T } from './QualitiesT.svg';
import { ReactComponent as Ype } from './QualitiesYpe.svg';
import { ReactComponent as PositiveNegative } from './PositiveNegative.svg';
import { observer } from 'mobx-react';

@observer class Qualities extends Component {
    render() {
        return (
            <div className="qualities">
                <Tab className="qualities-tab" />
                <Style className="qualities-style" />
                <Text className="qualities-text" />
                <Box className="qualities-box" />
                <Line className="qualities-line-1" />
                <Line className="qualities-line-2" />
                <Line className="qualities-line-3" />
                <Line className="qualities-line-4" />
                <Line className="qualities-line-5" />
                <Line className="qualities-line-6" />
                <Line className="qualities-line-7" />
                <Line className="qualities-line-8" />
                <Line className="qualities-line-9" />
                <Line className="qualities-line-10" />
                <Line className="qualities-line-11" />
                <Quality className="qualities-quality" />
                <Notes className="qualities-notes" />
                <T className="qualities-t" />
                <Ype className="qualities-ype" />
                <PositiveNegative className="positive-negative" />
            </div>
        );
    }
}

export default Qualities;