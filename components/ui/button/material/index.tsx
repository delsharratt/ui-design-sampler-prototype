import * as React from 'react';
import Button from '@mui/material/Button';
import { MaterialButtonVariant, MaterialButtonProps, MaterialButtonColor } from './types';
import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { MaterialComponentSize } from '@/core/constants/material';

export default function MaterialButton({
    label = COMPONENT_IDS.Button,
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