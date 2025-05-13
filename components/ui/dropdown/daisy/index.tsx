/* 
See documentation @link https://daisyui.com/components/dropdown/
All class names include a hyphenated "dropdown" prefix
*/

import clsx from 'clsx';
import { DropdownProps } from '..';

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
        className='btn'
        popoverTarget='sample-dropdown'
        style={{ ['anchorName']: '--dropdown-anchor' } as React.CSSProperties}
      >
        {label}
      </button>

      <ul
        className={dropdownStyles}
        popover='auto'
        id='sample-dropdown'
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
    </>
  );
}
