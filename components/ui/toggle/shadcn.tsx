'use client';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { cn } from '@/lib/utils';

import { ToggleProps } from './componentRegistry';

/*
 *  ---- SHADCN/UI TOGGLES ----
 *  See documentation https://ui.shadcn.com/docs/components/toggle
 */

export enum ShadcnToggleVariant {
  Default = 'default',
  Outline = 'outline'
}

export enum ShadcnToggleSize {
  Default = 'default',
  Sm = 'sm',
  Lg = 'lg'
}

export type ShadcnToggleProps = ToggleProps &
  VariantProps<typeof shadcnToggleVariantStyles> & {
    pressed?: boolean;
    defaultPressed?: boolean;
    disabled?: boolean;
    asChild?: boolean;
  };

const shadcnToggleVariantStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground'
      },
      size: {
        default: 'h-9 px-2 min-w-9',
        sm: 'h-8 px-1.5 min-w-8',
        lg: 'h-10 px-2.5 min-w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

const ShadcnToggleGroupContext = React.createContext<
  VariantProps<typeof shadcnToggleVariantStyles>
>({
  size: 'default',
  variant: 'default'
});

/*
 * ---- FORM CONFIGURATION ----
 */
export const shadcnToggleFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Side',
    prop: 'side',
    options: Object.values(ShadcnToggleVariant),
    default: ShadcnToggleVariant.Default
  },
  {
    type: 'dropdown',
    label: 'Align',
    prop: 'align',
    options: Object.values(ShadcnToggleSize),
    default: ShadcnToggleSize.Default
  },
  {
    type: 'toggle',
    label: 'Pressed',
    prop: 'pressed',
    default: false
  },
  {
    type: 'toggle',
    label: 'Default Pressed',
    prop: 'defaultPressed',
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
 * See documentation https://ui.shadcn.com/docs/components/toggle
 * Radix Primitive https://www.radix-ui.com/primitives/docs/components/toggle
 */
export default function ShadcnToggle({
  className,
  variant,
  size,
  pressed,
  defaultPressed,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof shadcnToggleVariantStyles>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      pressed={pressed}
      defaultPressed={defaultPressed}
      className={cn(shadcnToggleVariantStyles({ variant, size, className }))}
      {...props}
    />
  );
}

/*
 * See documentation https://ui.shadcn.com/docs/components/toggle-group
 * Radix Primitive https://www.radix-ui.com/primitives/docs/components/toggle-group
 */
export function ShadcnToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof shadcnToggleVariantStyles>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        className
      )}
      {...props}
    >
      <ShadcnToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ShadcnToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

export function ShadcnToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof shadcnToggleVariantStyles>) {
  const context = React.useContext(ShadcnToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        shadcnToggleVariantStyles({
          variant: context.variant || variant,
          size: context.size || size
        }),
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}
