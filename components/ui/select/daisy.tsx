import clsx from 'clsx';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';

import { SelectProps } from './componentRegistry';

/*
 * See documentation @link https://daisyui.com/components/select/
 * All class names include a hyphenated "select" prefix
 */

export enum DaisySelectVariant {
  Ghost = 'ghost' // Only one style available
}

export interface DaisySelectProps extends SelectProps {
  size?: DaisyElementSize;
  color?: DaisyElementColor;
  variant?: DaisySelectVariant;
  fieldset?: boolean;
  hasLabel?: boolean;
  disabled?: boolean;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const daisySelectFields: FormFieldConfig[] = [
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
    type: 'dropdown',
    label: 'Variant',
    prop: 'alignment',
    options: Object.values(DaisySelectVariant),
    default: undefined
  },
  {
    type: 'toggle',
    label: 'Fieldset',
    prop: 'fieldset',
    default: false
  },
  {
    type: 'toggle',
    label: 'Labels',
    prop: 'hasLabel',
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
export default function DaisySelect({
  label,
  value,
  size = DaisyElementSize.Medium,
  color = DaisyElementColor.Primary,
  variant = DaisySelectVariant.Ghost,
  // fieldset = false,
  // hasLabel = false,
  // disabled = false,
  ...rest
}: React.HTMLAttributes<HTMLElement> & DaisySelectProps) {
  const selectStyles = clsx(
    'select',
    [
      // Styled based on props
      size && `select-${size}`,
      color && `select-${color}`,
      variant && `select-${variant}`
    ],
    rest.className, // Allow additional classes to be passed in
    'capitalize'
  );

  return (
    <>
      {/* TODO: set both value and default value */}
      <select defaultValue={value} className={selectStyles}>
        <option disabled={true}>{label}</option>
        {/* TODO: decide on rendering options from array data */}
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>

      {/* Hidden selects to get around Tailwind buildtime class names limitation */}
      <div className="hidden">
        <button className="select select-primary select-xs">Primary | Extra Small</button>
        <button className="select select-secondary select-sm">Secondary | Small</button>
        <button className="select select-accent select-md">Accent | Medium</button>
        <button className="select select-info select-lg">Info | Large</button>
        <button className="select select-ghost select-success select-xl">
          Ghost | Success | Extra Large
        </button>
      </div>
    </>
  );
}
