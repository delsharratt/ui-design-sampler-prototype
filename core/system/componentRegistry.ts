import AccordionRenderer from '@/components/ui/accordion';
import AccordionWrapperRenderer from '@/components/ui/accordion/wrapper';
import ButtonRenderer from '@/components/ui/button';
import ButtonWrapperRenderer from '@/components/ui/button/wrapper';
import DropdownRenderer from '@/components/ui/dropdown';
import SelectRenderer from '@/components/ui/select';
import SelectWrapperRenderer from '@/components/ui/select/wrapper';
import ToggleRenderer from '@/components/ui/toggle';
import ToggleWrapperRenderer from '@/components/ui/toggle/wrapper';

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
  [COMPONENT_IDS.Button]: ButtonWrapperRenderer,
  [COMPONENT_IDS.Accordion]: AccordionWrapperRenderer,
  [COMPONENT_IDS.Toggle]: ToggleWrapperRenderer,
  [COMPONENT_IDS.Select]: SelectWrapperRenderer,
  [COMPONENT_IDS.Dropdown]: DropdownRenderer
};
