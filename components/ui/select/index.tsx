import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { UnifiedSelectProps } from './types';
import DaisySelect from './daisy';
import MaterialSelect from './material';
import { DaisySelectProps } from './daisy/types';
import { MaterialSelectProps } from './material/types';

export default function SelectRenderer(props: UnifiedSelectProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisySelect {...rest as DaisySelectProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialSelect {...rest as MaterialSelectProps} />;
        default:
            throw new Error(`Unsupported in library: ${library}`);
    }
}