'use client';

import React, { useState } from 'react';
import ButtonRenderer from './index';
import { MaterialButtonProps, MaterialButtonColor, MaterialButtonSize, MaterialButtonVariant } from './types';
import MaterialButton from './index';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

export default function MaterialButtonCustomizationWrapper({ }: MaterialButtonProps) {
    const [variant, setVariant] = useState<MaterialButtonVariant>(MaterialButtonVariant.Contained);
    const [size, setSize] = useState<MaterialButtonSize>(MaterialButtonSize.Medium);
    const [color, setColor] = useState<MaterialButtonColor>(MaterialButtonColor.Primary);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="flex flex-col gap-4 text-start">
            <div className="flex flex-col gap-2">

                {/* Style Selector */}
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
                        onChange={(e) => setSize(e.target.value as MaterialButtonSize)}
                        className="select select-bordered"
                    >
                        {Object.values(MaterialButtonSize).map((sizeOption) => (
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
                        onChange={(e) => setColor(e.target.value as MaterialButtonColor)}
                        className="select select-bordered"
                    >
                        {Object.values(MaterialButtonColor).map((colorOption) => (
                            <option key={colorOption} value={colorOption}>
                                {colorOption}
                            </option>
                        ))}
                    </select>
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

            {/* Render the Button */}
            <div className="mt-4">
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