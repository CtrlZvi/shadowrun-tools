import { observer } from 'mobx-react-lite';
import React from 'react';

import './Contacts.scss';
import { ReactComponent as Attributes } from './ContactsAttributes.svg';
import { ReactComponent as Corner } from './ContactsCorner.svg';
import { ReactComponent as Line } from './ContactsLine.svg';
import { ReactComponent as Name } from './ContactsName.svg';
import { ReactComponent as Style } from './ContactsStyle.svg';
import { ReactComponent as Tab } from './ContactsTab.svg';
import { ReactComponent as Text } from './ContactsText.svg';
import { ReactComponent as Vertical } from './ContactsVertical.svg';

const Contacts = observer(() => {
    return (
        <div className="contacts">
            <Tab className="contacts-tab" />
            <Style className="contacts-style" />
            <Text className="contacts-text" />
            <Vertical className="contacts-vertical" />
            <Corner className="contacts-corner" />
            <Line className="contacts-line-1" />
            <Line className="contacts-line-2" />
            <Line className="contacts-line-3" />
            <Line className="contacts-line-4" />
            <Line className="contacts-line-5" />
            <Line className="contacts-line-6" />
            <Name className="contacts-name" />
            <Attributes className="contacts-attributes" />
        </div>
    );
});

export default Contacts;
