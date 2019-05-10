import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent, FunctionComponent, SVGProps } from 'react';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterContext from '../../contexts/Character';
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Attribute } from '../../models/Attribute';
import { MetatypeAttribute } from '../../models/Metatype';

const AttributeComponent = observer(({ attribute, svg }: { attribute: Attribute, svg: JSX.Element }) => {
    let characterSheet = useContext(CharacterSheetContext);
    let character = useContext(CharacterContext);
    let prioritySystem = useContext(PrioritySystemContext);

    const name = Attribute[attribute];
    const lookupName = name.toLowerCase()
    let value: number = (character as any)[lookupName];
    let metatypeAttribute: MetatypeAttribute = (character.metatype as any)[lookupName];

    return (
        <div className={`attributes-${lookupName}`} >
            {!characterSheet.rendered ? svg : undefined}
            < div >
                <span>{value}({value})</span>
                <input type="number"
                    value={character.attributes.get(attribute)}
                    min={0}
                    max={metatypeAttribute.maximum - metatypeAttribute.base}
                    onChange={
                        (event: ChangeEvent<HTMLInputElement>) => prioritySystem.updateAttribute(attribute, event.currentTarget.valueAsNumber)
                    } />
            </div >
        </div >
    )
});

export default AttributeComponent;