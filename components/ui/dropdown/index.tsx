import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import { DaisyDropdownProps } from './daisy';
import { MaterialDropdownProps } from './material';
import DaisyDropdown from './daisy';
import MaterialDropdown from './material';
import { ShadcnDropdownMenu } from './shadcn';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

/* Shared Dropdown Props */
export interface DropdownProps {
    library: Library;
    label?: string;
    open?: boolean;
}

/* Unified Dropdown Props */
export type UnifiedDropdownProps = DaisyDropdownProps | MaterialDropdownProps;


export default function DropdownRenderer(props: UnifiedDropdownProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyDropdown {...rest as DaisyDropdownProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialDropdown {...rest as MaterialDropdownProps} />;
        case LIBRARY_IDS.SHADCN:
            return <ShadcnDropdownMenu {...rest as DropdownMenuProps} />;
        default:
            throw new Error(`Unsupported in library: ${library}`);
    }
}