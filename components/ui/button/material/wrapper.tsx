'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { MaterialComponentSize } from '@/core/constants/material';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import MaterialButton, {
  MaterialButtonColor,
  MaterialButtonProps,
  MaterialButtonVariant
} from './index';

export default function MaterialButtonWrapperRenderer({}: MaterialButtonProps) {
  const [size, setSize] = useState<MaterialComponentSize>(MaterialComponentSize.Medium);
  const [color, setColor] = useState<MaterialButtonColor>(MaterialButtonColor.Primary);
  const [variant, setVariant] = useState<MaterialButtonVariant>(MaterialButtonVariant.Contained);
  const [disabled, setDisabled] = useState(false);

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
      options: Object.values(MaterialButtonColor),
      onChange: (e) => setColor(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Variant',
      value: variant,
      options: Object.values(MaterialButtonVariant),
      onChange: (e) => setVariant(e.target.value)
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Disabled',
      value: disabled,
      onChange: (e) => setDisabled(e.target.checked)
    }
  ];

  return (
    <>
      <FormWrapper>
        <FormColumnPanel size="2/3" fields={DropdownFields} />
        <FormColumnPanel size="1/3" fields={ToggleFields} />
      </FormWrapper>

      {/* Render the Button */}
      <div className="flex justify-around mt-8 w-full">
        <MaterialButton
          label="Preview Button"
          library={LIBRARY_IDS.MATERIAL}
          variant={variant}
          size={size}
          color={color}
          disabled={disabled}
        />
      </div>
    </>
  );
}
