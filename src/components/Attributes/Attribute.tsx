import { observer } from 'mobx-react-lite';
import React, { useContext, ChangeEvent, FunctionComponent, SVGProps } from 'react';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterContext from '../../contexts/Character';
import PrioritySystemContext from '../../contexts/PrioritySystem';
import { Attribute } from '../../models/Attribute';
import { MetatypeAttribute } from '../../models/Metatype';
import { MagicOrResonanceUser } from '../../models/MagicOrResonance';

const AttributeComponent = observer(({ attribute, svg }: { attribute: Attribute, svg: JSX.Element }) => {
    const characterSheet = useContext(CharacterSheetContext);
    const character = useContext(CharacterContext);
    const prioritySystem = useContext(PrioritySystemContext);

    const name = Attribute[attribute];
    const lookupName = name.toLowerCase()
    let value: number = (character as any)[lookupName];
    let metatypeAttribute: MetatypeAttribute = lookupName !== Attribute[Attribute.MagicOrResonance].toLowerCase() ?
        (character.metatype as any)[lookupName] :
        character.magicOrResonanceUser === MagicOrResonanceUser.Technomancer ?
            character.metatype["resonance"] :
            character.metatype["magic"];

    return (
        <div className={`attributes-${lookupName}`} >
            {!characterSheet.rendered ? svg : undefined}
            < div >
                <span>{value}({value})</span>
                <input type="number"
                    value={value}
                    min={metatypeAttribute !== undefined ? metatypeAttribute.base : 0}
                    max={metatypeAttribute !== undefined ? metatypeAttribute.maximum : 0}
                    onChange={
                        (event: ChangeEvent<HTMLInputElement>) => prioritySystem.updateAttribute(attribute, event.currentTarget.valueAsNumber)
                    } />
            </div >
        </div >
    )
});

export default AttributeComponent;