import { Library } from '@/core/system/uiLibraries';
import { DaisyDropdownProps } from './daisy/types';
import { MaterialDropdownProps } from './material/types';

/* Shared Dropdown Props */
export interface DropdownProps {
    library: Library;
    label?: string;
    open?: boolean;
}

/* Unified Dropdown Props */
export type UnifiedDropdownProps = DaisyDropdownProps | MaterialDropdownProps;