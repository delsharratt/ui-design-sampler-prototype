'use client';

import React, { useState } from 'react';
import { DaisyButtonModifier, DaisyButtonProps, DaisyButtonVariant } from './types';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyButton from '.';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import { FormField } from '@/components/shared/form/useFormMap';

export default function DaisyButtonWrapperRenderer({ }: DaisyButtonProps) {
    const [size, setSize] = useState<DaisyElementSize>(DaisyElementSize.Medium);
    const [color, setColor] = useState<DaisyElementColor>(DaisyElementColor.Primary);
    const [variant, setVariant] = useState<DaisyButtonVariant>(DaisyButtonVariant.Outline);
    const [modifier, setModifier] = useState<DaisyButtonModifier>(DaisyButtonModifier.Block);

    const [icon, setIcon] = useState(false);
    const [iconOnly, setIconOnly] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const DropdownFields: FormField[] = [
        {
            type: 'dropdown',
            label: 'Size',
            value: size,
            options: Object.values(DaisyElementSize),
            onChange: (e) => setSize(e.target.value as DaisyElementSize)
        },
        {
            type: 'dropdown',
            label: 'Color',
            value: color,
            options: Object.values(DaisyElementColor),
            onChange: (e) => setColor(e.target.value as DaisyElementColor)
        },
        {
            type: 'dropdown',
            label: 'Variant',
            value: variant,
            options: Object.values(DaisyButtonVariant),
            onChange: (e) => setVariant(e.target.value as DaisyButtonVariant)
        },
        {
            type: 'dropdown',
            label: 'Modifier',
            value: modifier,
            options: Object.values(DaisyButtonModifier),
            onChange: (e) => setModifier(e.target.value as DaisyButtonModifier)
        },
    ];

    const ToggleFields: FormField[] = [
        {
            type: 'toggle',
            label: 'Icon',
            value: icon,
            onChange: (e) => setIcon(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Icon Only',
            value: iconOnly,
            onChange: (e) => setIconOnly(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Disabled',
            value: disabled,
            onChange: (e) => setDisabled(e.target.checked)
        },
    ];

    return (
        <>
            <div className="flex flex-row gap-4 w-full border-b border-neutral-400 pb-10">
                <FormColumnPanel size="2/3" fields={DropdownFields} />
                <FormColumnPanel size="1/3" fields={ToggleFields} />
            </div>

            {/* Render the Button */}
            <div className="flex justify-around mt-8 w-full">
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
        </>
    );
}