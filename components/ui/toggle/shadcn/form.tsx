'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/types';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';

import { ShadcnToggle, ShadcnToggleProps, ShadcnToggleSize, ShadcnToggleVariant } from '.';

export default function ShadcnToggleForm({}: ShadcnToggleProps) {
  const [variant, setVariant] = useState<ShadcnToggleVariant>(ShadcnToggleVariant.Default);
  const [size, setSize] = useState<ShadcnToggleSize>(ShadcnToggleSize.Default);

  const [pressed, setPressed] = useState(false);
  const [defaultPressed, setDefaultPressed] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Variant',
      value: variant,
      options: Object.values(ShadcnToggleVariant),
      onChange: (e) => setVariant(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Size',
      value: size,
      options: Object.values(ShadcnToggleSize),
      onChange: (e) => {
        setSize(e.target.value);
      }
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Pressed',
      value: pressed,
      onChange: (e) => setPressed(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Default Pressed',
      value: defaultPressed,
      onChange: (e) => setDefaultPressed(e.target.checked)
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

      {/* Render the Toggle */}
      <div className="flex justify-around mt-8 w-full">
        <ShadcnToggle
          variant={variant}
          size={size}
          pressed={pressed}
          defaultPressed={defaultPressed}
          disabled={disabled}
        />
      </div>
    </>
  );
}
