import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { UnifiedButtonProps } from './types';
import { DaisyButtonProps } from './daisy/types';
import { MaterialButtonProps } from './material/types';
import MaterialButtonWrapperRenderer from './material/wrapper';
import DaisyButtonWrapperRenderer from './daisy/wrapper';

export default function ButtonWrapperRenderer(props: UnifiedButtonProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyButtonWrapperRenderer {...rest as DaisyButtonProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialButtonWrapperRenderer {...rest as MaterialButtonProps} />;
        default:
            throw new Error(`Unsupported library: ${library}`);
    }
}