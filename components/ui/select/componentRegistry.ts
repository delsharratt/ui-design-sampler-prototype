'use client';

import dynamic from 'next/dynamic';

import { ComponentRegistryEntry } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

import { daisySelectFields } from './daisy';
import { materialSelectFields } from './material';
import { shadcnSelectFields } from './shadcn';

export interface SelectProps {
  library: Library;
  label?: string;
  value?: string;
}

const DaisySelect = dynamic(() => import('./daisy'), { ssr: false });
const MaterialSelect = dynamic(() => import('./material'), { ssr: false });
const ShadcnSelect = dynamic(() => import('./shadcn'), { ssr: false });

export const SelectConfiguration: ComponentRegistryEntry = {
  label: 'Select',
  componentMap: {
    daisy: DaisySelect,
    material: MaterialSelect,
    shadcn: ShadcnSelect
  },
  formConfigMap: {
    daisy: daisySelectFields,
    material: materialSelectFields,
    shadcn: shadcnSelectFields
  }
};
