'use client';

import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Checkbox } from '@mui/material';
import { useEffect, useRef } from 'react';

import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';

import { CheckboxProps } from '..';

/*
 *  ---- MATERIAL UI CHECKBOXES ----
 *  See documentation https://mui.com/material-ui/react-checkbox/
 *  See local documentation node_modules\@mui\material\esm\Button\Button.d.ts
 *
 * Demos:
 * - [Checkbox](https://mui.com/material-ui/react-checkbox/)
 * - [Transfer List](https://mui.com/material-ui/react-transfer-list/)
 *
 * API:
 * - [Checkbox API](https://mui.com/material-ui/api/checkbox/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */

export type MaterialCheckboxProps = CheckboxProps & {
  elementSize?: MaterialComponentSize; // Attribute is named `elementSize` to avoid conflict with native HTML input attribute
  color?: MaterialComponentColor;
  icon?: boolean;
  iconOnly?: boolean;
};

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function MaterialCheckbox({
  checked = false,
  elementSize = MaterialComponentSize.Medium,
  color = MaterialComponentColor.Primary,
  icon = false,
  disabled = false,
  indeterminate = false,
  onChange = () => {}
}: React.InputHTMLAttributes<HTMLInputElement> & MaterialCheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <Checkbox
      checked={checked}
      size={elementSize}
      color={color as any}
      disabled={disabled}
      icon={icon ? <FavoriteBorder /> : undefined}
      checkedIcon={icon ? <Favorite /> : undefined}
      onChange={(e) => {
        onChange(e);
        if (checkboxRef.current) {
          checkboxRef.current.indeterminate = false; // Reset indeterminate state on change
        }
      }}
    />
  );
}
