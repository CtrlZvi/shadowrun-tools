import React, { Component } from 'react';
import './Cyberdeck.scss';
import { ReactComponent as Text } from './CyberdeckText.svg';
import { ReactComponent as Tab } from './CyberdeckTab.svg';
import { ReactComponent as Style } from './CyberdeckStyle.svg';
import { ReactComponent as Box } from './CyberdeckBox.svg';
import { ReactComponent as Line } from './CyberdeckLine.svg';
import { ReactComponent as Line7 } from './CyberdeckLine7.svg';
import { ReactComponent as Model } from './CyberdeckModel.svg';
import { ReactComponent as Attack } from './CyberdeckAttack.svg';
import { ReactComponent as Sleaze } from './CyberdeckSleaze.svg';
import { ReactComponent as DeviceRating } from './CyberdeckDeviceRating.svg';
import { ReactComponent as DataProcessing } from './CyberdeckDataProcessing.svg';
import { ReactComponent as Firewall } from './CyberdeckFirewall.svg';
import { ReactComponent as Programs } from './CyberdeckPrograms.svg';
import { ReactComponent as MatrixConditionMonitor } from './CyberdeckMatrixConditionMonitor.svg';
import { ReactComponent as Condition } from './CyberdeckCondition.svg';
import { ReactComponent as ConditionNumbers } from './CyberdeckConditionNumbers.svg';
import { ReactComponent as ConditionNumber10 } from './CyberdeckConditionNumber10.svg';
import { ReactComponent as ConditionNumber11 } from './CyberdeckConditionNumber11.svg';
import { ReactComponent as ConditionNumber12 } from './CyberdeckConditionNumber12.svg';
import { observer } from 'mobx-react';

@observer class Cyberdeck extends Component {
    render() {
        return (
            <div className="cyberdeck">
                <Tab className="cyberdeck-tab" />
                <Style className="cyberdeck-style" />
                <Text className="cyberdeck-text" />
                <Box className="cyberdeck-box" />
                <Line className="cyberdeck-line-1" />
                <Line className="cyberdeck-line-2" />
                <Line className="cyberdeck-line-3" />
                <Line className="cyberdeck-line-4" />
                <Line className="cyberdeck-line-5" />
                <Line className="cyberdeck-line-6" />
                <Line7 className="cyberdeck-line-7" />
                <Model className="cyberdeck-model" />
                <Attack className="cyberdeck-attack" />
                <Sleaze className="cyberdeck-sleaze" />
                <DeviceRating className="cyberdeck-device-rating" />
                <DataProcessing className="cyberdeck-data-processing" />
                <Firewall className="cyberdeck-firewall" />
                <Programs className="cyberdeck-programs" />
                <MatrixConditionMonitor className="cyberdeck-matrix-condition-monitor" />
                <Condition className="cyberdeck-condition-1" />
                <Condition className="cyberdeck-condition-2" />
                <Condition className="cyberdeck-condition-3" />
                <Condition className="cyberdeck-condition-4" />
                <Condition className="cyberdeck-condition-5" />
                <Condition className="cyberdeck-condition-6" />
                <Condition className="cyberdeck-condition-7" />
                <Condition className="cyberdeck-condition-8" />
                <Condition className="cyberdeck-condition-9" />
                <Condition className="cyberdeck-condition-10" />
                <Condition className="cyberdeck-condition-11" />
                <Condition className="cyberdeck-condition-12" />
                <ConditionNumbers className="cyberdeck-condition-numbers" />
                <ConditionNumber10 className="cyberdeck-condition-number-10" />
                <ConditionNumber11 className="cyberdeck-condition-number-11" />
                <ConditionNumber12 className="cyberdeck-condition-number-12" />
            </div>
        );
    }
}

export default Cyberdeck;