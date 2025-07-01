'use client';

import React, { useState } from 'react';

import { FORM_FIELD_IDS, FormField } from '@/components/shared/form/FormField';
import Form from '@/components/shared/layout/Form';
import { COMPONENT_REGISTRY, ComponentId } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

export interface ComponentFormProps {
  library: Library;
  componentId: ComponentId;
}

export default function GenericComponentForm({ library, componentId }: ComponentFormProps) {
  const { label, componentMap, formConfigMap, staticData } = COMPONENT_REGISTRY[componentId];
  const Component = componentMap[library];
  const formConfig = formConfigMap[library];

  const initialState = Object.fromEntries(formConfig.map((field) => [field.prop, field.default]));
  const [formState, setFormState] = useState(initialState);

  const fields: FormField[] = formConfig.map((field) => ({
    ...field,
    value: formState[field.prop ?? ''],
    onChange: (e) => {
      const value = field.type === FORM_FIELD_IDS.Toggle ? e.target.checked : e.target.value;
      setFormState((prev: any) => ({ ...prev, [field.prop ?? '']: value }));
    }
  }));

  return (
    <div className="flex flex-col gap-4 items-start h-full w-full">
      <h2 className="text-2xl font-semibold capitalize">{label} Customization</h2>
      <div className="flex flex-col gap-4 text-start w-full">
        <Form formFields={fields} />
        <div className="flex justify-around mt-8 w-full">
          {staticData ? (
            <Component {...formState} staticData={staticData} />
          ) : (
            <Component {...formState} />
          )}
        </div>
      </div>
    </div>
  );
}
