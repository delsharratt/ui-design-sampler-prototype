'use client';

import React, { useState } from 'react';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { DaisyToggleProps } from './types';
import DaisyToggle from '.';

export default function DaisyToggleWrapperRenderer({ }: DaisyToggleProps) {
    const [color, setColor] = useState<DaisyElementColor>(DaisyElementColor.Primary);
    const [size, setSize] = useState<DaisyElementSize>(DaisyElementSize.Medium);

    const [simple, setSimple] = useState(false);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="flex flex-col gap-4 text-start w-full">
            <div className="flex flex-row gap-4 w-full">

                {/* Column for Dropdown Styles */}
                <div className="flex flex-col basis-2/3 gap-4">

                    {/* Size Selector */}
                    <label>
                        <span className="mr-2">Size:</span>
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value as DaisyElementSize)}
                            className="select select-bordered"
                        >
                            {Object.values(DaisyElementSize).map((sizeOption) => (
                                <option key={sizeOption} value={sizeOption}>
                                    {sizeOption}
                                </option>
                            ))}
                        </select>
                    </label>

                    {/* Color Selector */}
                    <label>
                        <span className="mr-2">Color:</span>
                        <select
                            value={color}
                            onChange={(e) => setColor(e.target.value as DaisyElementColor)}
                            className="select select-bordered"
                        >
                            {Object.values(DaisyElementColor).map((colorOption) => (
                                <option key={colorOption} value={colorOption}>
                                    {colorOption}
                                </option>
                            ))}
                        </select>
                    </label>

                </div>

                {/* Column for Checbox Styles */}
                <div className="flex flex-col basis-1/3 gap-4">

                    {/* Simple Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={simple}
                            onChange={(e) => setSimple(e.target.checked)}
                            className="checkbox mr-2"
                        />
                        <span>Simple Toggle</span>
                    </label>

                    {/* Disabled Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={disabled}
                            onChange={(e) => setDisabled(e.target.checked)}
                            className="checkbox mr-2"
                        />
                        <span>Disabled</span>
                    </label>

                </div>
            </div>

            {/* Render the Button */}
            <div className="mt-4">
                <DaisyToggle
                    label={"Preview Toggle"}
                    library={LIBRARY_IDS.DAISY}
                    size={size}
                    color={color}
                    simple={simple}
                    disabled={disabled}
                />
            </div>

            {/* Hidden buttons to get around Tailwind buildtime class name limitation */}
            <div className="hidden">
                <button className="btn btn-soft btn-primary btn-xs">Soft | Primary | Extra Small</button>
                <button className="btn btn-outline btn-secondary btn-sm">Outline | Secondary | Small</button>
                <button className="btn btn-dash btn-accent btn-md">Dash | Accent | Medium</button>
                <button className="btn btn-active btn-info btn-lg">Active | Info | Large</button>
                <button className="btn btn-ghost btn-success btn-xl">Ghost | Success | Extra Large</button>
                <button className="btn btn-link btn-warning btn-square">Link | Warning | Square</button>
                <button className="btn btn-widen btn-error btn-circle">Wide | Error | Circle</button>
            </div>
        </div>
    );
}