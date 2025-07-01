'use client';

import dynamic from 'next/dynamic';

import { ComponentRegistryEntry } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

import { daisyButtonFields } from './daisy';
import { materialButtonFields } from './material';
import { shadcnButtonFields } from './shadcn';

export interface ButtonProps {
  library: Library;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
}

const DaisyButton = dynamic(() => import('./daisy'), { ssr: false });
const MaterialButton = dynamic(() => import('./material'), { ssr: false });
const ShadcnButton = dynamic(() => import('./shadcn'), { ssr: false });

export const ButtonConfiguration: ComponentRegistryEntry = {
  label: 'Button',
  componentMap: {
    daisy: DaisyButton,
    material: MaterialButton,
    shadcn: ShadcnButton
  },
  formConfigMap: {
    daisy: daisyButtonFields,
    material: materialButtonFields,
    shadcn: shadcnButtonFields
  }
};
