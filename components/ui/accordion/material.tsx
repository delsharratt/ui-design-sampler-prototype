'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { AccordionProps } from "@mui/material"; // Q: Should I be using this instead of the custom AccordionProps?
// import { SlotProps } from "@mui/material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography
} from '@mui/material'; //TODO: bring back Fade
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { MATERIAL_TRANSITIONS, MaterialTransitionId } from '@/core/constants/material';

import { AccordionItem, AccordionProps } from './componentRegistry';

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

export const ExpandIcons = {
  plus: 'plus',
  minus: 'minus',
  arrow: 'arrow',
  chevron: 'chevron'
};

export type MaterialAccordionAction = {
  label: string;
  disableSpacing?: false;
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
  square: false
};

export interface MaterialAccordionProps extends AccordionProps {
  items?: MaterialAccordionItem[];
  slots?: {
    heading?: 'h1' | 'h2' | 'h3' | 'h4';
    // transition?: elementType
  };
  slotProps?: {
    heading?: () => void | object;
    transition?: () => void | object;
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

/*
 * ---- FORM CONFIGURATION ----
 */
export const materialAccordionFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Transition',
    prop: 'transition',
    options: Object.keys(MATERIAL_TRANSITIONS),
    default: 'none'
  },
  {
    type: 'toggle',
    label: 'Join Items',
    prop: 'join',
    default: false
  },
  {
    type: 'toggle',
    label: 'Disabled',
    prop: 'disabled',
    default: false
  }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function MaterialAccordion({
  staticData = [],
  // expandIcon = <ExpandMoreIcon />,
  disableGutters = false,
  heading = 'h1',
  // transition,
  ...rest
}: React.HTMLAttributes<HTMLElement> & MaterialAccordionProps) {
  const items = staticData as MaterialAccordionItem[];
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  /* THIS LOGIC IS INTENDED FOR FORM LEVEL COMPONENT ALONGSIDE STATE MANAGEMENT */
  // TODO: figure out how to handle useEffect for dynamic transitions in MUI
  // useEffect(() => {
  //   // Dynamically set the transition after hydration
  //   const firstTransition = Object.keys(MATERIAL_TRANSITIONS)[0] as MaterialTransitionId;
  //   setTransition(firstTransition);
  // }, []);

  return (
    <div>
      {items.map(({ id, title, details, actions }) => (
        <Accordion
          slotProps={{
            // Testing this out
            heading: { component: heading },
            transition: { unmountOnExit: false }
          }}
          // slots={{ transition: Fade as AccordionSlots['transition'] }}
          // slotProps={{ transition: { timeout: 400 } }}
          key={id}
          expanded={expanded === id}
          disabled={rest.disabled}
          onChange={handleChange(id)}
          disableGutters={disableGutters}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-content`}
            id={`${id}-header`}
          >
            <Typography component="span">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{details}</Typography>
          </AccordionDetails>
          {actions && (
            <AccordionActions>
              {actions.map(({ label, onClick }, index) => (
                <Button key={index} onClick={onClick}>
                  {label}
                </Button>
              ))}
            </AccordionActions>
          )}
        </Accordion>
      ))}
    </div>
  );
}
