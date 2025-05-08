'use client';

import React from 'react';
import { ElementColor } from '@/core/constants/daisy';
import { DaisyToggleSize } from './types';

export default function DaisyToggleOptions({
    size,
    color,
    onSizeChange,
    onColorChange,
}: {
    size: DaisyToggleSize;
    color: ElementColor;
    onSizeChange: (value: DaisyToggleSize) => void;
    onColorChange: (value: ElementColor) => void;
}) {
    return (
        <>
            {/* Size Selector */}
            <label>
                <span className="mr-2">Size:</span>
                <select
                    value={size}
                    onChange={(e) => onSizeChange(e.target.value as DaisyToggleSize)}
                    className="select select-bordered"
                >
                    {Object.values(DaisyToggleSize).map((sizeOption) => (
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