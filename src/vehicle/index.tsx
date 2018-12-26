import React, { Component } from 'react';
import './Vehicle.scss';
import { ReactComponent as Text } from './VehicleText.svg';
import { ReactComponent as Tab } from './VehicleTab.svg';
import { ReactComponent as Style } from './VehicleStyle.svg';
import { ReactComponent as Box } from './VehicleBox.svg';
import { ReactComponent as Line } from './VehicleLine.svg';
import { ReactComponent as Name } from './VehicleName.svg';
import { ReactComponent as Handling } from './VehicleHandling.svg';
import { ReactComponent as Acceleration } from './VehicleAcceleration.svg';
import { ReactComponent as Speed } from './VehicleSpeed.svg';
import { ReactComponent as Pilot } from './VehiclePilot.svg';
import { ReactComponent as Body } from './VehicleBody.svg';
import { ReactComponent as Sensor } from './VehicleSensor.svg';
import { ReactComponent as Armor } from './VehicleArmor.svg';
import { ReactComponent as Notes } from './VehicleNotes.svg';
import { observer } from 'mobx-react';

@observer class Vehicle extends Component {
    render() {
        return (
            <div className="vehicle">
                <Tab className="vehicle-tab" />
                <Style className="vehicle-style" />
                <Text className="vehicle-text" />
                <Box className="vehicle-box" />
                <Line className="vehicle-line-1" />
                <Line className="vehicle-line-2" />
                <Line className="vehicle-line-3" />
                <Line className="vehicle-line-4" />
                <Line className="vehicle-line-5" />
                <Line className="vehicle-line-6" />
                <Name className="vehicle-name" />
                <Handling className="vehicle-handling" />
                <Acceleration className="vehicle-acceleration" />
                <Speed className="vehicle-speed" />
                <Pilot className="vehicle-pilot" />
                <Body className="vehicle-body" />
                <Sensor className="vehicle-sensor" />
                <Armor className="vehicle-armor" />
                <Notes className="vehicle-notes" />
            </div>
        );
    }
}

export default Vehicle;