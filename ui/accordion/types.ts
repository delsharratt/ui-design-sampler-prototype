/* 
See documentation https://daisyui.com/components/accordion/
All class names include a hyphenated "collapse" prefix
*/

export interface AccordionItem {
    title: string;
    content: string;
}

export interface AccordionProps {
    items?: AccordionItem[];
    modifier?: AccordionModifier;
    join?: boolean;
}

export enum AccordionModifier {
    Arrow = 'arrow',
    Plus = 'plus',
    Open = 'open',
    Close = 'close'
}