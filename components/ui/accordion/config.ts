import { MaterialAccordionItem } from "./material/types";

export const ACCORDION_SAMPLE_DATA: MaterialAccordionItem[] = [
    {
        id: 'panel1',
        title: 'Accordion 1',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        actions: null, // No actions for this accordion
    },
    {
        id: 'panel2',
        title: 'Accordion 2',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        actions: null, // No actions for this accordion
    },
    {
        id: 'panel3',
        title: 'Accordion Actions',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        actions: [
            // { label: 'Cancel', onClick: () => console.log('Cancel clicked') },
            // { label: 'Agree', onClick: () => console.log('Agree clicked') },
        ],
    },
];