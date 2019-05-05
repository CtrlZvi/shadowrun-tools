import React, { Component } from 'react';
import './ConditionMonitor.scss';
import { ReactComponent as Text } from './ConditionMonitorText.svg';
import { ReactComponent as Tab } from './ConditionMonitorTab.svg';
import { ReactComponent as Style } from './ConditionMonitorStyle.svg';
import { ReactComponent as Box } from './ConditionMonitorBox.svg';
import { ReactComponent as DamageBoxOuterInsideHorizontal } from './DamageBoxOuterInsideHorizontal.svg';
import { ReactComponent as DamageBoxInnerInsideHorizontal } from './DamageBoxInnerInsideHorizontal.svg';
import { ReactComponent as DamageBoxOuterOutsideHorizontal } from './DamageBoxOuterOutsideHorizontal.svg';
import { ReactComponent as DamageBoxInnerOutsideHorizontal } from './DamageBoxInnerOutsideHorizontal.svg';
import { ReactComponent as DamageBoxOuterInsideVertical } from './DamageBoxOuterInsideVertical.svg';
import { ReactComponent as DamageBoxInnerInsideVertical } from './DamageBoxInnerInsideVertical.svg';
import { ReactComponent as DamageBoxOuterOutsideVertical } from './DamageBoxOuterOutsideVertical.svg';
import { ReactComponent as DamageBoxInnerOutsideVertical } from './DamageBoxInnerOutsideVertical.svg';
import { ReactComponent as PhysicalDamageTrack } from './PhysicalDamageTrack.svg';
import { ReactComponent as PhysicalDamageTrackerIndicator } from './PhysicalDamageTrackerIndicator.svg';
import { ReactComponent as PhysicalDamageTrackerIndicatorDetails } from './PhysicalDamageTrackerIndicatorDetails.svg';
import { ReactComponent as StunDamageTrack } from './StunDamageTrack.svg';
import { ReactComponent as StunDamageTrackerIndicator } from './StunDamageTrackerIndicator.svg';
import { ReactComponent as StunDamageTrackerIndicatorDetails } from './StunDamageTrackerIndicatorDetails.svg';
import { ReactComponent as ConditionCounts } from './ConditionCounts.svg';
import { ReactComponent as Overflow } from './Overflow.svg';
import { ReactComponent as OverflowLine } from './OverflowLine.svg';
import { ReactComponent as OverflowInstructions1 } from './OverflowInstructions1.svg';
import { ReactComponent as OverflowInstructions2 } from './OverflowInstructions2.svg';
import { ReactComponent as OverflowInstructions3 } from './OverflowInstructions3.svg';
import { ReactComponent as OverflowInstructions4 } from './OverflowInstructions4.svg';
import { ReactComponent as OverflowInstructions5 } from './OverflowInstructions5.svg';
import { ReactComponent as OverflowInstructions6 } from './OverflowInstructions6.svg';
import { ReactComponent as OverflowInstructions7 } from './OverflowInstructions7.svg';
import { ReactComponent as OverflowInstructions8 } from './OverflowInstructions8.svg';
import { observer } from 'mobx-react';

