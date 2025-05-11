import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { UnifiedDropdownProps } from './types';
import { DaisyDropdownProps } from './daisy/types';
import { MaterialDropdownProps } from './material/types';
import DaisyDropdown from './daisy';
import MaterialDropdown from './material';

export default function DropdownRenderer(props: UnifiedDropdownProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyDropdown {...rest as DaisyDropdownProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialDropdown {...rest as MaterialDropdownProps} />;
        default:
            throw new Error(`Unsupported in library: ${library}`);
    }
}