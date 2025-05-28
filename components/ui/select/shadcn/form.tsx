'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';

import ShadcnSelect, {
  ShadcnSelectAlign,
  ShadcnSelectDirection,
  ShadcnSelectPosition,
  ShadcnSelectProps,
  ShadcnSelectSide,
  ShadcnSelectSticky
} from '.';

export default function ShadcnSelectForm({}: ShadcnSelectProps) {
  const [direction, setDirection] = useState<ShadcnSelectDirection>(
    ShadcnSelectDirection.LeftToRight
  );
  const [side, setSide] = useState<ShadcnSelectSide>(ShadcnSelectSide.Bottom);
  const [align, setAlign] = useState<ShadcnSelectAlign>(ShadcnSelectAlign.Start);
  const [position, setPosition] = useState<ShadcnSelectPosition>(ShadcnSelectPosition.Popper);
  const [sticky, setSticky] = useState<ShadcnSelectSticky>(ShadcnSelectSticky.Partial);

  const [scrollable, setScrollable] = useState(false);
  const [open, setOpen] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [separator, setSeparator] = useState(false);

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Direction',
      value: direction,
      options: Object.values(ShadcnSelectDirection),
      onChange: (e) => setDirection(e.target.value)
    },
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
    },
    {
      type: 'dropdown',
      label: 'Sticky',
      value: sticky,
      options: Object.values(ShadcnSelectSticky),
      onChange: (e) => setSticky(e.target.value)
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
          scrollable={scrollable}
          direction={direction}
          open={open}
          defaultOpen={defaultOpen}
          disabled={disabled}
          side={side}
          align={align}
          position={position}
          sticky={sticky}
          required={required}
          separator={separator}
        />
      </div>
    </>
  );
}
