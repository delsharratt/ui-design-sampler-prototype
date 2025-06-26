import { FormFieldConfig } from '@/components/shared/form/FormField';
import { ACCORDION_SAMPLE_DATA } from '@/components/ui/accordion';
import { accordionComponents, accordionFieldConfigs } from '@/components/ui/accordion/form';
import { buttonComponents, buttonFieldConfigs } from '@/components/ui/button/form';
import CheckboxRenderer from '@/components/ui/checkbox';
import CheckboxFormRenderer from '@/components/ui/checkbox/form';
import DropdownRenderer from '@/components/ui/dropdown';
import DropdownFormRenderer from '@/components/ui/dropdown/form';
import SelectRenderer from '@/components/ui/select';
import SelectFormRenderer from '@/components/ui/select/form';
import ToggleRenderer from '@/components/ui/toggle';
import ToggleFormRenderer from '@/components/ui/toggle/form';

import { Library } from './uiLibraries';

export const COMPONENT_IDS = {
  Button: 'button',
  Accordion: 'accordion',
  Checkbox: 'checkbox',
  Dropdown: 'dropdown',
  Select: 'select',
  Toggle: 'toggle'
} as const;

export type ComponentId = keyof typeof COMPONENT_IDS;

export interface ComponentRegistryEntry {
  label: ComponentId;
  componentMap: Record<Library, React.ComponentType<any>>;
  formConfigMap: Record<Library, FormFieldConfig[]>;
  staticData?: Record<string, any>;
}

export const NEW_COMPONENT_REGISTRY: Record<ComponentId, ComponentRegistryEntry> = {
  Accordion: {
    label: 'Accordion',
    componentMap: accordionComponents,
    formConfigMap: accordionFieldConfigs,
    staticData: ACCORDION_SAMPLE_DATA
  },
  Button: {
    label: 'Button',
    componentMap: buttonComponents,
    formConfigMap: buttonFieldConfigs
  },
  Checkbox: {
    label: 'Checkbox',
    componentMap: { daisy: CheckboxRenderer, shadcn: CheckboxRenderer, material: CheckboxRenderer },
    formConfigMap: { daisy: [], shadcn: [], material: [] } // Placeholder, replace with actual configs
  },
  Dropdown: {
    label: 'Dropdown',
    componentMap: { daisy: DropdownRenderer, shadcn: DropdownRenderer, material: DropdownRenderer },
    formConfigMap: { daisy: [], shadcn: [], material: [] } // Placeholder, replace with actual configs
  },
  Select: {
    label: 'Select',
    componentMap: { daisy: SelectRenderer, shadcn: SelectRenderer, material: SelectRenderer },
    formConfigMap: { daisy: [], shadcn: [], material: [] } // Placeholder, replace with actual configs
  },
  Toggle: {
    label: 'Toggle',
    componentMap: { daisy: ToggleRenderer, shadcn: ToggleRenderer, material: ToggleRenderer },
    formConfigMap: { daisy: [], shadcn: [], material: [] } // Placeholder, replace with actual configs
  }
};

// Replace others with renderer components once made to reflect button component setup
export const COMPONENT_REGISTRY: Record<ComponentId, React.ComponentType<any>> = {
  Accordion: undefined,
  Button: undefined,
  Checkbox: CheckboxRenderer,
  Dropdown: DropdownRenderer,
  Select: SelectRenderer,
  Toggle: ToggleRenderer
};

export const COMPONENT_FORM_REGISTRY: Record<ComponentId, React.ComponentType<any> | undefined> = {
  Accordion: undefined,
  Button: undefined,
  Checkbox: CheckboxFormRenderer,
  Dropdown: DropdownFormRenderer,
  Select: SelectFormRenderer,
  Toggle: ToggleFormRenderer
};
