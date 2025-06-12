'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { DaisyCheckboxProps } from '.';
import DaisyCheckbox from '.';

export default function DaisyCheckboxForm({}: DaisyCheckboxProps) {
  const [size, setSize] = useState<DaisyElementSize>(DaisyElementSize.Medium);
  const [color, setColor] = useState<DaisyElementColor>(DaisyElementColor.Primary);

  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
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
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Checked',
      value: checked,
      onChange: (e) => setChecked(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Indeterminate',
      value: indeterminate,
      onChange: (e) => setIndeterminate(e.target.checked)
    },
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

      {/* Render the Checkbox */}
      <div className="flex justify-around mt-8 w-full">
        <DaisyCheckbox
          label={disabled ? 'Loading' : 'Preview Button'}
          library={LIBRARY_IDS.DAISY}
          elementSize={size}
          color={color}
          checked={checked}
          indeterminate={indeterminate}
          disabled={disabled}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </>
  );
}
