import { Library } from '@/core/system/uiLibraries';
import { DaisySelectProps } from './daisy/types';
import { MaterialSelectProps } from './material/types';

/* Shared Select Props */
export interface SelectProps {
    library: Library;
    label?: string;
    value?: string;
}

/* Unified Select Props */
export type UnifiedSelectProps = DaisySelectProps | MaterialSelectProps;