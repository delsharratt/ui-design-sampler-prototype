import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MaterialButtonColor, MaterialButtonSize, MaterialButtonVariant, MaterialButtonProps } from './types';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';

export default function MaterialButton({
    label = COMPONENT_IDS.Button,
    variant = MaterialButtonVariant.Outlined,
    size = MaterialButtonSize.Medium,
    color = MaterialButtonColor.Primary,
    loading = false,
    disabled = false,
    disableElevation = false,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & MaterialButtonProps) {

    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}