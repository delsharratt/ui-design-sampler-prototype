import { Library } from '@/core/system/uiLibraries';

import DaisyAccordion, { DaisyAccordionProps } from './daisy';
import MaterialAccordion, { MaterialAccordionItem, MaterialAccordionProps } from './material';
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

const accordionComponents: Record<Library, React.FC<any>> = {
  daisy: DaisyAccordion,
  shadcn: ShadcnAccordion,
  material: MaterialAccordion
};

/* SAMPLE DATA FOR ACCORDION COMPONENTS */

// TODO: make this not material specific
export const ACCORDION_SAMPLE_DATA: MaterialAccordionItem[] = [
  {
    id: 'panel1',
    title: 'Accordion 1',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    actions: null // No actions for this accordion
  },
  {
    id: 'panel2',
    title: 'Accordion 2',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    actions: null // No actions for this accordion
  },
  {
    id: 'panel3',
    title: 'Accordion Actions',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    actions: [
      // { label: 'Cancel', onClick: () => console.log('Cancel clicked') },
      // { label: 'Agree', onClick: () => console.log('Agree clicked') },
    ]
  }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function AccordionRenderer({
  library,
  ...props
}: { library: Library } & UnifiedAccordionProps) {
  const Component = accordionComponents[library];
  return <Component {...props} items={ACCORDION_SAMPLE_DATA} />;
}
