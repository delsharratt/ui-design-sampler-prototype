'use client';

import * as React from 'react';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Fade, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MaterialAccordionProps } from './types';
import { ACCORDION_SAMPLE_DATA } from '../config';

export default function MaterialAccordion({
    items = ACCORDION_SAMPLE_DATA,
    expandIcon = <ExpandMoreIcon />,
    disableGutters = false,
    heading = "h1",
    transition,
    ...rest
}: React.HTMLAttributes<HTMLElement> & MaterialAccordionProps) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            {items.map(({ id, title, details, actions }) => (
                <Accordion
                    slotProps={{ // Testing this out
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