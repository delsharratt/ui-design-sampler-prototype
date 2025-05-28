'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import ShadcnButton, { ShadcnButtonProps, ShadcnButtonSize, ShadcnButtonVariant } from '.';

export default function ShadcnButtonForm({}: ShadcnButtonProps) {
  const [variant, setVariant] = useState<ShadcnButtonVariant>(ShadcnButtonVariant.Default);
  const [size, setSize] = useState<ShadcnButtonSize>(ShadcnButtonSize.Default);

  const [icon, setIcon] = useState(false);
  const [iconOnly, setIconOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Variant',
      value: variant,
      options: Object.values(ShadcnButtonVariant),
      onChange: (e) => setVariant(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Size',
      value: size,
      options: Object.values(ShadcnButtonSize),
      onChange: (e) => {
        setSize(e.target.value);
        // Set icon and iconOnly based on size when size is Icon
        setIcon(e.target.value === ShadcnButtonSize.Icon);
        setIconOnly(e.target.value === ShadcnButtonSize.Icon);
      }
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
      onChange: (e) => {
        setIcon(e.target.checked);
        setIconOnly(e.target.checked);
        // Set size to Icon if iconOnly is checked
        // Otherwise, set it to Default
        setSize(e.target.checked ? ShadcnButtonSize.Icon : ShadcnButtonSize.Default);
      }
    },
    {
      type: 'toggle',
      label: 'Loading',
      value: loading,
      onChange: (e) => setLoading(e.target.checked)
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
        <ShadcnButton
          library={LIBRARY_IDS.SHADCN}
          variant={variant}
          size={size}
          icon={icon}
          iconOnly={iconOnly}
          loading={loading}
          disabled={disabled}
        />
      </div>
    </>
  );
}
