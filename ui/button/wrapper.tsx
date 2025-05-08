'use client';

import React, { useState } from 'react';
import ButtonRenderer, { RenderProps } from './index';
import { ElementColor } from '@/core/constants/daisy';
import { DaisyButtonSize, DaisyButtonVariant } from './daisy/types';
import { BUTTON_OPTIONS_REGISTRY } from './types';

export default function ButtonCustomizationWrapper({ library }: RenderProps) {
    const [variant, setVariant] = useState<DaisyButtonVariant>(DaisyButtonVariant.Outline);
    const [size, setSize] = useState<DaisyButtonSize>(DaisyButtonSize.Medium);
    const [color, setColor] = useState<ElementColor>(ElementColor.Primary);
    const [disabled, setDisabled] = useState(false);

    const ButtonOptions = BUTTON_OPTIONS_REGISTRY[library as keyof typeof BUTTON_OPTIONS_REGISTRY];

    return (
        <div className="flex flex-col gap-4 text-start">
            <div className="flex flex-col gap-2">

                {/* Custom Options by Library */}
                <ButtonOptions
                    variant={variant}
                    size={size}
                    color={color}
                    onVariantChange={setVariant}
                    onSizeChange={setSize}
                    onColorChange={setColor}
                ></ButtonOptions>

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