import { Library } from '@/core/system/uiLibraries';
import { DaisyButtonProps } from './daisy/types';
import { MaterialButtonProps } from './material/types';

/* Shared Button Props */
export interface ButtonProps {
    library: Library;
    label?: string;
    disabled?: boolean;
    loading?: boolean;
}

/* Unified Button Props */
export type UnifiedButtonProps = DaisyButtonProps | MaterialButtonProps;