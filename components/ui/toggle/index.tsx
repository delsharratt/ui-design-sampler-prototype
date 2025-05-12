import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyToggle from './daisy';
import { UnifiedToggleProps } from './types';
import { DaisyToggleProps } from './daisy/types';
import MaterialToggle from './material';
import { MaterialToggleProps } from './material/types';
import { ShadcnToggle } from './shadcn';
import { ToggleProps } from '@radix-ui/react-toggle';

export default function ToggleRenderer(props: UnifiedToggleProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyToggle {...rest as DaisyToggleProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialToggle {...rest as MaterialToggleProps} />;
        case LIBRARY_IDS.SHADCN:
            return <ShadcnToggle {...rest as ToggleProps} />;
        default:
            return null;
    }
}