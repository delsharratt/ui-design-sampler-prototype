/* 
See documentation https://daisyui.com/components/accordion/
All class names include a hyphenated "collapse" prefix
*/

import { AccordionItem, AccordionProps } from "../types";

export enum DaisyAccordionModifier {
    Arrow = 'arrow',
    Plus = 'plus',
    Open = 'open',
    Close = 'close'
}

export interface DaisyAccordionProps extends AccordionProps {
    items?: AccordionItem[];
    modifier?: DaisyAccordionModifier;
    join?: boolean;
}