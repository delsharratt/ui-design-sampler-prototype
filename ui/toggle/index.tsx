import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyToggle from './daisy';
import { ToggleProps, UnifiedToggleProps } from './types';
import { DaisyToggleProps } from './daisy/types';

export interface RenderProps extends ToggleProps {
    library: Library;
}

export default function ToggleRenderer(props: UnifiedToggleProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyToggle {...rest as DaisyToggleProps} />;
        default:
            return null;
    }
}