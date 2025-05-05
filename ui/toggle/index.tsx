import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyToggle from './daisy';
import { ToggleProps } from './types';

export interface RenderProps extends ToggleProps {
    library: Library;
}

export default function ToggleRenderer(props: RenderProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyToggle {...rest} />;
        default:
            return null;
    }
}