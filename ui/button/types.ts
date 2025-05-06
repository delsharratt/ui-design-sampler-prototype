import { Library } from '@/core/system/uiLibraries';
import { DaisyButtonProps, DaisyButtonSize, DaisyButtonVariant } from './daisy/types';
import { MaterialButtonSize, MaterialButtonVariant, MaterialButtonProps } from './material/types';

/* Shared Button Props */
export interface ButtonProps {
    library: Library;
    label?: string;
    disabled?: boolean;
    loading?: boolean;
}

/* Combined Button Size */
export type ButtonSize = DaisyButtonSize | MaterialButtonSize;

/* Combined Button Variant */
export type ButtonStyle = DaisyButtonVariant | MaterialButtonVariant;

/* Unified Button Props */
export type UnifiedButtonProps = DaisyButtonProps | MaterialButtonProps;