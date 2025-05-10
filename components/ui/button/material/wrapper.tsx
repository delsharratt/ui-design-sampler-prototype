'use client';

import React, { useState } from 'react';
import { MaterialButtonProps, MaterialButtonVariant } from './types';
import MaterialButton from './index';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';

export default function MaterialButtonWrapperRenderer({ }: MaterialButtonProps) {
    const [size, setSize] = useState<MaterialComponentSize>(MaterialComponentSize.Medium);
    const [color, setColor] = useState<MaterialComponentColor>(MaterialComponentColor.Primary);
    const [variant, setVariant] = useState<MaterialButtonVariant>(MaterialButtonVariant.Contained);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="flex flex-col gap-4 text-start w-full">
            <div className="flex flex-row gap-4 w-full">

                {/* Column for Dropdown Styles */}
                <div className="flex flex-col basis-2/3 gap-4">

                    {/* Variant Selector */}
                    <label>
                        <span className="mr-2">Style:</span>
                        <select
                            value={variant}
                            onChange={(e) => setVariant(e.target.value as MaterialButtonVariant)}
                            className="select select-bordered"
                        >
                            {Object.values(MaterialButtonVariant).map((variantOption) => (
                                <option key={variantOption} value={variantOption}>
                                    {variantOption}
                                </option>
                            ))}
                        </select>
                    </label>

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

                </div>

                {/* Column for Checkbox Styles */}
                <div className="flex flex-col basis-1/3 gap-4">

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

            {/* Render the Button */}
            <div className="flex justify-around mt-8 w-full">
                <MaterialButton
                    label="Preview Button"
                    library={LIBRARY_IDS.MATERIAL}
                    variant={variant}
                    size={size}
                    color={color}
                    disabled={disabled}
                />
            </div>

        </div>
    );
}