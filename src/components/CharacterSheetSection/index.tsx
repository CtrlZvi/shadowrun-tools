import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import './style.scss';
import CharacterSheetContext from '../../contexts/CharacterSheet';

const CharacterSheetSection = observer(({ name }: { name: string }) => {
    const characterSheet = useContext(CharacterSheetContext);

    return (
        <section className="character-sheet-section">
            <svg
                className="section-box-top"
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 270.625 11.535"
            >
                <polyline
                    points="270.25,11.535 270.25,0.5 11.66,0.5 0.5,11.535"
                    fill="none"
                    stroke-width="0.75pt"
                    stroke="#7e0f12"
                />
            </svg>
            <header>
                <h2>{name}</h2>
            </header>
        </section >
    )
});

export default CharacterSheetSection;
