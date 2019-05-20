import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useContext } from 'react';

import { PrioritySystemContext } from '../../contexts/PrioritySystem';
import { Quality, Qualities } from '../../models/Quality';

const qualities = [...Qualities.values()]
    .map(quality => (
        <option key={quality.name} value={quality.name}>
            {quality.name}
        </option>
    ));

const QualityComponent = observer(({ quality, index }: { quality: Quality, index: number }) => {
    const prioritySystem = useContext(PrioritySystemContext);

    let ratings = quality.ratings.length > 1 ?
        <select className={"quality-rating"} value={quality.ratings[quality.rating !== undefined ? quality.rating : 0].name} onChange={
            action((event: ChangeEvent<HTMLSelectElement>) => prioritySystem.updateQuality(
                quality,
                quality.ratings.findIndex(rating => rating.name === event.currentTarget.value),
                index,
            ))
        }>
            {quality.ratings
                .map(rating => (
                    <option key={rating.name} value={rating.name}>
                        {rating.name}
                    </option>
                ))}
        </select> :
        undefined;

    return (
        <tr className={`quality`} >
            <td>
                <select value={quality.name} onChange={
                    action((event: ChangeEvent<HTMLSelectElement>) => prioritySystem.updateQuality(
                        Qualities.get(event.currentTarget.value)!,
                        0,
                        index,
                    ))
                }>
                    {qualities}
                </select>
                {ratings}
            </td>
        </tr>
    )
});

export default QualityComponent;
