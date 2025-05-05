'use client';

import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import { AccordionProps } from './types';
import DaisyAccordion from './daisy';
import { useState } from 'react';
import { SAMPLE_ACCORDION_DATA_1, SAMPLE_ACCORDION_DATA_2, SAMPLE_ACCORDION_DATA_3 } from './config';

interface RenderProps extends AccordionProps {
    library: Library;
}

export default function AccordionRenderer(props: RenderProps) {
    const { library, ...rest } = props;
    const [dataSet, setDataSet] = useState(3);

    // Function for future functionality to toggle between datasets or number of items
    // This is a placeholder for now, but it could be expanded later to allow for more dynamic data handling
    const getData = () => {
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

    const handleDataSetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDataSet(Number(e.target.value));
    };

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return ( // Fairly decent chance I'll want to relocate the select elsewhere, but saving it here for now
                <div>
                    {/* Dropdown to toggle between datasets */}
                    {/* <div className="mb-4">
                        <label className="mr-2">Select Data Set:</label>
                        <select value={dataSet} onChange={handleDataSetChange}>
                            <option value={1}>1 Item</option>
                            <option value={2}>2 Items</option>
                            <option value={3}>3 Items</option>
                        </select>
                    </div> */}
                    {/* Render DaisyAccordion with dynamic items */}
                    <DaisyAccordion {...rest} items={getData()} />
                </div>
            );
        default:
            return null;
    }
}