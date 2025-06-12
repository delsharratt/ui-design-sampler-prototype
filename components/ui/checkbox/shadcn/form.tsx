'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import ShadcnCheckbox, { ShadcnCheckboxProps } from '.';

export default function ShadcnCheckboxForm({}: ShadcnCheckboxProps) {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const DropdownFields: FormField[] = [];
  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Checked',
      value: checked,
      onChange: (e) => setChecked(e.target.checked)
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
        <ShadcnCheckbox
          library={LIBRARY_IDS.SHADCN}
          checked={checked}
          disabled={disabled}
          onChange={(e) => setChecked((e.target as HTMLInputElement).checked)}
        />
      </div>
    </>
  );
}
