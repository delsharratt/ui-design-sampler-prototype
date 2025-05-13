export const FORM_FIELD_IDS = {
  Dropdown: 'dropdown',
  Toggle: 'toggle'
} as const;

export type FormFieldType = (typeof FORM_FIELD_IDS)[keyof typeof FORM_FIELD_IDS];

export interface FormField<T = any> {
  type: FormFieldType;
  label: string;
  value: any;
  prop?: keyof T; // TODO: Determine if needed/useful
  options?: string[]; // for dropdowns
  onChange: (value: any) => void;
}

// TODO: determine if this is unusual somehow
export function useFormMap(component: string, library: string): FormField[] {
  if (component === 'button' && library === 'material') {
    return [];
  }
  return [];
}
