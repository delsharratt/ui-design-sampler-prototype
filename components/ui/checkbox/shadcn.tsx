'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from 'lucide-react';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { cn } from '@/lib/utils';

import { CheckboxProps } from '.';

/*
 * See documentation https://ui.shadcn.com/docs/components/checkbox
 * Radix Primitive https://www.radix-ui.com/primitives/docs/components/checkbox
 */

export type ShadcnCheckboxProps = CheckboxProps &
  CheckboxPrimitive.CheckboxProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    required?: boolean;
    name?: string;
  };

/*
 * ---- FORM CONFIGURATION ----
 */
export const shadcnCheckboxFields: FormFieldConfig[] = [
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

export default function ShadcnCheckbox({ className, ...props }: ShadcnCheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      checked={props.indeterminate ? 'indeterminate' : props.checked}
      disabled={props.disabled}
      required={props.required}
      name={props.name}
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        {props.indeterminate ? (
          <MinusIcon className="size-3.5" />
        ) : (
          <CheckIcon className="size-3.5" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
