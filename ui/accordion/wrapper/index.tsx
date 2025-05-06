'use client';

import React, { useState } from 'react';
import AccordionRenderer, { RenderProps } from '../index';
import { AccordionModifier, AccordionItem } from '../types';
import { SAMPLE_ACCORDION_DATA_1, SAMPLE_ACCORDION_DATA_2, SAMPLE_ACCORDION_DATA_3 } from '../config';

export default function AccordionCustomizationWrapper({ library }: RenderProps) {
    const [modifier, setModifier] = useState<AccordionModifier>(AccordionModifier.Arrow);
    const [join, setJoin] = useState(false);
    const [dataSet, setDataSet] = useState(1);

    const getData = (): AccordionItem[] => {
        switch (dataSet) {
            case 1:
                return SAMPLE_ACCORDION_DATA_1;
            case 2:
                return SAMPLE_ACCORDION_DATA_2;
            case 3:
                return SAMPLE_ACCORDION_DATA_3;
            default:
                return SAMPLE_ACCORDION_DATA_1;
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                {/* Modifier Selector */}
                <label>
                    <span className="mr-2">Modifier:</span>
                    <select
                        value={modifier}
                        onChange={(e) => setModifier(e.target.value as AccordionModifier)}
                        className="select select-bordered"
                    >
                        {Object.values(AccordionModifier).map((modifierOption) => (
                            <option key={modifierOption} value={modifierOption}>
                                {modifierOption}
                            </option>
                        ))}
                    </select>
                </label>

                {/* Join Toggle */}
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={join}
                        onChange={(e) => setJoin(e.target.checked)}
                        className="checkbox"
                    />
                    <span>Join Items</span>
                </label>

                {/* Data Set Selector */}
                <label>
                    <span className="mr-2">Data Set:</span>
                    <select
                        value={dataSet}
                        onChange={(e) => setDataSet(Number(e.target.value))}
                        className="select select-bordered"
                    >
                        <option value={1}>1 Item</option>
                        <option value={2}>2 Items</option>
                        <option value={3}>3 Items</option>
                    </select>
                </label>
            </div>

            {/* Render the Accordion */}
            <div className="mt-4">
                <AccordionRenderer
                    library={library}
                    items={getData()}
                    modifier={modifier}
                    join={join}
                />
            </div>
        </div>
    );
}