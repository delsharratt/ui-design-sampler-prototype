/* 
*  ---- MATERIAL UI ACCORDIONS ----
*  See documentation https://mui.com/material-ui/react-accordion/
*  See local documentation \node_modules\@mui\material\esm\Accordion\Accordion.d.ts
* 
 * Demos:
 * - [Accordion](https://mui.com/material-ui/react-accordion/)
 *
 * API:
 * - [Accordion API](https://mui.com/material-ui/api/accordion/)
 * - inherits [Paper API](https://mui.com/material-ui/api/paper/)
*/

// import { AccordionProps } from "@mui/material"; // Q: Should I be using this instead of the custom ButtonProps?
// import { SlotProps } from "@mui/material";
import { MaterialTransitionId } from "@/core/constants/material";
import { AccordionItem } from "../types";
import { AccordionProps } from "../types";

export const ExpandIcons = {
    plus: 'plus',
    minus: 'minus',
    arrow: 'arrow',
    chevron: 'chevron',
}

export type MaterialAccordionAction = {
    label: string;
    disableSpacing?: false,
    onClick?: () => void;
};

export interface MaterialAccordionItem extends AccordionItem {
    actions?: MaterialAccordionAction[] | null;
    onChange?: () => void;
}

export const MaterialAccordionSummaryProps = {
    expandIcon: ExpandIcons.arrow,
    icon: ExpandIcons.arrow,
    disabled: false,
    action: false,
    square: false,
}

export interface MaterialAccordionProps extends AccordionProps {
    items?: MaterialAccordionItem[];
    slots?: {
        heading?: 'h1' | 'h2' | 'h3' | 'h4',
        // transition?: elementType 
    }
    slotProps?: {
        heading?: () => void | object,
        transition?: () => void | object
    };
    expanded?: boolean;
    defaultExpanded?: boolean;
    disableGutters?: boolean;
    disableActionSpacing?: boolean;
    expandIcon?: React.ReactNode;
    actions?: false;
    square?: boolean;

    // slotProps on Accordion Component
    heading?: 'h1' | 'h2' | 'h3' | 'h4'; // {{ heading: { component: 'h4' } }}
    transition?: MaterialTransitionId;
}