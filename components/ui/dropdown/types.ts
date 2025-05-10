import { Library } from '@/core/system/uiLibraries';
import { DaisyDropdownProps } from './daisy/types';
import { MaterialDropdownProps } from './material/types';

/* Shared Button Props */
export interface DropdownProps {
    library: Library;
    label?: string;
}

/* Unified Button Props */
export type UnifiedDropdownProps = DaisyDropdownProps | MaterialDropdownProps;