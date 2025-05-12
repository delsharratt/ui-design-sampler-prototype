import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyAccordion from './daisy';
import { UnifiedAccordionProps } from './types';
import { DaisyAccordionProps } from './daisy/types';
import MaterialAccordion from './material';
import { MaterialAccordionProps } from './material/types';
import { ACCORDION_SAMPLE_DATA } from './config';
import { ShadcnAccordion } from './shadcn';
import { AccordionSingleProps } from '@radix-ui/react-accordion';

export default function AccordionRenderer(props: UnifiedAccordionProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyAccordion {...rest as DaisyAccordionProps} items={ACCORDION_SAMPLE_DATA} />
        case LIBRARY_IDS.MATERIAL:
            return <MaterialAccordion {...rest as MaterialAccordionProps} items={ACCORDION_SAMPLE_DATA} />
        case LIBRARY_IDS.SHADCN:
            return <ShadcnAccordion {...rest as AccordionSingleProps} />
        default:
            return null;
    }
}