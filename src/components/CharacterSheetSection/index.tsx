import { observer } from 'mobx-react-lite';
import React, { ReactNode, PropsWithChildren } from 'react';

import './style.scss';

type CharacterSheetSectionProperties = PropsWithChildren<{
    name: string;
    className?: string;
    // TODO (zeffron 2019-05-25) Determine why we need to specify children in
    // this interface. My understanding is that PropsWithChildren should be
    // successfully taking care of that.
    children?: ReactNode;
}>;

const CharacterSheetSection = observer(
    ({ name, className, children }: CharacterSheetSectionProperties, ref: any) => {
        return (
            <section className={["character-sheet-section", className].join(" ")} ref={ref}>
                <svg
                    className="section-box-top"
                    version="1.1"
                    baseProfile="full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 270.625 11.535"
                >
                    <polyline points="270.25,11.535 270.25,0.5 11.66,0.5 0.5,11.535" />
                </svg>
                <header>
                    <h2>{name}</h2>
                </header>
                <div className="character-sheet-section-body">
                    {children}
                </div>
            </section >
        )
    },
    { forwardRef: true },
);

export default CharacterSheetSection;
