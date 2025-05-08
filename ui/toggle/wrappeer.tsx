'use client';

import React, { useState } from 'react';
import ToggleRenderer, { RenderProps } from './index';
import { ElementColor } from '@/core/constants/daisy';
import { DaisyToggleSize } from './daisy/types';

export default function ToggleCustomizationWrapper({ library }: RenderProps) {
    const [color, setColor] = useState<ElementColor>(ElementColor.Primary);
    const [size, setSize] = useState(DaisyToggleSize.Medium); // Placeholder, will replace with ButtonSize when available
    const [disabled, setDisabled] = useState(false);
    const [simple, setSimple] = useState(false);

    return (
        <div className="flex flex-col gap-4 text-start">
            <div className="flex flex-col gap-2">

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

                {/* Size Selector */}
                <label>
                    <span className="mr-2">Size:</span>
                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value as DaisyToggleSize)}
                        className="select select-bordered capitalize"
                    >
                        {Object.values(DaisyToggleSize).map((sizeOption) => (
                            <option key={sizeOption} value={sizeOption}>
                                {sizeOption}
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

                {/* Simple Toggle */}
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        onChange={(e) => setSimple(e.target.checked)}
                        className="checkbox"
                    />
                    <span>With Fieldset and Label</span>
                </label>
            </div>

            {/* Render the Toggle */}
            <div className="mt-4">
                <ToggleRenderer
                    library={library}
                    color={color}
                    size={size}
                    disabled={disabled}
                    simple={simple}
                />
            </div>

        </div>
    );
}