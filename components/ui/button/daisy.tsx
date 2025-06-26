import clsx from 'clsx';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { DaisyElementColor, DaisyElementSize } from '@/core/constants/daisy';

import { ButtonProps } from '.';

/*
 *  ---- DAISY UI BUTTONS ----
 *  See documentation https://daisyui.com/components/button/
 *  All class names include a hyphenated "btn" prefix
 */

export enum DaisyButtonVariant {
  Outline = 'outline',
  Dash = 'dash',
  Soft = 'soft',
  Ghost = 'ghost',
  Link = 'link'
}

export enum DaisyButtonBehavior {
  Active = 'active',
  Disabled = 'disabled'
}

export enum DaisyButtonModifier {
  Wide = 'wide',
  Block = 'block', // full width
  Square = 'square',
  Circle = 'circle'
}

export interface DaisyButtonProps extends ButtonProps {
  size?: DaisyElementSize;
  color?: DaisyElementColor;
  variant?: DaisyButtonVariant;
  modifier?: DaisyButtonModifier | null;
  icon?: boolean;
  iconOnly?: boolean;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const daisyButtonFields: FormFieldConfig[] = [
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
    prop: 'variant',
    options: Object.values(DaisyButtonVariant),
    default: DaisyButtonVariant.Outline
  },
  {
    type: 'dropdown',
    label: 'Modifier',
    prop: 'modifier',
    options: Object.values(DaisyButtonModifier),
    default: DaisyButtonModifier.Block
  },
  {
    type: 'toggle',
    label: 'Icon',
    prop: 'icon',
    default: false
  },
  {
    type: 'toggle',
    label: 'Icon Only',
    prop: 'iconOnly',
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
export default function DaisyButton({
  label = 'Preview Button',
  size = DaisyElementSize.Medium,
  color = DaisyElementColor.Primary,
  variant = DaisyButtonVariant.Outline,
  modifier = null,
  icon = false,
  iconOnly = false,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & DaisyButtonProps) {
  const buttonStyles = clsx(
    'btn',
    [
      // Styled based on props
      variant && `btn-${variant}`,
      size && `btn-${size}`,
      color && `btn-${color}`,
      modifier && `btn-${modifier}`,
      rest.disabled && 'btn-disabled'
    ],
    rest.className, // Allow additional classes to be passed in
    'capitalize'
  );

  const sampleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      className="size-[1.2em]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );

  return (
    <>
      <button className={buttonStyles} {...rest}>
        {/* Show loading spinner if button is disabled */}
        {rest.disabled && <span className="loading loading-spinner"></span>}
        {icon && <span>{sampleIcon}</span>}
        {!iconOnly && label}
      </button>

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
