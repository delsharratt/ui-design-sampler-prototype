'use client';

import React, { useState } from 'react';
import { DaisySelectProps, DaisySelectVariant } from '.';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import { FormField } from '@/components/shared/form/useFormMap';
import DaisySelect from '.';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import FormWrapper from '@/components/shared/layout/FormWrapper';

export default function DaisySelectWrapperRenderer({ }: DaisySelectProps) {
    const [size, setSize] = useState<DaisyElementSize>(DaisyElementSize.Medium);
    const [color, setColor] = useState<DaisyElementColor>(DaisyElementColor.Primary);
    const [variant, setVariant] = useState<DaisySelectVariant>();

    const [fieldset, setFieldset] = useState(false);
    const [hasLabel, setHasLabel] = useState(false);
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
        {
            type: 'dropdown',
            label: 'Variant',
            value: variant,
            options: Object.values(DaisySelectVariant),
            onChange: (e) => setVariant(e.target.value)
        },
    ];

    const ToggleFields: FormField[] = [
        {
            type: 'toggle',
            label: 'Disabled',
            value: fieldset,
            onChange: (e) => setFieldset(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Labels',
            value: hasLabel,
            onChange: (e) => setHasLabel(e.target.checked)
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
            <FormWrapper>
                <FormColumnPanel size="2/3" fields={DropdownFields} />
                <FormColumnPanel size="1/3" fields={ToggleFields} />
            </FormWrapper>

            {/* Render the Select */}
            <div className="flex justify-around mt-8 w-full">
                <DaisySelect
                    label="Sample Dropdown"
                    library={LIBRARY_IDS.DAISY}
                    size={size}
                    color={color}
                    variant={variant}
                    fieldset={fieldset}
                    hasLabel={hasLabel}
                    disabled={disabled}
                />
            </div>
        </>
    );
}