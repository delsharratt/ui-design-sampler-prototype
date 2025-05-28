type DropdownMenuItemType = 'item' | 'submenu' | 'group' | 'label' | 'separator';

export interface DropdownMenuItemEntry {
  type?: DropdownMenuItemType;
  label?: string;
  shortcut?: string;
  disabled?: boolean;
  items?: DropdownMenuItemEntry[];
}

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
