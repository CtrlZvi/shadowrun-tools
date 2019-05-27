import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect, useCallback, MemoExoticComponent, ForwardRefExoticComponent, RefAttributes } from 'react';

import { ReactComponent as SVG } from './Background.svg';
import './style.scss';

import CharacterSheetContext from '../../contexts/CharacterSheet';
import CharacterSheetSection from '../CharacterSheetSection';
import PersonalData from '../PersonalData';
import Attributes from "../Attributes";

let toggleRendered = () => { }

const sectionNames = [
    PersonalData,
    Attributes,
    "SKILLS",
    "IDS / LIFESTYLES / CURRENCY",
    "CORE COMBAT INFO",
    "CONDITION MONITOR",
    "QUALITIES",
    "CONTACTS",
    "RANGED WEAPONS",
    "ARMOR",
    "AUGMENTATIONS",
    "GEAR",
    "MELEE WEAPONS",
    "CYBERDECK",
    "VEHICLE",
    "SPELLS / PREPARATIONS / RITUALS / COMPLEX FORMS",
    "ADEPT POWERS or OTHER ABILITIES",
]

const CharacterSheet = observer(() => {
    const [developmentState, setDevelopmentState] = useState({
        rendered: true,
    });
    // HACK (zeffron 2019-05-05) This is not ideal because it causes the
    // function to be updated every time the state changes, but it works.
    toggleRendered = () => {
        setDevelopmentState({
            rendered: !developmentState.rendered,
        })
    };

    const [boundingRectangles, setBoundingRectangles] = useState(
        new Map<string, ClientRect | DOMRect>()
    );

    // While this seems like it violates the first rule of Hooks, since we're
    // calling `useCallback` inside a function inside a component, we're
    // actually not because we've defined a new component. The use of
    // `useCallback` is inside of a function component that only this component
    // has knowledge of. This allows us to create a list of components that
    // need references to get their bounding boxes without violating the rules
    // of hooks.
    const CharacterSheetSectionWrapper = ({ section }: { section: string | MemoExoticComponent<ForwardRefExoticComponent<RefAttributes<{}>>> }) => {
        // See https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
        // for more details on how this works.
        const ref = useCallback(
            (node: HTMLElement) => {
                if (node === null) {
                    return;
                }
                // `getBoundingClientRect()` doesn't include the margins, so we
                // need to add them in ourselves. Since we only care about the
                // height, we don't bother with the left or right margins.
                const boundingRectangle = node.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(node);
                const marginTop = Number(computedStyle.marginTop!.endsWith("px") ? computedStyle.marginTop!.substring(0, computedStyle.marginTop!.length - 2) : computedStyle.marginTop!);
                const marginBottom = Number(computedStyle.marginBottom!.endsWith("px") ? computedStyle.marginBottom!.substring(0, computedStyle.marginBottom!.length - 2) : computedStyle.marginBottom!);
                const marginBoundingRectangle = new DOMRect(
                    boundingRectangle.left,
                    boundingRectangle.top - (!isNaN(marginTop) ? marginTop : 0),
                    boundingRectangle.width,
                    boundingRectangle.height + (!isNaN(marginTop) ? marginTop : 0) + (!isNaN(marginBottom) ? marginBottom : 0),
                )
                setBoundingRectangles(boundingRectangles.set(typeof section === "string" ? section : section.displayName!, marginBoundingRectangle));
            },
            [section],
        );

        if (typeof section !== "string") {
            const Component = section;
            return <Component ref={ref} />;
        }

        return <CharacterSheetSection ref={ref} name={section} />;
    };

    const [sections, setSections] = useState([
        sectionNames.map((section, index) =>
            <CharacterSheetSectionWrapper key={typeof section === "string" ? section : section.displayName} section={section} />
        ),
    ]);

    // See https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
    // for more details on how this works.
    const [columnHeight, setColumnHeight] = useState(0);

    const columnHeightRef = useCallback(
        node => {
            if (node !== null) {
                setColumnHeight(node.getBoundingClientRect().height);
            }
        },
        [],
    );
    const pages = sections.map((sections, index) => (
        <div key={index} className={"character-sheet-page" + (developmentState.rendered ? " rendered" : "")}>
            {background}
            <div ref={columnHeightRef} className="sections">
                {sections}
            </div>
        </div>
    ))

    // TODO (zeffron 2019-05-25) See if `useLayoutEffect` is more appropriate
    // than `useEffect`.
    useLayoutEffect(
        () => {
            const { sections: newSections } = sections
                // FIXME (zeffron 2015-05-25) The below algorithm is incorrect,
                // as the render order could theoretically be different from
                // the order specified, so we need to use the actual position
                // to ensure we process them in the correct order. This can
                // probably be done with an appropriate sort.
                .flat()
                .reduce(({ sections: newSections, location }, section) => {
                    // We redo some of the work we gain as a benefit from using
                    // flexbox here, as we don't have an easy way to solve for when
                    // elements shrink allowing movement to an earlier page.
                    // The algorithm we use is to keep track of the height in the
                    // current column, and which column we're in. If the height in
                    // the current column exceeds the height available per column,
                    // we put the section into the next column. If we move to the
                    // third column, then we create a new page.

                    const sectionBoundingRectangle = boundingRectangles
                        .get(typeof section.props.section === "string" ? section.props.section : section.props.section.displayName)!;

                    const newHeight = location.height + sectionBoundingRectangle.height;
                    if (newHeight <= columnHeight) {
                        newSections[location.page].push(section);
                        location.height = newHeight
                        return { sections: newSections, location: location };
                    }
                    location.height = sectionBoundingRectangle.height;

                    location.column += 1;
                    if (location.column < 2) {
                        newSections[location.page].push(section);
                        return { sections: newSections, location: location };
                    }
                    location.column = 0;

                    location.page += 1;
                    newSections.push([section]);
                    return { sections: newSections, location: location };
                },
                    {
                        sections: [[]] as JSX.Element[][],
                        location: {
                            page: 0,
                            column: 0,
                            height: 0,
                        }
                    }
                );

            // TODO (zeffron 2019-05-25) Find a more efficient way of not
            // changing the pages if nothing has changed than iterating over
            // all of them.
            if (newSections.length !== sections.length || !newSections.every(
                (page, pageIndex) => page.length === sections[pageIndex].length && page.every(
                    (section, sectionIndex) => section === sections[pageIndex][sectionIndex]
                )
            )) {
                setSections(newSections);
            }
        },
        [sections, boundingRectangles, columnHeight]
    )

    const background = !developmentState.rendered ?
        <SVG className="background" /> :
        undefined;

    return (
        <CharacterSheetContext.Provider value={developmentState}>
            {/*
                TODO (zeffron 2019-05-25) Use `window.devicePixelRatio` and CSS
                transform to make the character sheet not be tiny on high DPI
                devices.
            */}
            <div className="character-sheet">
                {/* <div className={"character-sheet-page" + (developmentState.rendered ? " rendered" : "")}>
                    {background}
                    <Metatext />
                    <PersonalData />
                    <Attributes />
                    <Skills />
                    <IDsLifestylesCurrency />
                    <CoreCombatInfo />
                    <ConditionMonitor />
                    <Qualities />
                    <Contacts />
                </div>
                <div className={"character-sheet-page" + (developmentState.rendered ? " rendered" : "")}>
                    {background}
                    <Metatext />
                    <RangedWeapons />
                    <Armor />
                    <Augmentations />
                    <Gear />
                    <MeleeWeapons />
                    <Cyberdeck />
                    <Vehicle />
                    <Spells />
                    <AdeptPowers />
                </div> */}
                {pages}
            </div>
        </CharacterSheetContext.Provider >
    )
});

window.onkeydown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === "F12") {
        toggleRendered();
        event.preventDefault();
        return false;
    }
}

export default CharacterSheet;
