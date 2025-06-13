import AccordionRenderer from '@/components/ui/accordion';
import AccordionComponentForm from '@/components/ui/accordion/form';
import ButtonRenderer from '@/components/ui/button';
import ButtonFormRenderer from '@/components/ui/button/form';
import CheckboxRenderer from '@/components/ui/checkbox';
import CheckboxFormRenderer from '@/components/ui/checkbox/form';
import DropdownRenderer from '@/components/ui/dropdown';
import DropdownFormRenderer from '@/components/ui/dropdown/form';
import SelectRenderer from '@/components/ui/select';
import SelectFormRenderer from '@/components/ui/select/form';
import ToggleRenderer from '@/components/ui/toggle';
import ToggleFormRenderer from '@/components/ui/toggle/form';

export const COMPONENT_IDS = {
  Button: 'button',
  Accordion: 'accordion',
  Checkbox: 'checkbox',
  Dropdown: 'dropdown',
  Select: 'select',
  Toggle: 'toggle'
} as const;

export type ComponentId = (typeof COMPONENT_IDS)[keyof typeof COMPONENT_IDS];

// Replace others with renderer components once made to reflect button component setup
export const COMPONENT_REGISTRY = {
  [COMPONENT_IDS.Accordion]: AccordionRenderer,
  [COMPONENT_IDS.Button]: ButtonRenderer,
  [COMPONENT_IDS.Checkbox]: CheckboxRenderer,
  [COMPONENT_IDS.Dropdown]: DropdownRenderer,
  [COMPONENT_IDS.Select]: SelectRenderer,
  [COMPONENT_IDS.Toggle]: ToggleRenderer
};

export const COMPONENT_FORM_REGISTRY = {
  [COMPONENT_IDS.Accordion]: AccordionComponentForm,
  [COMPONENT_IDS.Button]: ButtonFormRenderer,
  [COMPONENT_IDS.Checkbox]: CheckboxFormRenderer,
  [COMPONENT_IDS.Dropdown]: DropdownFormRenderer,
  [COMPONENT_IDS.Select]: SelectFormRenderer,
  [COMPONENT_IDS.Toggle]: ToggleFormRenderer
};
