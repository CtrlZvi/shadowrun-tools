import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as AgilitySVG } from './Agility.svg';
import './Attributes.scss';
import { ReactComponent as AstralInitiative } from './AstralInitiative.svg';
import { ReactComponent as Box } from './AttributesBox.svg';
import { ReactComponent as KeyEven } from './AttributesKeyEven.svg';
import { ReactComponent as KeyOdd } from './AttributesKeyOdd.svg';
import { ReactComponent as Limits } from './AttributesLimits.svg';
import { ReactComponent as Style } from './AttributesStyle.svg';
import { ReactComponent as Tab } from './AttributesTab.svg';
import { ReactComponent as Text } from './AttributesText.svg';
import { ReactComponent as ValueEven } from './AttributesValueEven.svg';
import { ReactComponent as ValueOdd } from './AttributesValueOdd.svg';
import { ReactComponent as BodySVG } from './Body.svg';
import { ReactComponent as CharismaSVG } from './Charisma.svg';
import { ReactComponent as Composure } from './Composure.svg';
import { ReactComponent as EdgeSVG } from './Edge.svg';
import { ReactComponent as EdgePoint } from './EdgePoint.svg';
import { ReactComponent as EdgePoints } from './EdgePoints.svg';
import { ReactComponent as Essence } from './Essence.svg';
import { ReactComponent as Initiative } from './Initiative.svg';
import { ReactComponent as IntuitionSVG } from './Intuition.svg';
import { ReactComponent as JudgeIntentions } from './JudgeIntentions.svg';
import { ReactComponent as LiftCarry } from './LiftCarry.svg';
import { ReactComponent as LogicSVG } from './Logic.svg';
import { ReactComponent as MagicOrResonanceSVG } from './MagicResonance.svg';
import { ReactComponent as MatrixInitiative } from './MatrixInitiative.svg';
import { ReactComponent as Memory } from './Memory.svg';
import { ReactComponent as MentalLimit } from './MentalLimit.svg';
import { ReactComponent as Movement } from './Movement.svg';
import { ReactComponent as PhysicalLimit } from './PhysicalLimit.svg';
import { ReactComponent as ReactionSVG } from './Reaction.svg';
import { ReactComponent as SocialLimit } from './SocialLimit.svg';
import { ReactComponent as StrengthSVG } from './Strength.svg';
import { ReactComponent as WillpowerSVG } from './Willpower.svg';

import AttributeComponent from './Attribute';
import { Attribute } from '../../models/Attribute';

const Attributes = observer(() => {
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
            <AttributeComponent attribute={Attribute.Body} svg={<BodySVG />} />
            <Essence className="attributes-essence" />
            <AttributeComponent attribute={Attribute.Agility} svg={<AgilitySVG />} />
            <AttributeComponent attribute={Attribute.MagicOrResonance} svg={<MagicOrResonanceSVG />} />
            <AttributeComponent attribute={Attribute.Reaction} svg={<ReactionSVG />} />
            <Initiative className="attributes-initiative" />
            <AttributeComponent attribute={Attribute.Strength} svg={<StrengthSVG />} />
            <MatrixInitiative className="attributes-matrix-initiative" />
            <AttributeComponent attribute={Attribute.Willpower} svg={<WillpowerSVG />} />
            <AstralInitiative className="attributes-astral-initiative" />
            <AttributeComponent attribute={Attribute.Logic} svg={<LogicSVG />} />
            <Composure className="attributes-composure" />
            <AttributeComponent attribute={Attribute.Intuition} svg={<IntuitionSVG />} />
            <JudgeIntentions className="attributes-judge-intentions" />
            <AttributeComponent attribute={Attribute.Charisma} svg={<CharismaSVG />} />
            <Memory className="attributes-memory" />
            <AttributeComponent attribute={Attribute.Edge} svg={<EdgeSVG />} />
            <LiftCarry className="attributes-lift-carry" />
            <EdgePoints className="attributes-edge-points" />
            <Movement className="attributes-movement" />
            <PhysicalLimit className="attributes-physical-limit" />
            <MentalLimit className="attributes-mental-limit" />
            <SocialLimit className="attributes-social-limit" />
        </div>
    );
});

export default Attributes;