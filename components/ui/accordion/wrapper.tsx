import { AccordionSingleProps } from '@radix-ui/react-accordion';

import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedAccordionProps } from '.';
import { DaisyAccordionProps } from './daisy';
import DaisyAccordionWrapper from './daisy/wrapper';
import { MaterialAccordionProps } from './material';
import MaterialAccordionWrapper from './material/wrapper';
import { ShadcnAccordion } from './shadcn';

export default function AccordionWrapperRenderer(props: UnifiedAccordionProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyAccordionWrapper {...(rest as DaisyAccordionProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialAccordionWrapper {...(rest as MaterialAccordionProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnAccordion {...(rest as AccordionSingleProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
