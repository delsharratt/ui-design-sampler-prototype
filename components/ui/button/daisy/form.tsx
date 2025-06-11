'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { DaisyButtonModifier, DaisyButtonProps, DaisyButtonVariant } from '.';
import DaisyButton from '.';

export default function DaisyButtonForm({}: DaisyButtonProps) {
  const [size, setSize] = useState<DaisyElementSize>(DaisyElementSize.Medium);
  const [color, setColor] = useState<DaisyElementColor>(DaisyElementColor.Primary);
  const [variant, setVariant] = useState<DaisyButtonVariant>(DaisyButtonVariant.Outline);
  const [modifier, setModifier] = useState<DaisyButtonModifier>(DaisyButtonModifier.Block);

  const [icon, setIcon] = useState(false);
  const [iconOnly, setIconOnly] = useState(false);
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
    },
    {
      type: 'dropdown',
      label: 'Variant',
      value: variant,
      options: Object.values(DaisyButtonVariant),
      onChange: (e) => setVariant(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Modifier',
      value: modifier,
      options: Object.values(DaisyButtonModifier),
      onChange: (e) => setModifier(e.target.value)
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
      label: 'Icon Only',
      value: iconOnly,
      onChange: (e) => setIconOnly(e.target.checked)
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
        <DaisyButton
          label={disabled ? 'Loading' : 'Preview Button'}
          library={LIBRARY_IDS.DAISY}
          variant={variant}
          size={size}
          color={color}
          modifier={modifier}
          icon={icon}
          iconOnly={iconOnly}
          disabled={disabled}
        />
      </div>
    </>
  );
}
