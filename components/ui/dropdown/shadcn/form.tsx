'use client';

import { SelectProps } from '@radix-ui/react-select';
import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { ShadcnDropdown, ShadcnDropdownAlignment, ShadcnDropdownSide } from '.';

export default function ShadcnDropdownForm({}: SelectProps) {
  const [side, setSide] = useState<ShadcnDropdownSide>(ShadcnDropdownSide.Bottom);
  const [align, setAlign] = useState<ShadcnDropdownAlignment>(ShadcnDropdownAlignment.Start);

  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [separator, setSeparator] = useState(false);

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Side',
      value: side,
      options: Object.values(ShadcnDropdownSide),
      onChange: (e) => setSide(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Alignment',
      value: align,
      options: Object.values(ShadcnDropdownAlignment),
      onChange: (e) => setAlign(e.target.value)
    }
  ];
  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Modal',
      value: modal,
      onChange: (e) => setModal(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Open',
      value: open,
      onChange: (e) => setOpen(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Default Open',
      value: defaultOpen,
      onChange: (e) => setDefaultOpen(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Disabled',
      value: disabled,
      onChange: (e) => setDisabled(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Separator',
      value: separator,
      onChange: (e) => setSeparator(e.target.checked)
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
        <ShadcnDropdown
          library={LIBRARY_IDS.SHADCN}
          modal={modal}
          open={open}
          defaultOpen={defaultOpen}
          side={side}
          align={align}
          disabled={disabled}
        />
      </div>
    </>
  );
}
