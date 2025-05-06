'use client';

import React, { useState } from 'react';
import ButtonRenderer, { RenderProps } from '../index';
import { ElementColor } from '@/core/constants/daisy';
import { DaisyButtonSize, DaisyButtonVariant } from '../daisy/types';

export default function ButtonCustomizationWrapper({ library }: RenderProps) {
    const [variant, setVariant] = useState<DaisyButtonVariant>(DaisyButtonVariant.Outline);
    const [size, setSize] = useState<DaisyButtonSize>(DaisyButtonSize.Medium);
    const [color, setColor] = useState<ElementColor>(ElementColor.Primary);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="flex flex-col gap-4 text-start">
            <div className="flex flex-col gap-2">
                {/* Style Selector */}
                <label>
                    <span className="mr-2">Style:</span>
                    <select
                        value={variant}
                        onChange={(e) => setVariant(e.target.value as DaisyButtonVariant)}
                        className="select select-bordered"
                    >
                        {Object.values(DaisyButtonVariant).map((variantOption) => (
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
                        onChange={(e) => setSize(e.target.value as DaisyButtonSize)}
                        className="select select-bordered"
                    >
                        {Object.values(DaisyButtonSize).map((sizeOption) => (
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
                        onChange={(e) => setColor(e.target.value as ElementColor)}
                        className="select select-bordered"
                    >
                        {Object.values(ElementColor).map((colorOption) => (
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
                <ButtonRenderer
                    label="Preview Button"
                    library={library}
                    variant={variant}
                    size={size}
                    color={color}
                    disabled={disabled}
                />
            </div>
        </div>
    );
}