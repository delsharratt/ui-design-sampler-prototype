'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { cn } from '@/lib/utils';

import { SelectProps } from './componentRegistry';

/*
 * See documentation https://ui.shadcn.com/docs/components/select
 * Radix Primitive https://www.radix-ui.com/primitives/docs/components/select
 */

export enum ShadcnSelectSide {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

export enum ShadcnSelectPosition {
  ItemAligned = 'item-aligned',
  Popper = 'popper'
}

export enum ShadcnSelectAlign {
  Start = 'start',
  Center = 'center',
  End = 'end'
}

export type ShadcnSelectProps = SelectProps &
  SelectPrimitive.SelectProps & {
    /* Root Level */
    scrollable?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    disabled?: boolean;
    /* Content Level */
    side?: ShadcnSelectSide;
    align?: ShadcnSelectAlign;
    position?: ShadcnSelectPosition;
    required?: boolean;
    separator?: boolean;

    /* ALL SETTINGS BELOW ONLY APPLY TO POPPER*/
    // TODO: implement sliders for number settings
    arrowPadding?: number;
    sideOffset?: number; // offset from the trigger, only available for top and bottom
    alignOffset?: number; // offset from the trigger, only available for start and end
    hideWhenDetached?: boolean; // hide the select when detached from the trigger

    /* Item Level */
    itemSeparator?: boolean; // sample "separator" on one select item
    itemDisabled?: boolean; // sample "disabled" on one select item
  };

/*
 * ---- FORM CONFIGURATION ----
 */
export const shadcnSelectFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Side',
    prop: 'side',
    options: Object.values(ShadcnSelectSide),
    default: ShadcnSelectSide.Bottom
  },
  {
    type: 'dropdown',
    label: 'Align',
    prop: 'align',
    options: Object.values(ShadcnSelectAlign),
    default: ShadcnSelectAlign.Start
  },
  {
    type: 'dropdown',
    label: 'Position',
    prop: 'position',
    options: Object.values(ShadcnSelectPosition),
    default: ShadcnSelectPosition.Popper
  },
  {
    type: 'toggle',
    label: 'Scrollable',
    prop: 'scrollable',
    default: false
  },
  {
    type: 'toggle',
    label: 'Open',
    prop: 'open',
    default: false
  },
  {
    type: 'toggle',
    label: 'Default Open',
    prop: 'defaultOpen',
    default: false
  },
  {
    type: 'toggle',
    label: 'Disabled',
    prop: 'disabled',
    default: false
  },
  {
    type: 'toggle',
    label: 'Required',
    prop: 'required',
    default: false
  },
  {
    type: 'toggle',
    label: 'Separator',
    prop: 'separator',
    default: false
  }
];

/*
 * ---- SAMPLE DATA ----
 * // TODO: consider changing/moving to static data prop
 */
export const FRUIT_OPTIONS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' }
] as const;

export const TIMEZONE_OPTIONS = [
  {
    group: 'North America',
    items: [
      { label: 'Eastern Standard Time (EST)', value: 'est' },
      { label: 'Central Standard Time (CST)', value: 'cst' },
      { label: 'Mountain Standard Time (MST)', value: 'mst' },
      { label: 'Pacific Standard Time (PST)', value: 'pst' },
      { label: 'Alaska Standard Time (AKST)', value: 'akst' },
      { label: 'Hawaii Standard Time (HST)', value: 'hst' }
    ]
  },
  {
    group: 'Europe & Africa',
    items: [
      { label: 'Greenwich Mean Time (GMT)', value: 'gmt' },
      { label: 'Central European Time (CET)', value: 'cet' },
      { label: 'Eastern European Time (EET)', value: 'eet' },
      { label: 'Western European Summer Time (WEST)', value: 'west' },
      { label: 'Central Africa Time (CAT)', value: 'cat' },
      { label: 'East Africa Time (EAT)', value: 'eat' }
    ]
  },
  {
    group: 'Asia',
    items: [
      { label: 'Moscow Time (MSK)', value: 'msk' },
      { label: 'India Standard Time (IST)', value: 'ist' },
      { label: 'China Standard Time (CST)', value: 'cst_china' },
      { label: 'Japan Standard Time (JST)', value: 'jst' },
      { label: 'Korea Standard Time (KST)', value: 'kst' },
      { label: 'Indonesia Central Standard Time (WITA)', value: 'ist_indonesia' }
    ]
  },
  {
    group: 'Australia & Pacific',
    items: [
      { label: 'Australian Western Standard Time (AWST)', value: 'awst' },
      { label: 'Australian Central Standard Time (ACST)', value: 'acst' },
      { label: 'Australian Eastern Standard Time (AEST)', value: 'aest' },
      { label: 'New Zealand Standard Time (NZST)', value: 'nzst' },
      { label: 'Fiji Time (FJT)', value: 'fjt' }
    ]
  },
  {
    group: 'South America',
    items: [
      { label: 'Argentina Time (ART)', value: 'art' },
      { label: 'Bolivia Time (BOT)', value: 'bot' },
      { label: 'Brasilia Time (BRT)', value: 'brt' },
      { label: 'Chile Standard Time (CLT)', value: 'clt' }
    ]
  }
] as const;

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function ShadcnSelect({
  scrollable,
  open,
  defaultOpen,
  disabled,
  side,
  align,
  position,
  required,
  separator,
  sideOffset,
  alignOffset,
  arrowPadding,
  hideWhenDetached
}: ShadcnSelectProps) {
  return (
    <Select required={required} open={open} defaultOpen={defaultOpen} disabled={disabled}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a time zone" />
      </SelectTrigger>
      <SelectContent
        side={side}
        align={align}
        position={position}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        arrowPadding={arrowPadding}
        hideWhenDetached={hideWhenDetached}
      >
        {scrollable ? (
          TIMEZONE_OPTIONS.map((group) => (
            <div key={group.group}>
              <SelectGroup>
                <SelectLabel>{group.group}</SelectLabel>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
              {separator && <SelectSeparator />}
            </div>
          ))
        ) : (
          <SelectGroup>
            {FRUIT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}
