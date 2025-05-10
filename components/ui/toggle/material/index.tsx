'use client';

import * as React from 'react';
import { MaterialToggleOrientation, MaterialToggleProps } from './types';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { exclusiveSampleData, nonExclusiveSampleData } from './config';

export default function MaterialToggle({
    label = COMPONENT_IDS.Toggle,
    size = MaterialComponentSize.Medium,
    color = MaterialComponentColor.Standard,
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