import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { UnifiedDropdownProps } from './types';
import { DaisyDropdownProps } from './daisy/types';
import { MaterialDropdownProps } from './material/types';
import DaisyDropdownWrapperRenderer from './daisy/wrapper';
import MaterialDropdownWrapperRenderer from './material/wrapper';

export default function DropdownWrapperRenderer(props: UnifiedDropdownProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyDropdownWrapperRenderer {...rest as DaisyDropdownProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialDropdownWrapperRenderer {...rest as MaterialDropdownProps} />;
        default:
            throw new Error(`Unsupported library: ${library}`);
    }
}