import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisySelect from './daisy';
import MaterialSelect from './material';
import { DaisySelectProps } from './daisy';
import { MaterialSelectProps } from './material';
import { SelectProps as ShadcnSelectProps } from '@radix-ui/react-select';
import { ShadcnSelect } from './shadcn';

/* Shared Select Props */
export interface SelectProps {
    library: Library;
    label?: string;
    value?: string;
}

/* Unified Select Props */
export type UnifiedSelectProps = DaisySelectProps | MaterialSelectProps | SelectProps;

/* 
* ---- DEFAULT COMPONENT EXPORT ----
*/
export default function SelectRenderer(props: UnifiedSelectProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisySelect {...rest as DaisySelectProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialSelect {...rest as MaterialSelectProps} />;
        case LIBRARY_IDS.SHADCN:
            return <ShadcnSelect {...rest as ShadcnSelectProps} />;
        default:
            throw new Error(`Unsupported in library: ${library}`);
    }
}