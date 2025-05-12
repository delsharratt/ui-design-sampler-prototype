'use client';

import React, { useState } from 'react';
import { MaterialDropdownProps, MaterialDropdownVariant } from './types';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import { FormField } from '@/components/shared/form/useFormMap';
import MaterialDropdown from './index';
import FormWrapper from '@/components/shared/layout/FormWrapper';

export default function MaterialDropdownWrapperRenderer({ }: MaterialDropdownProps) {
    const [size, setSize] = useState<MaterialComponentSize>(MaterialComponentSize.Medium);
    const [color, setColor] = useState<MaterialComponentColor>(MaterialComponentColor.Primary);
    const [variant, setVariant] = useState<MaterialDropdownVariant>(MaterialDropdownVariant.Menu);

    // const [multiple, setMultiple] = useState(false);

    const DropdownFields: FormField[] = [
        {
            type: 'dropdown',
            label: 'Size',
            value: size,
            options: Object.values(MaterialComponentSize),
            onChange: (e) => setSize(e.target.value)
        },
        {
            type: 'dropdown',
            label: 'Color',
            value: color,
            options: Object.values(MaterialComponentColor),
            onChange: (e) => setColor(e.target.value)
        },
        {
            type: 'dropdown',
            label: 'Variant',
            value: variant,
            options: Object.values(MaterialDropdownVariant),
            onChange: (e) => setVariant(e.target.value)
        },
    ];

    const ToggleFields: FormField[] = [
        // {
        //     type: 'toggle',
        //     label: 'Multiple',
        //     value: multiple,
        //     onChange: (e) => setMultiple(e.target.checked)
        // },
    ];

    return (
        <>
            <FormWrapper>
                <FormColumnPanel size="2/3" fields={DropdownFields} />
                <FormColumnPanel size="1/3" fields={ToggleFields} />
            </FormWrapper>

            {/* Render the Button */}
            <div className="flex justify-around mt-8 w-full">
                <MaterialDropdown
                    label="Preview Dropdown"
                    library={LIBRARY_IDS.MATERIAL}
                    size={size}
                    color={color}
                    variant={variant}
                />
            </div>
        </>
    );
}