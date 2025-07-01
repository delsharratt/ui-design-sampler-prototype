import { FormFieldConfig } from '@/components/shared/form/FormField';
import { AccordionConfiguration } from '@/components/ui/accordion/componentRegistry';
import { ButtonConfiguration } from '@/components/ui/button/componentRegistry';
import { CheckboxConfiguration } from '@/components/ui/checkbox/componentRegistry';
import { DropdownConfiguration } from '@/components/ui/dropdown/componentRegistry';
import { SelectConfiguration } from '@/components/ui/select/componentRegistry';
import { ToggleConfiguration } from '@/components/ui/toggle/componentRegistry';

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

export const COMPONENT_REGISTRY: Record<ComponentId, ComponentRegistryEntry> = {
  Accordion: AccordionConfiguration,
  Button: ButtonConfiguration,
  Checkbox: CheckboxConfiguration,
  Dropdown: DropdownConfiguration,
  Select: SelectConfiguration,
  Toggle: ToggleConfiguration
};
