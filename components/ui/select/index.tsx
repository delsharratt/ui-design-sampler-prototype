import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { UnifiedSelectProps } from './types';
import DaisySelect from './daisy';
import MaterialSelect from './material';
import { DaisySelectProps } from './daisy/types';
import { MaterialSelectProps } from './material/types';
import { SelectProps } from '@radix-ui/react-select';
import { ShadcnSelect } from './shadcn';

export default function SelectRenderer(props: UnifiedSelectProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisySelect {...rest as DaisySelectProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialSelect {...rest as MaterialSelectProps} />;
        case LIBRARY_IDS.SHADCN:
            return <ShadcnSelect {...rest as SelectProps} />;
        default:
            throw new Error(`Unsupported in library: ${library}`);
    }
}