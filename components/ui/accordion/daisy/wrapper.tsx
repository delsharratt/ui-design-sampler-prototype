'use client';

import React, { useState } from 'react';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { DaisyAccordionModifier } from './types';
import { UnifiedAccordionProps } from '../types';
import { ACCORDION_SAMPLE_DATA } from '../config';
import DaisyAccordion from './index';

export default function DaisyAccordionWrapper({ }: UnifiedAccordionProps) {
    const [modifier, setModifier] = useState<DaisyAccordionModifier>(DaisyAccordionModifier.Arrow);
    const [join, setJoin] = useState(false);

    // TODO: implement data set options based on config
    // const [dataSet, setDataSet] = useState(1);
    // const getData = (): AccordionItem[] => {
    //     switch (dataSet) {
    //         case 1:
    //             return SAMPLE_ACCORDION_DATA_1;
    //         case 2:
    //             return SAMPLE_ACCORDION_DATA_2;
    //         case 3:
    //             return SAMPLE_ACCORDION_DATA_3;
    //         default:
    //             return SAMPLE_ACCORDION_DATA_1;
    //     }
    // };

    return (
        <div className="flex flex-col gap-4 text-start w-full">
            <div className="flex flex-row gap-4 w-full">

                {/* Column for Dropdown Styles */}
                <div className="flex flex-col basis-2/3 gap-4">

                    {/* Modifier Selector */}
                    <label>
                        <span className="mr-2">Modifier:</span>
                        <select
                            value={modifier}
                            onChange={(e) => setModifier(e.target.value as DaisyAccordionModifier)}
                            className="select select-bordered"
                        >
                            {Object.values(DaisyAccordionModifier).map((modifierOption) => (
                                <option key={modifierOption} value={modifierOption}>
                                    {modifierOption}
                                </option>
                            ))}
                        </select>
                    </label>

                </div>

                {/* Column for Checkbox Styles */}
                <div className="flex flex-col basis-1/3 gap-4">

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
                    {/* <label>
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
                    </label> */}

                </div>

            </div>

            {/* Render the Accordion */}
            <div className="flex justify-around mt-8 w-full">
                <DaisyAccordion
                    library={LIBRARY_IDS.DAISY}
                    items={ACCORDION_SAMPLE_DATA}
                    modifier={modifier}
                    join={join}
                />
            </div>
        </div>
    );
}