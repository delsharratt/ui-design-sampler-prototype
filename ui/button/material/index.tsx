import * as React from 'react';
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
        <Button
            variant={variant}
            size={size}
            color={color}
            disabled={disabled || loading}
            disableElevation={disableElevation}
            loading={loading}
            {...rest}
        >
            {loading ? 'Loading...' : label}
        </Button>
    );
}