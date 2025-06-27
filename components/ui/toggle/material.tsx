'use client';

import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
// import ToggleProps from '@mui/material/ToggleButton'; // Q: Should I be using this instead of the custom ButtonProps?
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';

import { ToggleProps } from './componentRegistry';

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

export enum MaterialToggleColor {
  Standard = 'standard', // Style unique to toggles
  Primary = MaterialComponentColor.Primary,
  Secondary = MaterialComponentColor.Secondary,
  Success = MaterialComponentColor.Success,
  Error = MaterialComponentColor.Error,
  Info = MaterialComponentColor.Info,
  Warning = MaterialComponentColor.Warning
}

export enum MaterialToggleOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}
export interface MaterialToggleProps extends ToggleProps {
  size?: MaterialComponentSize;
  color?: MaterialToggleColor;
  orientation?: MaterialToggleOrientation;
  isExclusive?: boolean;
  disableRipple?: boolean;
  disableFocusRipple?: boolean;
  fullWidth?: boolean;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const materialToggleFields: FormFieldConfig[] = [
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
    options: Object.values(MaterialToggleOrientation),
    default: MaterialToggleOrientation.Horizontal
  },
  {
    type: 'toggle',
    label: 'Exclusive',
    prop: 'isExclusive',
    default: false
  },
  {
    type: 'toggle',
    label: 'Checked',
    prop: 'checked',
    default: false
  },
  {
    type: 'toggle',
    label: 'Full Width',
    prop: 'fullWidth',
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
    label: 'Disabled Ripple',
    prop: 'disableRipple',
    default: false
  },
  {
    type: 'toggle',
    label: 'Disable Focus Ripple',
    prop: 'disableFocusRipple',
    default: false
  }
];

/*
 * ---- SAMPLE DATA SETS ----
 */

// For rendering ToggleButtonGroup with nonexclusive selections
export const nonExclusiveSampleData = [
  { value: 'bold', label: 'Bold', icon: <FormatBoldIcon /> },
  { value: 'italic', label: 'Italic', icon: <FormatItalicIcon /> },
  { value: 'underlined', label: 'Underlined', icon: <FormatUnderlinedIcon /> },
  { value: 'color', label: 'Color Fill', icon: <FormatColorFillIcon />, disabled: true }
];

// For rendering ToggleButtonGroup with exclusive selections
export const exclusiveSampleData = [
  { value: 'left', label: 'Left', icon: <FormatAlignLeftIcon /> },
  { value: 'center', label: 'Center', icon: <FormatAlignCenterIcon /> },
  { value: 'right', label: 'Right', icon: <FormatAlignRightIcon /> },
  { value: 'justify', label: 'Justify', icon: <FormatAlignJustifyIcon />, disabled: true }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function MaterialToggle({
  // label = COMPONENT_IDS.Toggle,
  size = MaterialComponentSize.Medium,
  color = MaterialToggleColor.Standard,
  orientation = MaterialToggleOrientation.Horizontal,
  isExclusive = false,
  disableRipple = false,
  disableFocusRipple = false,
  fullWidth = false,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialToggleProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);
  const [selectedValues, setSelectedValues] = React.useState(() => ['bold', 'underlined']);

  const sampleData = isExclusive ? exclusiveSampleData : nonExclusiveSampleData;

  // Handle changes for exclusive mode
  const handleExclusiveChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    setSelectedValue(newValue);
  };

  // Handle changes for non-exclusive mode
  const handleNonExclusiveChange = (event: React.MouseEvent<HTMLElement>, newValues: string[]) => {
    setSelectedValues(newValues);
  };

  return (
    <ToggleButtonGroup
      value={isExclusive ? selectedValue : selectedValues}
      size={size}
      color={color}
      disabled={rest.disabled}
      orientation={orientation}
      exclusive={isExclusive}
      fullWidth={fullWidth}
      onChange={isExclusive ? handleExclusiveChange : handleNonExclusiveChange}
      aria-label="text alignment"
    >
      {sampleData.map(({ value, label, icon, disabled }) => (
        <ToggleButton
          key={value}
          value={value}
          disableRipple={disableRipple}
          disableFocusRipple={disableFocusRipple}
          disabled={disabled}
          aria-label={label}
        >
          {icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
