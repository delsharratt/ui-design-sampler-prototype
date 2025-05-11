import * as React from 'react';
import { MaterialSelectProps, MaterialSelectVariant } from './types';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/* 
See documentation https://mui.com/material-ui/react-select/
*/
export default function MaterialSelect({
    value,
    label = COMPONENT_IDS.Button,
    size = MaterialComponentSize.Medium,
    color = MaterialComponentColor.Primary,
    variant = MaterialSelectVariant.Outlined,
    IconComponent = ArrowDropDownIcon,
    multiple = false,
    autoWidth = false,
    disableRipple = false,
    disableFocusRipple = false,
    defaultOption = false,
    defaultOpen = false,
    displayEmpty = false,
    // placeholder = false,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialSelectProps) {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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