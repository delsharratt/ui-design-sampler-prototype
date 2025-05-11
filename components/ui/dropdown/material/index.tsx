import * as React from 'react';
import { MaterialDropdownProps, MaterialDropdownVariant } from './types';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { MaterialComponentColor, MaterialComponentSize } from '@/core/constants/material';
import { Button, Menu, MenuItem } from '@mui/material';

export default function MaterialDropdown({
    label = COMPONENT_IDS.Button,
    open = false,
    size = MaterialComponentSize.Medium,
    color = MaterialComponentColor.Primary,
    variant = MaterialDropdownVariant.Menu,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialDropdownProps) {
    return (
        <div>
            <Button
                id="basic-button"
            //   aria-controls={open ? 'basic-menu' : undefined}
            //   aria-haspopup="true"
            //   aria-expanded={open ? 'true' : undefined}
            //   onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                //   anchorEl={anchorEl}
                open={open}
            //   onClose={handleClose}
            //   MenuListProps={{
            //     'aria-labelledby': 'basic-button',
            //   }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </div>
    );
}