@observer class ConditionMonitor extends Component {
    render() {
        return (
            <div className="condition-monitor-info">
                <Tab className="condition-monitor-tab" />
                <Style className="condition-monitor-style" />
                <Text className="condition-monitor-text" />
                <Box className="condition-monitor-box" />
                <DamageBoxOuterOutsideHorizontal className="physical-damage-box-top-1" />
                <DamageBoxInnerOutsideHorizontal className="physical-damage-box-top-2" />
                <DamageBoxOuterOutsideHorizontal className="physical-damage-box-top-3" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-1" />
                <DamageBoxInnerInsideHorizontal className="physical-damage-box-bottom-2" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-3" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-4" />
                <DamageBoxInnerInsideHorizontal className="physical-damage-box-bottom-5" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-6" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-7" />
                <DamageBoxInnerInsideHorizontal className="physical-damage-box-bottom-8" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-9" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-10" />
                <DamageBoxInnerInsideHorizontal className="physical-damage-box-bottom-11" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-12" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-13" />
                <DamageBoxInnerInsideHorizontal className="physical-damage-box-bottom-14" />
                <DamageBoxOuterInsideHorizontal className="physical-damage-box-bottom-15" />
                <DamageBoxOuterOutsideHorizontal className="physical-damage-box-bottom-16" />
                <DamageBoxInnerOutsideHorizontal className="physical-damage-box-bottom-17" />
                <DamageBoxOuterOutsideHorizontal className="physical-damage-box-bottom-18" />
                <DamageBoxOuterOutsideHorizontal className="stun-damage-box-top-1" />
                <DamageBoxInnerOutsideHorizontal className="stun-damage-box-top-2" />
                <DamageBoxOuterOutsideHorizontal className="stun-damage-box-top-3" />
                <DamageBoxOuterInsideHorizontal className="stun-damage-box-bottom-1" />
                <DamageBoxInnerInsideHorizontal className="stun-damage-box-bottom-2" />
                <DamageBoxOuterInsideHorizontal className="stun-damage-box-bottom-3" />
                <DamageBoxOuterInsideHorizontal className="stun-damage-box-bottom-4" />
                <DamageBoxInnerInsideHorizontal className="stun-damage-box-bottom-5" />
                <DamageBoxOuterInsideHorizontal className="stun-damage-box-bottom-6" />
                <DamageBoxOuterInsideHorizontal className="stun-damage-box-bottom-7" />
                <DamageBoxInnerInsideHorizontal className="stun-damage-box-bottom-8" />
                <DamageBoxOuterInsideHorizontal className="stun-damage-box-bottom-9" />
                <DamageBoxOuterOutsideHorizontal className="stun-damage-box-bottom-10" />
                <DamageBoxInnerOutsideHorizontal className="stun-damage-box-bottom-11" />
                <DamageBoxOuterOutsideHorizontal className="stun-damage-box-bottom-12" />
                <DamageBoxOuterOutsideVertical className="physical-damage-box-left-1" />
                <DamageBoxOuterInsideVertical className="physical-damage-box-left-2" />
                <DamageBoxOuterInsideVertical className="physical-damage-box-left-3" />
                <DamageBoxOuterOutsideVertical className="physical-damage-box-right-3" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-left-4" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-5" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-6" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-right-6" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-left-7" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-8" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-9" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-right-9" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-left-10" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-11" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-12" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-right-12" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-left-13" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-14" />
                <DamageBoxInnerInsideVertical className="physical-damage-box-left-15" />
                <DamageBoxInnerOutsideVertical className="physical-damage-box-right-15" />
                <DamageBoxOuterOutsideVertical className="physical-damage-box-left-16" />
                <DamageBoxOuterInsideVertical className="physical-damage-box-left-17" />
                <DamageBoxOuterInsideVertical className="physical-damage-box-left-18" />
                <DamageBoxOuterOutsideVertical className="physical-damage-box-right-18" />
                <DamageBoxOuterOutsideVertical className="stun-damage-box-left-1" />
                <DamageBoxOuterInsideVertical className="stun-damage-box-left-2" />
                <DamageBoxOuterInsideVertical className="stun-damage-box-left-3" />
                <DamageBoxOuterOutsideVertical className="stun-damage-box-right-3" />
                <DamageBoxInnerOutsideVertical className="stun-damage-box-left-4" />
                <DamageBoxInnerInsideVertical className="stun-damage-box-left-5" />
                <DamageBoxInnerInsideVertical className="stun-damage-box-left-6" />
                <DamageBoxInnerOutsideVertical className="stun-damage-box-right-6" />
                <DamageBoxInnerOutsideVertical className="stun-damage-box-left-7" />
                <DamageBoxInnerInsideVertical className="stun-damage-box-left-8" />
                <DamageBoxInnerInsideVertical className="stun-damage-box-left-9" />
                <DamageBoxInnerOutsideVertical className="stun-damage-box-right-9" />
                <DamageBoxOuterOutsideVertical className="stun-damage-box-left-10" />
                <DamageBoxOuterInsideVertical className="stun-damage-box-left-11" />
                <DamageBoxOuterInsideVertical className="stun-damage-box-left-12" />
                <DamageBoxOuterOutsideVertical className="stun-damage-box-right-12" />
                <div className="physical-damage-modifier-1">-1</div>
                <span className="physical-damage-modifier-2">-2</span>
                <span className="physical-damage-modifier-3">-3</span>
                <span className="physical-damage-modifier-4">-4</span>
                <span className="physical-damage-modifier-5">-5</span>
                <span className="physical-damage-modifier-6">-6</span>
                <span className="stun-damage-modifier-1">-1</span>
                <span className="stun-damage-modifier-2">-2</span>
                <span className="stun-damage-modifier-3">-3</span>
                <span className="stun-damage-modifier-4">-4</span>
                <PhysicalDamageTrack className="physical-damage-track" />
                <PhysicalDamageTrackerIndicator className="physical-damage-tracker-indicator" />
                <PhysicalDamageTrackerIndicatorDetails className="physical-damage-tracker-indicator-details" />
                <StunDamageTrack className="stun-damage-track" />
                <StunDamageTrackerIndicator className="stun-damage-tracker-indicator" />
                <StunDamageTrackerIndicatorDetails className="stun-damage-tracker-indicator-details" />
                <ConditionCounts className="condition-counts" />
                <Overflow className="overflow" />
                <OverflowLine className="overflow-line" />
                <OverflowInstructions1 className="overflow-instructions-1" />
                <OverflowInstructions2 className="overflow-instructions-2" />
                <OverflowInstructions3 className="overflow-instructions-3" />
                <OverflowInstructions4 className="overflow-instructions-4" />
                <OverflowInstructions5 className="overflow-instructions-5" />
                <OverflowInstructions6 className="overflow-instructions-6" />
                <OverflowInstructions7 className="overflow-instructions-7" />
                <OverflowInstructions8 className="overflow-instructions-8" />
            </div>
        );
    }
}

export default ConditionMonitor;