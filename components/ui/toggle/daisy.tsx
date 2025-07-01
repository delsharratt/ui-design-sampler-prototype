import clsx from 'clsx';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';

import { ToggleProps } from './componentRegistry';

/* 
See documentation https://daisyui.com/components/toggle/
All class names include a hyphenated "toggle" prefix
*/

export interface DaisyToggleProps extends ToggleProps {
  label?: string;
  size?: DaisyElementSize;
  color?: DaisyElementColor;
  disabled?: boolean;
  simple?: boolean;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const daisyToggleFields: FormFieldConfig[] = [
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
    label: 'Simple Toggle',
    prop: 'simple',
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
export default function DaisyToggle({
  label = COMPONENT_IDS.Toggle,
  color = DaisyElementColor.Primary,
  size = DaisyElementSize.Medium,
  simple = false,
  disabled = false
}: React.HTMLAttributes<HTMLElement> & DaisyToggleProps) {
  const toggleStyles = clsx(
    'toggle',
    [
      // Styled based on props
      color && `toggle-${color}`,
      size && `toggle-${size}`
    ],
    'capitalize'
  );

  const toggleElement = (
    <input type="checkbox" defaultChecked className={toggleStyles} disabled={disabled} />
  );

  return (
    <>
      {simple ? (
        toggleElement
      ) : (
        <fieldset className="fieldset bg-base-100 border-base-content rounded-box w-64 border p-4">
          <legend className="fieldset-legend capitalize">{label}</legend>
          <label className="label gap-4">
            {toggleElement}
            Remember me
          </label>
        </fieldset>
      )}

      {/* Hidden toggles to get around Tailwind buildtime class name limitation */}
      <div className="hidden">
        <button className="toggle toggle-primary toggle-xs">Primary | Extra Small</button>
        <button className="toggle toggle-secondary toggle-sm">Secondary | Small</button>
        <button className="toggle toggle-accent toggle-md">Accent | Medium</button>
        <button className="toggle toggle-info toggle-lg">Info | Large</button>
        <button className="toggle toggle-success toggle-xl">Success | Extra Large</button>
        <button className="toggle toggle-warning">Warning</button>
        <button className="toggle toggle-error">Error</button>
      </div>
    </>
  );
}
