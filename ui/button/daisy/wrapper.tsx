'use client';

import React, { useState } from 'react';
import ButtonRenderer from '../index';
import { DaisyButtonModifier, DaisyButtonProps, DaisyButtonSize, DaisyButtonVariant } from '../daisy/types';
import { ElementColor } from '@/core/constants/daisy';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyButton from '.';

export default function DaisyButtonCustomizationWrapper({ }: DaisyButtonProps) {
    const [variant, setVariant] = useState<DaisyButtonVariant>(DaisyButtonVariant.Outline);
    const [size, setSize] = useState<DaisyButtonSize>(DaisyButtonSize.Medium);
    const [color, setColor] = useState<ElementColor>(ElementColor.Primary);
    const [modifier, setModifier] = useState<DaisyButtonModifier>();

    const [icon, setIcon] = useState(false);
    const [iconOnly, setIconOnly] = useState(false);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="flex flex-col gap-4 text-start w-full">
            <div className="flex flex-row gap-4 w-full">

                {/* Column for Dropdown Styles */}
                <div className="flex flex-col basis-2/3 gap-4">

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

                    {/* Modifier Selector */}
                    <label>
                        <span className="mr-2">Modifier:</span>
                        <select
                            value={modifier}
                            onChange={(e) => setModifier(e.target.value as DaisyButtonModifier)}
                            className="select select-bordered"
                        >
                            {Object.values(DaisyButtonModifier).map((modifierOption) => (
                                <option key={modifierOption} value={modifierOption}>
                                    {modifierOption}
                                </option>
                            ))}
                        </select>
                    </label>

                </div>

                {/* Column for Checbox Styles */}
                <div className="flex flex-col basis-1/3 gap-4">

                    {/* With Icon */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={icon}
                            onChange={(e) => setIcon(e.target.checked)}
                            className="checkbox mr-2"
                        />
                        <span>With Icon</span>
                    </label>

                    {/* Icon Only */}
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={iconOnly}
                            onChange={(e) => {
                                setIconOnly(e.target.checked)
                                setIcon(e.target.checked ? true : false); // Ensure icon is checked if iconOnly is checked
                            }}
                            className="checkbox mr-2"
                        />
                        <span>Icon Only</span>
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
                <DaisyButton
                    label={disabled ? "Loading" : "Preview Button"}
                    library={LIBRARY_IDS.DAISY}
                    variant={variant}
                    size={size}
                    color={color}
                    modifier={modifier}
                    icon={icon}
                    iconOnly={iconOnly}
                    disabled={disabled}
                />
            </div>

            {/* Hidden buttons to get around Tailwind buildtime class names limitation */}
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