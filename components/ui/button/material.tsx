import Button from '@mui/material/Button';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
// import { ButtonProps } from "@mui/material"; // Q: Should I be using this instead of the custom ButtonProps?
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';

import { ButtonProps } from './componentRegistry';

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

export enum MaterialButtonVariant {
  Text = 'text',
  Contained = 'contained',
  Outlined = 'outlined'
}

export enum MaterialButtonColor {
  Inherit = 'inherit', // Style unique to buttons
  Primary = MaterialComponentColor.Primary,
  Secondary = MaterialComponentColor.Secondary,
  Success = MaterialComponentColor.Success,
  Error = MaterialComponentColor.Error,
  Info = MaterialComponentColor.Info,
  Warning = MaterialComponentColor.Warning
}

// TODO: introduce more props as desired for customization
export interface MaterialButtonProps extends ButtonProps {
  size?: MaterialComponentSize;
  color: MaterialButtonColor;
  variant?: MaterialButtonVariant;
  disableElevation?: boolean;
  // disableFocusRipple?: boolean;
  // fullWidth?: boolean;
  // endIcon?: React.ReactNode;
  // startIcon?: React.ReactNode;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const materialButtonFields: FormFieldConfig[] = [
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
    options: Object.values(MaterialButtonColor),
    default: MaterialButtonColor.Primary
  },
  {
    type: 'dropdown',
    label: 'Variant',
    prop: 'variant',
    options: Object.values(MaterialButtonVariant),
    default: MaterialButtonVariant.Contained
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
export default function MaterialButton({
  label = 'Preview Button',
  size = MaterialComponentSize.Medium,
  color = MaterialButtonColor.Primary,
  variant = MaterialButtonVariant.Outlined,
  loading = false,
  disabled = false,
  disableElevation = false,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialButtonProps) {
  return (
    <Button
      size={size}
      color={color}
      variant={variant}
      loading={loading}
      disabled={disabled || loading}
      disableElevation={disableElevation}
      {...rest}
    >
      {loading ? 'Loading...' : label}
    </Button>
  );
}
