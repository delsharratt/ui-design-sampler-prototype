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
import { MaterialComponentColor, MaterialComponentSize } from "@/core/constants/material";
import { DropdownProps } from '../types';

export enum MaterialButtonVariant {
    Filled = 'filled',
    Outlined = 'outlined',
    Standard = 'standard',
}

export interface MaterialDropdownProps extends DropdownProps {
    size?: MaterialComponentSize;
    color: MaterialComponentColor;
    variant: MaterialButtonVariant
    IconComponent?: React.ElementType;
    autoWidth?: boolean;
    disableRipple?: boolean;
    disableFocusRipple?: boolean;
    defaultOption?: boolean;
    defaultOpen?: boolean;
    // displayEmpty?: boolean; // Is this one necessary?
}