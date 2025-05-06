/* 
*  ---- MATERIAL UI BUTTONS ----
*  See documentation https://mui.com/material-ui/react-button/
*  See local documentation node_modules\@mui\material\esm\Button\Button.d.ts
* 
*  Demos:
*  - [Button Group](https://mui.com/material-ui/react-button-group/)
*  - [Button](https://mui.com/material-ui/react-button/)
*  
*  API:
*  - [Button API](https://mui.com/material-ui/api/button/)
*  - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
*/

// import { ButtonProps } from "@mui/material"; // Q: Should I be using this instead of the custom ButtonProps?
import { ButtonProps } from "../types";

export enum MaterialButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export enum MaterialButtonVariant {
    Text = 'text',
    Contained = 'contained',
    Outlined = 'outlined',
}

export enum MaterialButtonColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
    Info = 'info',
    Warning = 'warning',
    Success = 'success',
}

// TODO: introduce more props as desired for customization
export interface MaterialButtonProps extends ButtonProps {
    size?: MaterialButtonSize;
    variant?: MaterialButtonVariant;
    disableElevation?: boolean;
    // disableFocusRipple?: boolean;
    // fullWidth?: boolean;
    // endIcon?: React.ReactNode;
    // startIcon?: React.ReactNode;
}
