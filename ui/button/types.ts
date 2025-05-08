import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import { DaisyButtonProps } from './daisy/types';
import { MaterialButtonProps } from './material/types';
import DaisyButtonOptions from './daisy/options';

/* Shared Button Props */
export interface ButtonProps {
    library: Library;
    label?: string;
    disabled?: boolean;
    loading?: boolean;
}

export const BUTTON_OPTIONS_REGISTRY = {
    [LIBRARY_IDS.DAISY]: DaisyButtonOptions,
    // [LIBRARY_IDS.MATERIAL]: MaterialButtonOptions,
} as const;


/* Unified Button Props */
export type UnifiedButtonProps = DaisyButtonProps | MaterialButtonProps;