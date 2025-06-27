'use client';

import dynamic from 'next/dynamic';

import { ComponentRegistryEntry } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

import { daisyCheckboxFields } from './daisy';
import { materialCheckboxFields } from './material';
import { shadcnCheckboxFields } from './shadcn';

export interface CheckboxProps {
  library: Library;
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
}

const DaisyCheckbox = dynamic(() => import('./daisy'), { ssr: false });
const MaterialCheckbox = dynamic(() => import('./material'), { ssr: false });
const ShadcnCheckbox = dynamic(() => import('./shadcn'), { ssr: false });

export const CheckboxConfiguration: ComponentRegistryEntry = {
  label: 'Checkbox',
  componentMap: {
    daisy: DaisyCheckbox,
    material: MaterialCheckbox,
    shadcn: ShadcnCheckbox
  },
  formConfigMap: {
    daisy: daisyCheckboxFields,
    material: materialCheckboxFields,
    shadcn: shadcnCheckboxFields
  }
};
