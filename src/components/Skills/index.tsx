import React, { Component } from 'react';
import './Skills.scss';
import { ReactComponent as Text } from './SkillsText.svg';
import { ReactComponent as Tab } from './SkillsTab.svg';
import { ReactComponent as Style } from './SkillsStyle.svg';
import { ReactComponent as Box } from './SkillsBox.svg';
import { ReactComponent as Line } from './SkillsLine.svg';
import { ReactComponent as SkillLeft } from './SkillLeft.svg';
import { ReactComponent as RatingLeft } from './RatingLeft.svg';
import { ReactComponent as TypeLeftSkillRight } from './TypeLeftSkillRight.svg';
import { ReactComponent as RatingRight } from './RatingRight.svg';
import { ReactComponent as TypeRight } from './TypeRight.svg';
import { ReactComponent as ActiveKnowledge } from './ActiveKnowledge.svg';
import { observer } from 'mobx-react';

@observer class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <Tab className="skills-tab" />
                <Style className="skills-style" />
                <Text className="skills-text" />
                <Box className="skills-box" />
                <Line className="skills-line-1" />
                <Line className="skills-line-2" />
                <Line className="skills-line-3" />
                <Line className="skills-line-4" />
                <Line className="skills-line-5" />
                <Line className="skills-line-6" />
                <Line className="skills-line-7" />
                <Line className="skills-line-8" />
                <Line className="skills-line-9" />
                <Line className="skills-line-10" />
                <Line className="skills-line-11" />
                <Line className="skills-line-12" />
                <Line className="skills-line-13" />
                <Line className="skills-line-14" />
                <Line className="skills-line-15" />
                <Line className="skills-line-16" />
                <Line className="skills-line-17" />
                <Line className="skills-line-18" />
                <Line className="skills-line-19" />
                <Line className="skills-line-20" />
                <Line className="skills-line-21" />
                <Line className="skills-line-22" />
                <Line className="skills-line-23" />
                <Line className="skills-line-24" />
                <Line className="skills-line-25" />
                <Line className="skills-line-26" />
                <Line className="skills-line-27" />
                <Line className="skills-line-28" />
                <Line className="skills-line-29" />
                <Line className="skills-line-30" />
                <Line className="skills-line-31" />
                <Line className="skills-line-32" />
                <Line className="skills-line-33" />
                <Line className="skills-line-34" />
                <Line className="skills-line-35" />
                <Line className="skills-line-36" />
                <Line className="skills-line-37" />
                <Line className="skills-line-38" />
                <SkillLeft className="skills-skill-left" />
                <RatingLeft className="skills-rating-left" />
                <TypeLeftSkillRight className="skills-type-left-skill-right" />
                <RatingRight className="skills-rating-right" />
                <TypeRight className="skills-type-right" />
                <ActiveKnowledge className="skills-active-knowledge" />
            </div>
        );
    }
}

export default Skills;