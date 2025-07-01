'use client';

import dynamic from 'next/dynamic';

import { ComponentRegistryEntry } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

import { daisyToggleFields } from './daisy';
import { materialToggleFields } from './material';
import { shadcnToggleFields } from './shadcn';

export interface ToggleProps {
  library: Library;
  label?: string;
  active?: boolean;
}

const DaisyToggle = dynamic(() => import('./daisy'), { ssr: false });
const MaterialToggle = dynamic(() => import('./material'), { ssr: false });
const ShadcnToggle = dynamic(() => import('./shadcn'), { ssr: false });

export const ToggleConfiguration: ComponentRegistryEntry = {
  label: 'Toggle',
  componentMap: {
    daisy: DaisyToggle,
    material: MaterialToggle,
    shadcn: ShadcnToggle
  },
  formConfigMap: {
    daisy: daisyToggleFields,
    material: materialToggleFields,
    shadcn: shadcnToggleFields
  }
};
