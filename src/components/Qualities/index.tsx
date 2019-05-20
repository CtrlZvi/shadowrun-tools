import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as PositiveNegative } from './PositiveNegative.svg';
import './Qualities.scss';
import { ReactComponent as Box } from './QualitiesBox.svg';
import { ReactComponent as Line } from './QualitiesLine.svg';
import { ReactComponent as Style } from './QualitiesStyle.svg';
import { ReactComponent as Notes } from './QualitiesNotes.svg';
import { ReactComponent as Quality } from './QualitiesQuality.svg';
import { ReactComponent as T } from './QualitiesT.svg';
import { ReactComponent as Tab } from './QualitiesTab.svg';
import { ReactComponent as Text } from './QualitiesText.svg';
import { ReactComponent as Ype } from './QualitiesYpe.svg';
import QualityComponent from './Quality';
import CharacterContext from '../../contexts/Character';
import { Qualities } from '../../models/Quality';

const QualitiesComponent = observer(() => {
    const character = useContext(CharacterContext);
    const qualities = character.qualities.map((quality, index) => <QualityComponent key={quality.name} quality={quality} index={index} />)

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
            <table className="selected-qualities">
                <tbody>
                    {qualities}
                    <QualityComponent key={""} quality={Qualities.get("")!} index={character.qualities.length} />
                </tbody>
            </table>
        </div>
    );
});

export default QualitiesComponent;