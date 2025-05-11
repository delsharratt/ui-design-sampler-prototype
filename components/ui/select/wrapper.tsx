import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { UnifiedSelectProps } from './types';
import { DaisySelectProps } from './daisy/types';
import { MaterialSelectProps } from './material/types';
import DaisySelectWrapperRenderer from './daisy/wrapper';
import MaterialSelectWrapperRenderer from './material/wrapper';

export default function SelectWrapperRenderer(props: UnifiedSelectProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisySelectWrapperRenderer {...rest as DaisySelectProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialSelectWrapperRenderer {...rest as MaterialSelectProps} />;
        default:
            throw new Error(`Unsupported library: ${library}`);
    }
}