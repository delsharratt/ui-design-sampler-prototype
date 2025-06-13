'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { FORM_FIELD_IDS, FormField, FormFieldConfig } from '@/components/shared/form/FormField';
import Form from '@/components/shared/ui/ComponentForm';
import { Library } from '@/core/system/uiLibraries';

import { ACCORDION_SAMPLE_DATA } from '.';
import { daisyAccordionFields } from './daisy';
import { materialAccordionFields } from './material';
import { shadcnAccordionFields } from './shadcn';

const DaisyAccordion = dynamic(() => import('./daisy'), { ssr: false });
const MaterialAccordion = dynamic(() => import('./material'), { ssr: false });
const ShadcnAccordion = dynamic(() => import('./shadcn'), { ssr: false });

// TODO: create and pull from record of components for each library
const accordionComponents: Record<Library, React.ComponentType<any>> = {
  daisy: DaisyAccordion,
  shadcn: MaterialAccordion,
  material: ShadcnAccordion
};

const accordionFieldConfigs: Record<Library, FormFieldConfig[]> = {
  daisy: daisyAccordionFields,
  shadcn: shadcnAccordionFields,
  material: materialAccordionFields
};

export default function AccordionComponentForm({ library }: { library: Library }) {
  const Accordion = accordionComponents[library];
  const fieldConfig = accordionFieldConfigs[library];

  const initialState = Object.fromEntries(fieldConfig.map((field) => [field.prop, field.default]));
  const [formState, setFormState] = useState(initialState);

  // Build FormField array to pass to the Form component
  const fields: FormField[] = fieldConfig.map((field) => ({
    ...field,
    value: formState[field.prop ?? ''], //TODO remove nullish coalescing after refactor
    onChange: (e) => {
      const value = field.type === FORM_FIELD_IDS.Toggle ? e.target.checked : e.target.value;
      setFormState((prev: any) => ({ ...prev, [field.prop ?? '']: value })); //TODO remove null coalescing after refactor
    }
  }));

  return (
    <>
      <Form formFields={fields} />
      <div className="flex justify-around mt-8 w-full">
        <Accordion {...formState} items={ACCORDION_SAMPLE_DATA} />
      </div>
    </>
  );
}
