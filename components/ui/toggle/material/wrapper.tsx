'use client';

import React, { useState } from 'react';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import MaterialToggle from './index';
import { MaterialToggleOrientation, MaterialToggleProps } from './types';

export default function MaterialToggleWrapperRenderer({ }: MaterialToggleProps) {
    const [size, setSize] = useState<MaterialComponentSize>(MaterialComponentSize.Medium);
    const [color, setColor] = useState<MaterialComponentColor>(MaterialComponentColor.Primary);
    const [orientation, setOrientation] = useState<MaterialToggleOrientation>(MaterialToggleOrientation.Horizontal);

    const [isExclusive, setIsExclusive] = useState(false);
    const [fullWidth, setFullWidth] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [disableRipple, setDisableRipple] = useState(false);
    const [disableFocusRipple, setDisableFocusRipple] = useState(false);

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
                            onChange={(e) => setSize(e.target.value as MaterialComponentSize)}
                            className="select select-bordered"
                        >
                            {Object.values(MaterialComponentSize).map((sizeOption) => (
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
                            onChange={(e) => setColor(e.target.value as MaterialComponentColor)}
                            className="select select-bordered"
                        >
                            {Object.values(MaterialComponentColor).map((colorOption) => (
                                <option key={colorOption} value={colorOption}>
                                    {colorOption}
                                </option>
                            ))}
                        </select>
                    </label>

                    {/* Orientation Selector */}
                    <label>
                        <span className="mr-2">Orientation:</span>
                        <select
                            value={orientation}
                            onChange={(e) => setOrientation(e.target.value as MaterialToggleOrientation)}
                            className="select select-bordered"
                        >
                            {Object.values(MaterialToggleOrientation).map((orientationOption) => (
                                <option key={orientationOption} value={orientationOption}>
                                    {orientationOption}
                                </option>
                            ))}
                        </select>
                    </label>

                </div>

                {/* Column for Checkbox Styles */}
                <div className="flex flex-col basis-1/3 gap-4">

                    {/* Is Exclusive Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={isExclusive}
                            onChange={(e) => setIsExclusive(e.target.checked)}
                            className="checkbox"
                        />
                        <span>Toggle Group (Exclusive)</span>
                    </label>

                    {/* Full Width Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={fullWidth}
                            onChange={(e) => setFullWidth(e.target.checked)}
                            className="checkbox"
                        />
                        <span>Full Width</span>
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


                    {/* Disable Ripple Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={disableRipple}
                            onChange={(e) => setDisableRipple(e.target.checked)}
                            className="checkbox"
                        />
                        <span>Disable Ripple</span>
                    </label>

                    {/* Disable Focus Ripple Toggle */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={disableFocusRipple}
                            onChange={(e) => setDisableFocusRipple(e.target.checked)}
                            className="checkbox"
                        />
                        <span>Disable Focus Ripple</span>
                    </label>

                </div>
            </div>

            {/* Render the Toggle */}
            <div className="flex justify-around mt-8 w-full">
                <MaterialToggle
                    label="Preview Toggle"
                    library={LIBRARY_IDS.MATERIAL}
                    size={size}
                    color={color}
                    orientation={orientation}
                    isExclusive={isExclusive}
                    fullWidth={fullWidth}
                    disabled={disabled}
                    disableRipple={disableRipple}
                    disableFocusRipple={disableFocusRipple}
                />
            </div>

        </div>
    );
}