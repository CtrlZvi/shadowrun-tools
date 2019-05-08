import { observer } from 'mobx-react-lite';
import React from 'react';

import './Spells.scss';
import { ReactComponent as RitualsComplexForms } from './RitualsComplexFormsText.svg';
import { ReactComponent as Attributes } from './SpellsAttributes.svg';
import { ReactComponent as Box } from './SpellsBox.svg';
import { ReactComponent as Line } from './SpellsLine.svg';
import { ReactComponent as SpellsPreparations } from './SpellsPreparationsText.svg';
import { ReactComponent as Style } from './SpellsStyle.svg';
import { ReactComponent as Tab } from './SpellsTab.svg';

const Spells = observer(() => {
    return (
        <div className="spells">
            <Tab className="spells-tab" />
            <Style className="spells-style" />
            <SpellsPreparations className="spells-preparations" />
            <RitualsComplexForms className="rituals-complex-forms" />
            <Box className="spells-box" />
            <Line className="spells-line-1" />
            <Line className="spells-line-2" />
            <Line className="spells-line-3" />
            <Line className="spells-line-4" />
            <Line className="spells-line-5" />
            <Line className="spells-line-6" />
            <Line className="spells-line-7" />
            <Line className="spells-line-8" />
            <Line className="spells-line-9" />
            <Attributes className="spells-attributes" />
        </div>
    );
});

export default Spells;