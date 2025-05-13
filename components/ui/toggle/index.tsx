import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyToggle from './daisy';
import { DaisyToggleProps } from './daisy';
import MaterialToggle from './material';
import { MaterialToggleProps } from './material';
import { ShadcnToggle } from './shadcn';
import { ToggleProps as ShadcnToggleProps } from '@radix-ui/react-toggle';

/* Shared Toggle Props */
export interface ToggleProps {
    library: Library;
    label?: string;
    active?: boolean;
}

/* Unified Toggle Props */
export type UnifiedToggleProps = DaisyToggleProps | MaterialToggleProps;

/* 
* ---- DEFAULT COMPONENT EXPORT ----
*/
export default function ToggleRenderer(props: UnifiedToggleProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyToggle {...rest as DaisyToggleProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialToggle {...rest as MaterialToggleProps} />;
        case LIBRARY_IDS.SHADCN:
            return <ShadcnToggle {...rest as ShadcnToggleProps} />;
        default:
            return null;
    }
}