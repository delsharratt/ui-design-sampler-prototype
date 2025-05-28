'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import ShadcnSelect, {
  ShadcnSelectAlign,
  ShadcnSelectPosition,
  ShadcnSelectProps,
  ShadcnSelectSide
} from '.';

export default function ShadcnSelectForm({}: ShadcnSelectProps) {
  const [side, setSide] = useState<ShadcnSelectSide>(ShadcnSelectSide.Bottom);
  const [align, setAlign] = useState<ShadcnSelectAlign>(ShadcnSelectAlign.Start);
  const [position, setPosition] = useState<ShadcnSelectPosition>(ShadcnSelectPosition.Popper);

  const [scrollable, setScrollable] = useState(false);
  const [open, setOpen] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [separator, setSeparator] = useState(false);

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Side',
      value: side,
      options: Object.values(ShadcnSelectSide),
      onChange: (e) => setSide(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Align',
      value: align,
      options: Object.values(ShadcnSelectAlign),
      onChange: (e) => setAlign(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Position',
      value: position,
      options: Object.values(ShadcnSelectPosition),
      onChange: (e) => setPosition(e.target.value)
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Scrollable',
      value: scrollable,
      onChange: (e) => setScrollable(e.target.checked)
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
      label: 'Required',
      value: required,
      onChange: (e) => setRequired(e.target.checked)
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

      {/* Render the Select */}
      <div className="flex justify-around mt-8 w-full">
        <ShadcnSelect
          library={LIBRARY_IDS.SHADCN}
          scrollable={scrollable}
          open={open}
          defaultOpen={defaultOpen}
          disabled={disabled}
          side={side}
          align={align}
          position={position}
          required={required}
          separator={separator}
        />
      </div>
    </>
  );
}
