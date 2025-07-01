import clsx from 'clsx';

import { FormFieldConfig } from '@/components/shared/form/FormField';

import { DropdownProps } from './componentRegistry';

/* 
See documentation @link https://daisyui.com/components/dropdown/
All class names include a hyphenated "dropdown" prefix
*/

export enum DaisyDropdownAlignment {
  Start = 'start',
  Center = 'center',
  End = 'end'
}

export enum DaisyDropdownDirection {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right'
}

export enum DaisyDropdownModifier {
  Hover = 'hover',
  Open = 'open' // force open
}

export interface DaisyDropdownProps extends DropdownProps {
  alignment?: DaisyDropdownAlignment;
  direction?: DaisyDropdownDirection;
  modifier?: DaisyDropdownModifier | null;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const daisyDropdownFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Variant',
    prop: 'alignment',
    options: Object.values(DaisyDropdownAlignment),
    default: DaisyDropdownAlignment.Start
  },
  {
    type: 'dropdown',
    label: 'Direction',
    prop: 'direction',
    options: Object.values(DaisyDropdownDirection),
    default: DaisyDropdownDirection.Top
  },
  {
    type: 'dropdown',
    label: 'Modifier',
    prop: 'modifier',
    options: Object.values(DaisyDropdownModifier),
    default: undefined
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
export default function DaisyDropdown({
  label,
  alignment = DaisyDropdownAlignment.Start,
  direction = DaisyDropdownDirection.Bottom,
  modifier = null
}: React.HTMLAttributes<HTMLElement> & DaisyDropdownProps) {
  const dropdownStyles = clsx(
    'dropdown',
    [
      // Styled based on props
      alignment && `dropdown-${alignment}`,
      direction && `dropdown-${direction}`,
      modifier && `dropdown-${modifier}`
    ],
    'menu w-52 rounded-box bg-base-100 shadow-sm'
  );

  return (
    <>
      {/* NOTE: Anchor Positioning is a new standard but isn't yet supported in Firefox and Safari */}
      {/* Use unique names for each dropdown (values must match between button and ul) */}
      {/* For TSX uncomment the commented types below */}
      <button
        className="btn"
        popoverTarget="sample-dropdown"
        style={{ ['anchorName']: '--dropdown-anchor' } as React.CSSProperties}
      >
        {label}
      </button>

      <ul
        className={dropdownStyles}
        popover="auto"
        id="sample-dropdown"
        style={{ ['positionAnchor']: '--dropdown-anchor' } as React.CSSProperties}
      >
        <li>
          <a>DaisyUI</a>
        </li>
        <li>
          <a>ShadCN</a>
        </li>
        <li>
          <a>OnceUI</a>
        </li>
        <li>
          <a>MaterialUI</a>
        </li>
        <li>
          <a>Tailwind</a>
        </li>
      </ul>

      {/* Hidden buttons to get around Tailwind buildtime class names limitation */}
      <div className="hidden">
        <button className="btn btn-soft btn-primary btn-xs">Soft | Primary | Extra Small</button>
        <button className="btn btn-outline btn-secondary btn-sm">
          Outline | Secondary | Small
        </button>
        <button className="btn btn-dash btn-accent btn-md">Dash | Accent | Medium</button>
        <button className="btn btn-active btn-info btn-lg">Active | Info | Large</button>
        <button className="btn btn-ghost btn-success btn-xl">Ghost | Success | Extra Large</button>
        <button className="btn btn-link btn-warning btn-square">Link | Warning | Square</button>
        <button className="btn btn-widen btn-error btn-circle">Wide | Error | Circle</button>
      </div>
    </>
  );
}
