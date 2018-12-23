import React, { Component } from 'react';
import './Attributes.scss';
import { ReactComponent as Text } from './AttributesText.svg';
import { ReactComponent as Tab } from './AttributesTab.svg';
import { ReactComponent as Style } from './AttributesStyle.svg';
import { ReactComponent as Box } from './AttributesBox.svg';
import { ReactComponent as KeyOdd } from './AttributesKeyOdd.svg';
import { ReactComponent as KeyEven } from './AttributesKeyEven.svg';
import { ReactComponent as ValueOdd } from './AttributesValueOdd.svg';
import { ReactComponent as ValueEven } from './AttributesValueEven.svg';
import { ReactComponent as EdgePoint } from './EdgePoint.svg';
import { ReactComponent as Limits } from './AttributesLimits.svg';
import { ReactComponent as Body } from './Body.svg';
import { ReactComponent as Essence } from './Essence.svg';
import { ReactComponent as Agility } from './Agility.svg';
import { ReactComponent as MagicResonance } from './MagicResonance.svg';
import { ReactComponent as Reaction } from './Reaction.svg';
import { ReactComponent as Initiative } from './Initiative.svg';
import { ReactComponent as Strength } from './Strength.svg';
import { ReactComponent as MatrixInitiative } from './MatrixInitiative.svg';
import { ReactComponent as Willpower } from './Willpower.svg';
import { ReactComponent as AstralInitiative } from './AstralInitiative.svg';
import { ReactComponent as Logic } from './Logic.svg';
import { ReactComponent as Composure } from './Composure.svg';
import { ReactComponent as Intuition } from './Intuition.svg';
import { ReactComponent as JudgeIntentions } from './JudgeIntentions.svg';
import { ReactComponent as Charisma } from './Charisma.svg';
import { ReactComponent as Memory } from './Memory.svg';
import { ReactComponent as Edge } from './Edge.svg';
import { ReactComponent as LiftCarry } from './LiftCarry.svg';
import { ReactComponent as EdgePoints } from './EdgePoints.svg';
import { ReactComponent as Movement } from './Movement.svg';
import { ReactComponent as PhysicalLimit } from './PhysicalLimit.svg';
import { ReactComponent as MentalLimit } from './MentalLimit.svg';
import { ReactComponent as SocialLimit } from './SocialLimit.svg';
import { observer } from 'mobx-react';

@observer class Attributes extends Component {
    render() {
        return (
            <div className="attributes">
                <Tab className="attributes-tab" />
                <Style className="attributes-style" />
                <Text className="attributes-text" />
                <Box className="attributes-box" />
                <KeyOdd className="attributes-key-1" />
                <ValueOdd className="attributes-value-1" />
                <KeyEven className="attributes-key-2" />
                <ValueEven className="attributes-value-2" />
                <KeyOdd className="attributes-key-3" />
                <ValueOdd className="attributes-value-3" />
                <KeyEven className="attributes-key-4" />
                <ValueEven className="attributes-value-4" />
                <KeyOdd className="attributes-key-5" />
                <ValueOdd className="attributes-value-5" />
                <KeyEven className="attributes-key-6" />
                <ValueEven className="attributes-value-6" />
                <KeyOdd className="attributes-key-7" />
                <ValueOdd className="attributes-value-7" />
                <KeyEven className="attributes-key-8" />
                <ValueEven className="attributes-value-8" />
                <KeyOdd className="attributes-key-9" />
                <ValueOdd className="attributes-value-9" />
                <KeyEven className="attributes-key-10" />
                <ValueEven className="attributes-value-10" />
                <KeyOdd className="attributes-key-11" />
                <ValueOdd className="attributes-value-11" />
                <KeyEven className="attributes-key-12" />
                <ValueEven className="attributes-value-12" />
                <KeyOdd className="attributes-key-13" />
                <ValueOdd className="attributes-value-13" />
                <KeyEven className="attributes-key-14" />
                <ValueEven className="attributes-value-14" />
                <KeyOdd className="attributes-key-15" />
                <ValueOdd className="attributes-value-15" />
                <KeyEven className="attributes-key-16" />
                <ValueEven className="attributes-value-16" />
                <KeyOdd className="attributes-key-17" />
                <ValueOdd className="attributes-value-17" />
                <KeyEven className="attributes-key-18" />
                <ValueEven className="attributes-value-18" />
                <KeyOdd className="attributes-key-19" />
                <KeyEven className="attributes-key-20" />
                <ValueEven className="attributes-value-20" />
                <Limits className="attributes-limits" />
                <EdgePoint className="attributes-edge-point-1" />
                <EdgePoint className="attributes-edge-point-2" />
                <EdgePoint className="attributes-edge-point-3" />
                <EdgePoint className="attributes-edge-point-4" />
                <EdgePoint className="attributes-edge-point-5" />
                <EdgePoint className="attributes-edge-point-6" />
                <EdgePoint className="attributes-edge-point-7" />
                <EdgePoint className="attributes-edge-point-8" />
                <Body className="attributes-body" />
                <Essence className="attributes-essence" />
                <Agility className="attributes-agility" />
                <MagicResonance className="attributes-magic-resonance" />
                <Reaction className="attributes-reaction" />
                <Initiative className="attributes-initiative" />
                <Strength className="attributes-strength" />
                <MatrixInitiative className="attributes-matrix-initiative" />
                <Willpower className="attributes-willpower" />
                <AstralInitiative className="attributes-astral-initiative" />
                <Logic className="attributes-logic" />
                <Composure className="attributes-composure" />
                <Intuition className="attributes-intuition" />
                <JudgeIntentions className="attributes-judge-intentions" />
                <Charisma className="attributes-charisma" />
                <Memory className="attributes-memory" />
                <Edge className="attributes-edge" />
                <LiftCarry className="attributes-lift-carry" />
                <EdgePoints className="attributes-edge-points" />
                <Movement className="attributes-movement" />
                <PhysicalLimit className="attributes-physical-limit" />
                <MentalLimit className="attributes-mental-limit" />
                <SocialLimit className="attributes-social-limit" />
            </div>
        );
    }
}

export default Attributes;