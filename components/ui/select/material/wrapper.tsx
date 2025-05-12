'use client';

import React, { useState } from 'react';
import { MaterialSelectProps, MaterialSelectVariant } from './types';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import { FormField } from '@/components/shared/form/useFormMap';
import MaterialSelect from './index';
import FormWrapper from '@/components/shared/layout/FormWrapper';

export default function MaterialSelectWrapperRenderer({ }: MaterialSelectProps) {
    const [size, setSize] = useState<MaterialComponentSize>(MaterialComponentSize.Medium);
    const [color, setColor] = useState<MaterialComponentColor>(MaterialComponentColor.Primary);
    const [variant, setVariant] = useState<MaterialSelectVariant>(MaterialSelectVariant.Outlined);
    // TODO: implement support for dynamic icons (map from array)
    // const [icon, setIcon] = useState<MaterialIconComponent>();

    const [multiple, setMultiple] = useState(false);
    const [autoWidth, setAutoWidth] = useState(false);
    const [disableRipple, setDisableRipple] = useState(false);
    const [disableFocusRipple, setDisableFocusRipple] = useState(false);
    const [defaultOption, setDefaultOption] = useState(false);
    const [defaultOpen, setDefaultOpen] = useState(false);
    const [displayEmpty, setDisplayEmpty] = useState(false);

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
            options: Object.values(MaterialSelectVariant),
            onChange: (e) => setVariant(e.target.value)
        },
        // {
        //     type: 'dropdown',
        //     label: 'Icon',
        //     value: icon,
        //     options: Object.values(),
        //     onChange: (e) => setIcon(e.target.value)
        // },
    ];

    const ToggleFields: FormField[] = [
        {
            type: 'toggle',
            label: 'Multiple',
            value: multiple,
            onChange: (e) => setMultiple(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Auto Width',
            value: autoWidth,
            onChange: (e) => setAutoWidth(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Disable Ripple',
            value: disableRipple,
            onChange: (e) => setDisableRipple(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Disable Focus Ripple',
            value: disableFocusRipple,
            onChange: (e) => setDisableFocusRipple(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Default Option',
            value: defaultOption,
            onChange: (e) => setDefaultOption(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Default Open',
            value: defaultOpen,
            onChange: (e) => setDefaultOpen(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Display Empty',
            value: displayEmpty,
            onChange: (e) => setDisplayEmpty(e.target.checked)
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
                <MaterialSelect
                    label="Preview Select"
                    library={LIBRARY_IDS.MATERIAL}
                    size={size}
                    color={color}
                    variant={variant}
                    // icon={icon}
                    multiple={multiple}
                    autoWidth={autoWidth}
                    disableRipple={disableRipple}
                    defaultOption={defaultOption}
                    defaultOpen={defaultOpen}
                    displayEmpty={displayEmpty}
                />
            </div>
        </>
    );
}