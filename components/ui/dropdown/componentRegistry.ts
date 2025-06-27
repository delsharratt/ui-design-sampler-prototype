'use client';

import dynamic from 'next/dynamic';

import { ComponentRegistryEntry } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

import { daisyDropdownFields } from './daisy';
import { materialDropdownFields } from './material';
import { shadcnDropdownFields } from './shadcn';

export interface DropdownProps {
  library: Library;
  label?: string;
  open?: boolean;
}

const DaisyDropdown = dynamic(() => import('./daisy'), { ssr: false });
const MaterialDropdown = dynamic(() => import('./material'), { ssr: false });
const ShadcnDropdown = dynamic(() => import('./shadcn'), { ssr: false });

export const DropdownConfiguration: ComponentRegistryEntry = {
  label: 'Dropdown',
  componentMap: {
    daisy: DaisyDropdown,
    material: MaterialDropdown,
    shadcn: ShadcnDropdown
  },
  formConfigMap: {
    daisy: daisyDropdownFields,
    material: materialDropdownFields,
    shadcn: shadcnDropdownFields
  }
};
