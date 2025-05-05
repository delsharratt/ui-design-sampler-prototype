'use client';

import React, { useState } from 'react';
import ButtonRenderer, { RenderProps } from '../index'; // Import the base button renderer
import { ButtonStyle, ButtonSize } from '../types';
import { ElementColor } from '@/core/constants/daisy';

export default function ButtonCustomizationWrapper({ library }: RenderProps) {
    const [style, setStyle] = useState<ButtonStyle>(ButtonStyle.Outline);
    const [size, setSize] = useState<ButtonSize>(ButtonSize.Medium);
    const [color, setColor] = useState<ElementColor>(ElementColor.Primary);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Button Customization</h2>
            <div className="flex flex-col gap-2">
                {/* Style Selector */}
                <label>
                    <span className="mr-2">Style:</span>
                    <select
                        value={style}
                        onChange={(e) => setStyle(e.target.value as ButtonStyle)}
                        className="select select-bordered"
                    >
                        {Object.values(ButtonStyle).map((styleOption) => (
                            <option key={styleOption} value={styleOption}>
                                {styleOption}
                            </option>
                        ))}
                    </select>
                </label>

                {/* Size Selector */}
                <label>
                    <span className="mr-2">Size:</span>
                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value as ButtonSize)}
                        className="select select-bordered"
                    >
                        {Object.values(ButtonSize).map((sizeOption) => (
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
                    style={style}
                    size={size}
                    color={color}
                    disabled={disabled}
                />
            </div>
        </div>
    );
}