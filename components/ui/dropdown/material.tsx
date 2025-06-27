// import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
// import { MenuProps } from "@mui/material"; // Q: Should I be using this instead of the custom DropdownProps?
import {
  MaterialComponentColor,
  MaterialComponentSize,
  MaterialTransitionId
} from '@/core/constants/material';

import { DropdownProps } from './componentRegistry';

/*
 *  ---- MATERIAL UI (DROPDOWN) MENUS ----
 *  See documentation https://mui.com/material-ui/react-menu/
 *  \node_modules\@mui\material\esm\Menu\Menu.d.ts
 *  \node_modules\@mui\material\esm\MenuList\MenuList.d.ts
 *  \node_modules\@mui\material\esm\MenuItem\MenuItem.d.ts
 *
 * Demos:
 * - [App Bar](https://mui.com/material-ui/react-app-bar/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 * - [Menu Item](https://mui.com/material-ui/api/menu-item/)
 *
 * API:
 * - [Menu API](https://mui.com/material-ui/api/menu/)
 * - inherits [Popover API](https://mui.com/material-ui/api/popover/)
 * - [MenuList API](https://mui.com/material-ui/api/menu-list/)
 * - inherits [List API](https://mui.com/material-ui/api/list/)
 * - [MenuItem  API](https://mui.com/material-ui/api/menu-item/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */

export enum MaterialDropdownVariant {
  Menu = 'menu',
  SelectedMenu = 'selectedMenu'
}

// TODO potentially add interfaces for menu list and menu item props as well
export interface MaterialDropdownProps extends DropdownProps {
  size?: MaterialComponentSize;
  color?: MaterialComponentColor;
  variant?: MaterialDropdownVariant;
  IconComponent?: React.ElementType;
  transition?: MaterialTransitionId;
  dense?: boolean; // Applied to menu list
  autoFocusItem?: boolean; // Applied to menu list
  autoFocus?: boolean;
  denseItems?: boolean; // Applied to menu items (?) if this is needed
  disableGutters?: boolean; // Applied to menu items
  divider?: boolean; //Applied to menu items
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const materialDropdownFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Size',
    prop: 'size',
    options: Object.values(MaterialComponentSize),
    default: MaterialComponentSize.Medium
  },
  {
    type: 'dropdown',
    label: 'Color',
    prop: 'color',
    options: Object.values(MaterialComponentColor),
    default: MaterialComponentColor.Primary
  },
  {
    type: 'dropdown',
    label: 'Variant',
    prop: 'variant',
    options: Object.values(MaterialDropdownVariant),
    default: MaterialDropdownVariant.Menu
  }
  // {
  //   type: 'toggle',
  //   label: 'Multiple',
  //   prop: 'multiple',
  //   default: false
  // }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function MaterialDropdown({
  // label = COMPONENT_IDS.Button,
  open = false
  // size = MaterialComponentSize.Medium,
  // color = MaterialComponentColor.Primary,
  // variant = MaterialDropdownVariant.Menu
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialDropdownProps) {
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        //   onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        //   anchorEl={anchorEl}
        open={open}
        //   onClose={handleClose}
        //   MenuListProps={{
        //     'aria-labelledby': 'basic-button',
        //   }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
}
