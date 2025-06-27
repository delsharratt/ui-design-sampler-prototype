import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronRight, Loader2, MailOpen } from 'lucide-react';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { cn } from '@/lib/utils';

import { ButtonProps } from './componentRegistry';

/*
 *  ---- SHADCN/UI BUTTONS ----
 *  See documentation https://ui.shadcn.com/docs/components/button
 */

export enum ShadcnButtonVariant {
  Default = 'default',
  Destructive = 'destructive',
  Outline = 'outline',
  Secondary = 'secondary',
  Ghost = 'ghost',
  Link = 'link'
}

export enum ShadcnButtonSize {
  Default = 'default',
  Sm = 'sm',
  Lg = 'lg',
  Icon = 'icon'
}

// TODO: add support for button variants prop on button-styled Link (maybe when code snippets are added)

export type ShadcnButtonProps = ButtonProps &
  React.ComponentProps<'button'> &
  VariantProps<typeof shadcnButtonVariantStyles> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    custom?: boolean;
    icon?: boolean;
    iconOnly?: boolean;
    loading?: boolean;
    disabled?: boolean;
    asChild?: boolean;
  };

const shadcnButtonVariantStyles = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

/*
 * ---- FORM CONFIGURATION ----
 */
export const shadcnButtonFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Size',
    prop: 'size',
    options: Object.values(ShadcnButtonVariant),
    default: ShadcnButtonVariant.Default
  },
  {
    type: 'dropdown',
    label: 'Color',
    prop: 'color',
    options: Object.values(ShadcnButtonSize),
    default: ShadcnButtonSize.Default
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
    label: 'Loading',
    prop: 'loading',
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
export default function ShadcnButton({
  className,
  variant,
  size,
  icon,
  iconOnly,
  loading,
  disabled,
  custom = false,
  asChild = false,
  ...props
}: ShadcnButtonProps) {
  // {
  //   type: 'dropdown',
  //   label: 'Size',
  //   value: size,
  //   options: Object.values(ShadcnButtonSize),
  //   onChange: (e) => {
  //     setSize(e.target.value);
  //     // Set icon and iconOnly based on size when size is Icon
  //     setIcon(e.target.value === ShadcnButtonSize.Icon);
  //     setIconOnly(e.target.value === ShadcnButtonSize.Icon);
  //   }
  // }
  // {
  //   type: 'toggle',
  //   label: 'Icon Only',
  //   value: iconOnly,
  //   onChange: (e) => {
  //     setIcon(e.target.checked);
  //     setIconOnly(e.target.checked);
  //     // Set size to Icon if iconOnly is checked
  //     // Otherwise, set it to Default
  //     setSize(e.target.checked ? ShadcnButtonSize.Icon : ShadcnButtonSize.Default);
  //   }
  // },

  const Component = asChild ? Slot : 'button';
  const content = (
    <>
      {iconOnly && <ChevronRight />}
      {icon && !iconOnly && (
        <>
          <MailOpen /> Login with Email
        </>
      )}
      {!icon && !loading && <>Preview Button</>}
      {loading && (
        <>
          <Loader2 className="animate-spin" /> Loading...
        </>
      )}
    </>
  );

  // If custom, render with children
  if (custom) {
    return (
      <Component
        data-slot="button"
        className={cn(shadcnButtonVariantStyles({ variant, size, className }))}
        {...props}
      />
    );
  }

  // Otherwise, render with content
  return (
    <Component
      data-slot="button"
      className={cn(shadcnButtonVariantStyles({ variant, size, className }))}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {content}
    </Component>
  );
}
