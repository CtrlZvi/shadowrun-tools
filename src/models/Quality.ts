import qualities from '../data/qualities.json'

export enum QualityType {
    Positive,
    Negative,
}

export interface Rating {
    name: string;
    karmaCost: number;
}

export interface Quality {
    name: string;
    type: QualityType;
    ratings: Rating[];
    rating?: number;
};

export const Qualities: Map<string, Quality> = new Map(
    [
        ...Object.entries(qualities).map(
            ([name, value]): [string, Quality] => {
                return [
                    name,
                    {
                        name: name,
                        type: QualityType.Positive,
                        ratings: (value as {
                            ratings: {
                                name: string,
                                karmaCost: number
                            }[]
                        }).ratings,
                    },
                ];
            }
        )
    ]
);
