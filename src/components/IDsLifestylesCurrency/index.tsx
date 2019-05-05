import React, { Component } from 'react';
import './IDsLifestylesCurrency.scss';
import { ReactComponent as Text } from './IDsLifestylesCurrencyText.svg';
import { ReactComponent as Tab } from './IDsLifestylesCurrencyTab.svg';
import { ReactComponent as Style } from './IDsLifestylesCurrencyStyle.svg';
import { ReactComponent as Box } from './IDsLifestylesCurrencyBox.svg';
import { ReactComponent as Line } from './IDsLifestylesCurrencyLine.svg';
import { ReactComponent as PrimaryLifestyle } from './PrimaryLifestyle.svg';
import { ReactComponent as Nuyen } from './Nuyen.svg';
import { ReactComponent as Licenses } from './Licenses.svg';
import { ReactComponent as FakeIDsRelatedLifestylesFundsLicenses } from './FakeIDsRelatedLifestylesFundsLicenses.svg';
import { observer } from 'mobx-react';

@observer class Skills extends Component {
    render() {
        return (
            <div className="ids-lifestyles-currency">
                <Tab className="ids-lifestyles-currency-tab" />
                <Style className="ids-lifestyles-currency-style" />
                <Text className="ids-lifestyles-currency-text" />
                <Box className="ids-lifestyles-currency-box" />
                <Line className="ids-lifestyles-currency-line-1" />
                <Line className="ids-lifestyles-currency-line-2" />
                <Line className="ids-lifestyles-currency-line-3" />
                <Line className="ids-lifestyles-currency-line-4" />
                <Line className="ids-lifestyles-currency-line-5" />
                <Line className="ids-lifestyles-currency-line-6" />
                <PrimaryLifestyle className="primary-lifestyle" />
                <Nuyen className="nuyen" />
                <Licenses className="licenses" />
                <FakeIDsRelatedLifestylesFundsLicenses className="fake-ids-related-lifestyles-funds-licenses" />
            </div>
        );
    }
}

export default Skills;