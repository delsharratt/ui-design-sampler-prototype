import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import { UnifiedAccordionProps } from './types';
import { DaisyAccordionProps } from './daisy/types';
import { MaterialAccordionProps } from './material/types';
import DaisyAccordionWrapper from './daisy/wrapper';
import MaterialAccordionWrapper from './material/wrapper';

export default function AccordionWrapperRenderer(props: UnifiedAccordionProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyAccordionWrapper {...rest as DaisyAccordionProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialAccordionWrapper {...rest as MaterialAccordionProps} />;
        default:
            throw new Error(`Unsupported library: ${library}`);
    }
}