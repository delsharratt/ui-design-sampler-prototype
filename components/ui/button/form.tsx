'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import GenericComponentForm from '@/components/shared/ui/ComponentForm';
import { Library } from '@/core/system/uiLibraries';

import { daisyButtonFields } from './daisy';
import { materialButtonFields } from './material';
import { shadcnButtonFields } from './shadcn';

const DaisyButton = dynamic(() => import('./daisy'), { ssr: false });
const MaterialButton = dynamic(() => import('./material'), { ssr: false });
const ShadcnButton = dynamic(() => import('./shadcn'), { ssr: false });

export const buttonComponents: Record<Library, React.ComponentType<any>> = {
  daisy: DaisyButton,
  shadcn: ShadcnButton,
  material: MaterialButton
};

export const buttonFieldConfigs: Record<Library, FormFieldConfig[]> = {
  daisy: daisyButtonFields,
  shadcn: shadcnButtonFields,
  material: materialButtonFields
};

export default function ButtonComponentForm({ library }: { library: Library }) {
  return (
    <GenericComponentForm
      library={library}
      componentMap={buttonComponents}
      formConfigMap={buttonFieldConfigs}
    />
  );
}
