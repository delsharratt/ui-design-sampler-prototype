'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';

import { CheckboxProps } from '.';

/*
 *  ---- DAISY UI CHECKBOXES ----
 *  See documentation https://daisyui.com/components/checkbox/
 *  All class names include a hyphenated "checkbox" prefix
 */

export interface DaisyCheckboxProps extends CheckboxProps {
  elementSize?: DaisyElementSize; // Attribute is named `elementSize` to avoid conflict with native HTML input attribute
  color?: DaisyElementColor;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const daisyCheckboxFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Size',
    prop: 'size',
    options: Object.values(DaisyElementSize),
    default: DaisyElementSize.Medium
  },
  {
    type: 'dropdown',
    label: 'Color',
    prop: 'color',
    options: Object.values(DaisyElementColor),
    default: DaisyElementColor.Primary
  },
  {
    type: 'toggle',
    label: 'Checked',
    prop: 'checked',
    default: false
  },
  {
    type: 'toggle',
    label: 'Indeterminate',
    prop: 'indeterminate',
    default: false
  },
  {
    type: 'toggle',
    label: 'Disabled',
    prop: 'disabled',
    default: false
  }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function DaisyCheckbox({
  checked = false,
  elementSize = DaisyElementSize.Medium,
  color = DaisyElementColor.Primary,
  disabled = false,
  indeterminate = false,
  onChange = () => {},
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & DaisyCheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const checkboxStyles = clsx(
    'checkbox',
    [
      // Styled based on props
      elementSize && `checkbox-${elementSize}`,
      color && `checkbox-${color}`
    ],
    rest.className // Allow additional classes to be passed in
  );

  return (
    <>
      <input
        onChange={(e) => {
          onChange(e);
          if (checkboxRef.current) {
            checkboxRef.current.indeterminate = false; // Reset indeterminate state on change
          }
        }}
        ref={checkboxRef}
        type="checkbox"
        checked={checked}
        className={checkboxStyles}
        disabled={disabled}
        {...rest}
      />

      {/* Hidden checkboxes to get around Tailwind buildtime class names limitation */}
      <div className="hidden">
        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-neutral" />

        <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-error" />

        <input type="checkbox" defaultChecked className="checkbox checkbox-xs" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-md" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-lg" />
        <input type="checkbox" defaultChecked className="checkbox checkbox-xl" />
      </div>
    </>
  );
}
