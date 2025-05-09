import { Library } from '@/core/system/uiLibraries';
import { DaisyAccordionProps } from './daisy/types';
import { MaterialAccordionProps } from './material/types';

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
export type UnifiedAccordionProps = DaisyAccordionProps | MaterialAccordionProps;