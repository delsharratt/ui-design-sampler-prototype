'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { MaterialComponentSize } from '@/core/constants/material';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { MaterialToggleColor, MaterialToggleOrientation, MaterialToggleProps } from '.';
import MaterialToggle from './index';

export default function MaterialToggleWrapperRenderer({}: MaterialToggleProps) {
  const [size, setSize] = useState<MaterialComponentSize>(MaterialComponentSize.Medium);
  const [color, setColor] = useState<MaterialToggleColor>(MaterialToggleColor.Primary);
  const [orientation, setOrientation] = useState<MaterialToggleOrientation>(
    MaterialToggleOrientation.Horizontal
  );

  const [isExclusive, setIsExclusive] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disableRipple, setDisableRipple] = useState(false);
  const [disableFocusRipple, setDisableFocusRipple] = useState(false);

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
      options: Object.values(MaterialToggleColor),
      onChange: (e) => setColor(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Orientation',
      value: orientation,
      options: Object.values(MaterialToggleOrientation),
      onChange: (e) => setOrientation(e.target.value)
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Exclusive',
      value: isExclusive,
      onChange: (e) => setIsExclusive(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Full Width',
      value: fullWidth,
      onChange: (e) => setFullWidth(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Disabled',
      value: disabled,
      onChange: (e) => setDisabled(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Disable Ripple',
      value: disableRipple, // TODO: looks into implementing Info icon with explanation
      onChange: (e) => setDisableRipple(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Disable Focus Ripple',
      value: disableFocusRipple, // TODO: look into implementing Info icon with explanation
      onChange: (e) => setDisableFocusRipple(e.target.checked)
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
        <MaterialToggle
          label="Preview Toggle"
          library={LIBRARY_IDS.MATERIAL}
          size={size}
          color={color}
          orientation={orientation}
          isExclusive={isExclusive}
          fullWidth={fullWidth}
          disabled={disabled}
          disableRipple={disableRipple}
          disableFocusRipple={disableFocusRipple}
        />
      </div>
    </>
  );
}
