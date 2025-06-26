'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import GenericComponentForm from '@/components/shared/ui/ComponentForm';
import { Library } from '@/core/system/uiLibraries';

import { ACCORDION_SAMPLE_DATA } from '.';
import { daisyAccordionFields } from './daisy';
import { materialAccordionFields } from './material';
import { shadcnAccordionFields } from './shadcn';

const DaisyAccordion = dynamic(() => import('./daisy'), { ssr: false });
const MaterialAccordion = dynamic(() => import('./material'), { ssr: false });
const ShadcnAccordion = dynamic(() => import('./shadcn'), { ssr: false });

export const accordionComponents: Record<Library, React.ComponentType<any>> = {
  daisy: DaisyAccordion,
  shadcn: ShadcnAccordion,
  material: MaterialAccordion
};

export const accordionFieldConfigs: Record<Library, FormFieldConfig[]> = {
  daisy: daisyAccordionFields,
  shadcn: shadcnAccordionFields,
  material: materialAccordionFields
};

export default function AccordionComponentForm({ library }: { library: Library }) {
  return (
    <GenericComponentForm
      library={library}
      componentMap={accordionComponents}
      formConfigMap={accordionFieldConfigs}
      staticData={{ items: ACCORDION_SAMPLE_DATA }}
    />
  );
}
