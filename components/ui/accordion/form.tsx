import { AccordionSingleProps } from '@radix-ui/react-accordion';

import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedAccordionProps } from '.';
import { DaisyAccordionProps } from './daisy';
import DaisyAccordionForm from './daisy/form';
import { MaterialAccordionProps } from './material';
import MaterialAccordionForm from './material/form';
// import { ShadcnAccordionRootProps } from './shadcn';
import ShadcnAccordionForm from './shadcn/form';

export default function AccordionFormRenderer(props: UnifiedAccordionProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyAccordionForm {...(rest as DaisyAccordionProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialAccordionForm {...(rest as MaterialAccordionProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnAccordionForm {...(rest as AccordionSingleProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
