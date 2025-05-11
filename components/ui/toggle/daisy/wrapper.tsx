'use client';

import React, { useState } from 'react';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { DaisyToggleProps } from './types';
import DaisyToggle from '.';
import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';

export default function DaisyToggleWrapperRenderer({ }: DaisyToggleProps) {
    const [size, setSize] = useState<DaisyElementSize>(DaisyElementSize.Medium);
    const [color, setColor] = useState<DaisyElementColor>(DaisyElementColor.Primary);

    const [simple, setSimple] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const DropdownFields: FormField[] = [
        {
            type: 'dropdown',
            label: 'Size',
            value: size,
            options: Object.values(DaisyElementSize),
            onChange: (e) => setSize(e.target.value)
        },
        {
            type: 'dropdown',
            label: 'Color',
            value: color,
            options: Object.values(DaisyElementColor),
            onChange: (e) => setColor(e.target.value)
        },
    ];

    const ToggleFields: FormField[] = [
        {
            type: 'toggle',
            label: 'Simple Toggle',
            value: simple,
            onChange: (e) => setSimple(e.target.checked)
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
                <DaisyToggle
                    label={"Preview Toggle"}
                    library={LIBRARY_IDS.DAISY}
                    size={size}
                    color={color}
                    simple={simple}
                    disabled={disabled}
                />
            </div>

            {/* Hidden toggles to get around Tailwind buildtime class name limitation */}
            <div className="hidden">
                <button className="toggle toggle-primary toggle-xs">Primary | Extra Small</button>
                <button className="toggle toggle-secondary toggle-sm">Secondary | Small</button>
                <button className="toggle toggle-accent toggle-md">Accent | Medium</button>
                <button className="toggle toggle-info toggle-lg">Info | Large</button>
                <button className="toggle toggle-success toggle-xl">Success | Extra Large</button>
                <button className="toggle toggle-warning">Warning</button>
                <button className="toggle toggle-error">Error</button>
            </div>
        </>
    );
}