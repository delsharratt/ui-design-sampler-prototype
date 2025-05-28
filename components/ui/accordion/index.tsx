import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';

import { ACCORDION_SAMPLE_DATA } from './config';
import DaisyAccordion, { DaisyAccordionProps } from './daisy';
import MaterialAccordion, { MaterialAccordionProps } from './material';
import ShadcnAccordion, { ShadcnAccordionProps } from './shadcn';

export interface AccordionItem {
  id: string;
  title: string;
  details: string;
}

/* Shared Accordion Props */
export interface AccordionProps {
  library: Library;
  items?: AccordionItem[];
  disabled?: boolean;
}

/* Unified Button Props */
export type UnifiedAccordionProps =
  | DaisyAccordionProps
  | MaterialAccordionProps
  | ShadcnAccordionProps;

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function AccordionRenderer(props: UnifiedAccordionProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyAccordion {...(rest as DaisyAccordionProps)} items={ACCORDION_SAMPLE_DATA} />;
    case LIBRARY_IDS.MATERIAL:
      return (
        <MaterialAccordion {...(rest as MaterialAccordionProps)} items={ACCORDION_SAMPLE_DATA} />
      );
    case LIBRARY_IDS.SHADCN:
      return <ShadcnAccordion {...(rest as ShadcnAccordionProps)} />;
    default:
      return null;
  }
}
