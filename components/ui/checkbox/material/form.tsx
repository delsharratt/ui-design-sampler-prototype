'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import MaterialCheckbox, { MaterialCheckboxProps } from '.';

export default function MaterialCheckboxForm({}: MaterialCheckboxProps) {
  const [size, setSize] = useState<MaterialComponentSize>(MaterialComponentSize.Medium);
  const [color, setColor] = useState<MaterialComponentColor>(MaterialComponentColor.Primary);

  const [icon, setIcon] = useState(false);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
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
      options: Object.values(MaterialComponentColor),
      onChange: (e) => setColor(e.target.value)
    }
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

      {/* Render the Button */}
      <div className="flex justify-around mt-8 w-full">
        {/* TODO: IMPLEMENT PROPS AND CHILD PROP SUPPORT */}
        <MaterialCheckbox
          library={LIBRARY_IDS.MATERIAL}
          elementSize={size}
          color={color}
          checked={checked}
          disabled={disabled}
          indeterminate={indeterminate}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </>
  );
}
