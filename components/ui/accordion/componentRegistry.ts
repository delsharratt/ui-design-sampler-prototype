'use client';

import dynamic from 'next/dynamic';

import { ComponentRegistryEntry } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

import { daisyAccordionFields } from './daisy';
import { materialAccordionFields } from './material';
import { shadcnAccordionFields } from './shadcn';

export interface AccordionItem {
  id: string;
  title: string;
  details: string;
}

export interface AccordionProps {
  library: Library;
  staticData?: AccordionItem[];
  disabled?: boolean;
}

const DaisyAccordion = dynamic(() => import('./daisy'), { ssr: false });
const MaterialAccordion = dynamic(() => import('./material'), { ssr: false });
const ShadcnAccordion = dynamic(() => import('./shadcn'), { ssr: false });

export const AccordionConfiguration: ComponentRegistryEntry = {
  label: 'Accordion',
  componentMap: {
    daisy: DaisyAccordion,
    material: MaterialAccordion,
    shadcn: ShadcnAccordion
  },
  formConfigMap: {
    daisy: daisyAccordionFields,
    material: materialAccordionFields,
    shadcn: shadcnAccordionFields
  },
  staticData: [
    {
      id: 'panel1',
      title: 'Accordion 1',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      id: 'panel2',
      title: 'Accordion 2',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      id: 'panel3',
      title: 'Accordion Actions',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
      // TODO: introduce support for MUI actions or separate sample data for MUI accordion
      // actions: [
      // { label: 'Cancel', onClick: () => console.log('Cancel clicked') },
      // { label: 'Agree', onClick: () => console.log('Agree clicked') },
      // ]
    }
  ]
};
