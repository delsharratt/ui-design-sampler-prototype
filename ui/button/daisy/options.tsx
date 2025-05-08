'use client';

import React from 'react';
import { ElementColor } from '@/core/constants/daisy';
import { DaisyButtonSize, DaisyButtonVariant } from '../daisy/types';

export default function DaisyButtonOptions({
    variant,
    size,
    color,
    onVariantChange,
    onSizeChange,
    onColorChange,
}: {
    variant: DaisyButtonVariant;
    size: DaisyButtonSize;
    color: ElementColor;
    onVariantChange: (value: DaisyButtonVariant) => void;
    onSizeChange: (value: DaisyButtonSize) => void;
    onColorChange: (value: ElementColor) => void;
}) {
    return (
        <>
            {/* Style Selector */}
            <label>
                <span className="mr-2">Style:</span>
                <select
                    value={variant}
                    onChange={(e) => onVariantChange(e.target.value as DaisyButtonVariant)}
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
                    onChange={(e) => onSizeChange(e.target.value as DaisyButtonSize)}
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
                    onChange={(e) => onColorChange(e.target.value as ElementColor)}
                    className="select select-bordered"
                >
                    {Object.values(ElementColor).map((colorOption) => (
                        <option key={colorOption} value={colorOption}>
                            {colorOption}
                        </option>
                    ))}
                </select>
            </label>
        </>
    );
}