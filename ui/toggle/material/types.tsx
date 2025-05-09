/* 
*  ---- MATERIAL UI BUTTONS ----
*  See documentation https://mui.com/material-ui/react-toggle-button/
*  See local documentation node_modules\@mui\material\esm\Button\Button.d.ts
*  See local documentation node_modules\@mui\material\esm\ToggleButtonGroup\ToggleButtonGroup.d.ts
* 
 * Demos:
 * - [Toggle Button](https://mui.com/material-ui/react-toggle-button/)
 *
 * API:
 * - [ToggleButton API](https://mui.com/material-ui/api/toggle-button/)
 * - [ToggleButtonGroup API](https://mui.com/material-ui/api/toggle-button-group/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
*/

// import ToggleProps from '@mui/material/ToggleButton'; // Q: Should I be using this instead of the custom ButtonProps?
import { MaterialComponentColor, MaterialComponentSize } from "@/core/constants/material";
import { ToggleProps } from '../types';

export enum MaterialToggleOrientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export interface MaterialToggleProps extends ToggleProps {
    size?: MaterialComponentSize;
    color?: MaterialComponentColor;
    orientation?: MaterialToggleOrientation;
    isExclusive?: boolean;
    disableRipple?: boolean;
    disableFocusRipple?: boolean;
    fullWidth?: boolean;
}