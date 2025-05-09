'use client';

import React, { useState } from 'react';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import MaterialAccordion from './index';
import { MaterialAccordionProps } from './types';
import { MATERIAL_TRANSITIONS, MaterialTransitionId } from '../../../core/constants/material';

export default function MaterialAccordionWrapper({ }: MaterialAccordionProps) {
    const [expanded, setExpanded] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [transition, setTransition] = useState<MaterialTransitionId | null>(null);

    return (
        <div className="flex flex-col gap-4 text-start w-full">
            <div className="flex flex-row gap-4 w-full">

                {/* Column for Dropdown Styles */}
                <div className="flex flex-col basis-2/3 gap-4">

                    {/* Size Selector */}
                    {/* <label>
                        <span className="mr-2">Size:</span>
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value as MaterialComponentSize)}
                            className="select select-bordered"
                        >
                            {Object.values(MaterialComponentSize).map((sizeOption) => (
                                <option key={sizeOption} value={sizeOption}>
                                    {sizeOption}
                                </option>
                            ))}
                        </select>
                    </label> */}

                    {/* Transition Selector */}
                    <label>
                        <span className="mr-2">Transition:</span>
                        <select
                            value={transition}
                            onChange={(e) => setTransition(e.target.value as MaterialTransitionId)}
                            className="select select-bordered"
                        >
                            {Object.entries(MATERIAL_TRANSITIONS).map(([id, { label }]) => (
                                <option key={id} value={id}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </label>

                </div>

                {/* Column for Checkbox Styles */}
                <div className="flex flex-col basis-1/3 gap-4">

                    {/* Expanded Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={expanded}
                            onChange={(e) => setExpanded(e.target.checked)}
                            className="checkbox"
                        />
                        <span>Expanded</span>
                    </label>

                    {/* Disabled Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={disabled}
                            onChange={(e) => setDisabled(e.target.checked)}
                            className="checkbox"
                        />
                        <span>Disabled</span>
                    </label>

                </div>
            </div>

            {/* Render the Accordion */}
            <div className="flex justify-around mt-8 w-full">
                <MaterialAccordion
                    library={LIBRARY_IDS.MATERIAL}
                    disabled={disabled}
                />
            </div>

        </div>
    );
}