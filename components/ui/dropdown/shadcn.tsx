'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon } from 'lucide-react';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { cn } from '@/lib/utils';

import ShadcnButton from '../button/shadcn';
import { DropdownProps } from './componentRegistry';

/*
 * See documentation https://ui.shadcn.com/docs/components/dropdown-menu
 * Radix Primitive https://www.radix-ui.com/primitives/docs/components/dropdown-menu
 */

type DropdownMenuItemType = 'item' | 'submenu' | 'group' | 'label' | 'separator';

export interface DropdownMenuItemEntry {
  type?: DropdownMenuItemType;
  label?: string;
  shortcut?: string;
  disabled?: boolean;
  items?: DropdownMenuItemEntry[];
}

// Represents various example dropdown menus
export enum ShadcnDropdownMenuExampleType {
  Normal = 'normal',
  Checkbox = 'checkbox',
  Radio = 'radio'
}

export enum ShadcnDropdownSide {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right'
}

export enum ShadcnDropdownAlignment {
  Start = 'start',
  Center = 'center',
  End = 'end'
}

// Extends Radix's DropdownMenuProps (view @radix-ui/react-dropdown-menu for details)
export type ShadcnDropdownProps = DropdownProps &
  DropdownMenuPrimitive.DropdownMenuProps & {
    items?: DropdownMenuItemEntry[];
    type?: ShadcnDropdownMenuExampleType;
    separator?: boolean;
    // DropdownMenuContent props
    side?: ShadcnDropdownSide;
    sideOffset?: number;
    align?: ShadcnDropdownAlignment;
    arrowPadding?: number;
    // DropdownMenuTrigger props
    open?: boolean; // [data-state]
    disabled?: boolean; // [data-disabled]
    triggerIcon?: boolean;
  };

/*
 * ---- FORM CONFIGURATION ----
 */
export const shadcnDropdownFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Size',
    prop: 'size',
    options: Object.values(ShadcnDropdownSide),
    default: ShadcnDropdownSide.Bottom
  },
  {
    type: 'dropdown',
    label: 'Color',
    prop: 'color',
    options: Object.values(ShadcnDropdownAlignment),
    default: ShadcnDropdownAlignment.Start
  },
  {
    type: 'toggle',
    label: 'Modal',
    prop: 'modal',
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
    label: 'Separator',
    prop: 'separator',
    default: false
  }
];

/*
 * ---- SAMPLE DATA ----
 * // TODO: change to static data prop
 */
export const DROPDOWN_MENU_SAMPLE_DATA: DropdownMenuItemEntry[] = [
  { type: 'label', label: 'My Account' },
  { type: 'separator' },
  {
    type: 'group',
    items: [
      { label: 'Profile', shortcut: '⇧⌘P' },
      { label: 'Billing', shortcut: '⌘B' },
      { label: 'Settings', shortcut: '⌘S' },
      { label: 'Keyboard shortcuts', shortcut: '⌘K' }
    ]
  },
  { type: 'separator' },
  {
    type: 'group',
    items: [
      { label: 'Team' },
      {
        type: 'submenu',
        label: 'Invite users',
        items: [{ label: 'Email' }, { label: 'Message' }, { label: 'More...' }]
      },
      { label: 'New Team', shortcut: '⌘+T' }
    ]
  },
  { type: 'separator' },
  { label: 'GitHub' },
  { label: 'Support' },
  { label: 'API', disabled: true },
  { label: 'Log out', shortcut: '⇧⌘Q' }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function ShadcnDropdown({
  items = DROPDOWN_MENU_SAMPLE_DATA,
  separator = false,
  defaultOpen = false,
  open = false,
  modal = false,
  side = ShadcnDropdownSide.Bottom,
  sideOffset = 4, // Same default as Radix
  align = ShadcnDropdownAlignment.Start,
  arrowPadding = 0,
  disabled = false
  // triggerIcon = false //TODO: implement icon for trigger
}: ShadcnDropdownProps) {
  return (
    <DropdownMenu defaultOpen={defaultOpen} open={open} modal={modal}>
      {/* DROPDOWN MENU TRIGGER */}
      <DropdownMenuTrigger data-state={open ? 'open' : 'closed'} data-disabled={disabled} asChild>
        <ShadcnButton library={LIBRARY_IDS.SHADCN} variant="outline" custom>
          Open
        </ShadcnButton>
      </DropdownMenuTrigger>
      {/* DROPDOWN MENU CONTENT */}
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        arrowPadding={arrowPadding}
        className="w-56"
      >
        {renderDropdownMenuItems(items, separator)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/*
 * ---- RENDERING LOGIC FOR DROPDOWN MENU ITEMS ----
 * This function recursively renders the dropdown menu items based on their type.
 * It handles separators, labels, groups, submenus, and regular items.
 */
function renderDropdownMenuItems(items: DropdownMenuItemEntry[], separator: boolean = false) {
  return items.map((item, idx) => {
    if (separator && item.type === 'separator') {
      return <DropdownMenuSeparator key={`separator-${idx}`} />;
    }
    if (item.type === 'label' && item.label) {
      return <DropdownMenuLabel key={`label-${item.label}-${idx}`}>{item.label}</DropdownMenuLabel>;
    }
    if (item.type === 'group' && item.items) {
      return (
        <DropdownMenuGroup key={`group-${idx}`}>
          {renderDropdownMenuItems(item.items)}
        </DropdownMenuGroup>
      );
    }
    if (item.type === 'submenu' && item.items && item.label) {
      return (
        <DropdownMenuSub key={`submenu-${item.label}-${idx}`}>
          <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>{renderDropdownMenuItems(item.items)}</DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );
    }
    // Default menu item (type: "normal")
    return (
      <DropdownMenuItem key={`item-${item.label ?? idx}`} disabled={item.disabled}>
        {item.label}
        {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
      </DropdownMenuItem>
    );
  });
}

/*
 * ---- SHADCN DROPDOWN MENU COMPONENT PRIMITIVES ----
 * These are the lower-level building blocks used by the default export above.
 * Most are direct wrappers around @radix-ui/react-dropdown-menu primitives,
 * with added styling, props, and utility for use in custom dropdown menu UIs.
 */

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

// function DropdownMenuCheckboxItem({
//   className,
//   children,
//   checked,
//   ...props
// }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
//   return (
//     <DropdownMenuPrimitive.CheckboxItem
//       data-slot="dropdown-menu-checkbox-item"
//       className={cn(
//         "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       checked={checked}
//       {...props}
//     >
//       <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
//         <DropdownMenuPrimitive.ItemIndicator>
//           <CheckIcon className="size-4" />
//         </DropdownMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </DropdownMenuPrimitive.CheckboxItem>
//   );
// }

// function DropdownMenuRadioGroup({
//   ...props
// }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
//   return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
// }

// function DropdownMenuRadioItem({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
//   return (
//     <DropdownMenuPrimitive.RadioItem
//       data-slot="dropdown-menu-radio-item"
//       className={cn(
//         "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props}
//     >
//       <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
//         <DropdownMenuPrimitive.ItemIndicator>
//           <CircleIcon className="size-2 fill-current" />
//         </DropdownMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </DropdownMenuPrimitive.RadioItem>
//   );
// }

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className
      )}
      {...props}
    />
  );
}
