import * as React from 'react';
import { MaterialToggleOrientation, MaterialToggleProps } from './types';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function MaterialToggle({
    label = COMPONENT_IDS.Toggle,
    size = MaterialComponentSize.Medium,
    color = MaterialComponentColor.Primary,
    orientation = MaterialToggleOrientation.Horizontal,
    isExclusive = false,
    disableRipple = false,
    disableFocusRipple = false,
    fullWidth = false,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialToggleProps) {

    return (
        <ToggleButtonGroup
            size={size}
            color={color}
            orientation={orientation}
            exclusive={isExclusive}
            fullWidth={fullWidth}
            aria-label="placeholder"
        >
            {[...Array(4).keys()].map(key => (
                <ToggleButton
                    value={key}
                    disableRipple={disableRipple}
                    disableFocusRipple={disableFocusRipple}
                >
                    {key}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}