'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';

import ShadcnCheckbox, { ShadcnCheckboxProps } from '.';

export default function ShadcnCheckboxForm({}: ShadcnCheckboxProps) {
  const [checked, setChecked] = useState(false);
  const [defaultChecked, setDefaultChecked] = useState(false);
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
      label: 'Default Checked',
      value: defaultChecked,
      onChange: (e) => setDefaultChecked(e.target.checked)
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
        <ShadcnCheckbox checked={checked} defaultChecked={defaultChecked} disabled={disabled} />
      </div>
    </>
  );
}
