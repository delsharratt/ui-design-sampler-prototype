/*
 *  ---- MATERIAL UI BUTTONS ----
 *  See documentation https://mui.com/material-ui/react-select/
 *  See local documentation \node_modules\@mui\material\esm\Select\Select.d.ts
 *
 * Demos:
 * - [Select](https://mui.com/material-ui/react-select/)
 *
 * API:
 * - [Select API](https://mui.com/material-ui/api/select/)
 * - inherits [OutlinedInput API](https://mui.com/material-ui/api/outlined-input/)
 */

// import { SelectProps } from "@mui/material"; // Q: Should I be using this instead of the custom DropdownProps?
import * as React from 'react';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SelectProps } from '..';

export enum MaterialSelectVariant {
  Filled = 'filled',
  Outlined = 'outlined',
  Standard = 'standard'
}

export interface MaterialSelectProps extends SelectProps {
  size?: MaterialComponentSize;
  color?: MaterialComponentColor;
  variant?: MaterialSelectVariant;
  IconComponent?: React.ElementType;
  multiple?: boolean;
  autoWidth?: boolean;
  disableRipple?: boolean;
  disableFocusRipple?: boolean;
  defaultOption?: boolean;
  defaultOpen?: boolean;
  displayEmpty?: boolean;
  // TODO: determine if worth previewing, only available with native
  // placeholder?: boolean;
}

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function MaterialSelect({
  // value,
  label = COMPONENT_IDS.Button
  // size = MaterialComponentSize.Medium,
  // color = MaterialComponentColor.Primary,
  // variant = MaterialSelectVariant.Outlined,
  // IconComponent = ArrowDropDownIcon,
  // multiple = false,
  // autoWidth = false,
  // disableRipple = false,
  // disableFocusRipple = false,
  // defaultOption = false,
  // defaultOpen = false,
  // displayEmpty = false,
  // placeholder = false
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialSelectProps) {
  return (
    <FormControl>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={10} //Placeholder
        label={label}
        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
