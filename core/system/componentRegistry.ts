import AccordionRenderer from '@/components/ui/accordion';
import AccordionFormRenderer from '@/components/ui/accordion/form';
import ButtonRenderer from '@/components/ui/button';
import ButtonFormRenderer from '@/components/ui/button/form';
import DropdownRenderer from '@/components/ui/dropdown';
import DropdownFormRenderer from '@/components/ui/dropdown/form';
import SelectRenderer from '@/components/ui/select';
import SelectFormRenderer from '@/components/ui/select/form';
import ToggleRenderer from '@/components/ui/toggle';
import ToggleFormRenderer from '@/components/ui/toggle/form';

export const COMPONENT_IDS = {
  Button: 'button',
  Accordion: 'accordion',
  Toggle: 'toggle',
  Select: 'select',
  Dropdown: 'dropdown'
} as const;

export type ComponentId = (typeof COMPONENT_IDS)[keyof typeof COMPONENT_IDS];

// Replace others with renderer components once made to reflect button component setup
export const COMPONENT_REGISTRY = {
  [COMPONENT_IDS.Button]: ButtonRenderer,
  [COMPONENT_IDS.Accordion]: AccordionRenderer,
  [COMPONENT_IDS.Toggle]: ToggleRenderer,
  [COMPONENT_IDS.Select]: SelectRenderer,
  [COMPONENT_IDS.Dropdown]: DropdownRenderer
};

export const COMPONENT_WRAPPER_REGISTRY = {
  [COMPONENT_IDS.Button]: ButtonFormRenderer,
  [COMPONENT_IDS.Accordion]: AccordionFormRenderer,
  [COMPONENT_IDS.Toggle]: ToggleFormRenderer,
  [COMPONENT_IDS.Select]: SelectFormRenderer,
  [COMPONENT_IDS.Dropdown]: DropdownFormRenderer
};
