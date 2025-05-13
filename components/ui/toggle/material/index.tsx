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

'use client';

import * as React from 'react';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { exclusiveSampleData, nonExclusiveSampleData } from './config';
// import ToggleProps from '@mui/material/ToggleButton'; // Q: Should I be using this instead of the custom ButtonProps?
import { MaterialComponentColor, MaterialComponentSize } from "@/core/constants/material";
import { ToggleProps } from '..';

export enum MaterialToggleColor {
    Standard = 'standard', // Style unique to toggles
    Primary = MaterialComponentColor.Primary,
    Secondary = MaterialComponentColor.Secondary,
    Success = MaterialComponentColor.Success,
    Error = MaterialComponentColor.Error,
    Info = MaterialComponentColor.Info,
    Warning = MaterialComponentColor.Warning,
}

export enum MaterialToggleOrientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
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
* ---- DEFAULT COMPONENT EXPORT ----
*/
export default function MaterialToggle({
    label = COMPONENT_IDS.Toggle,
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