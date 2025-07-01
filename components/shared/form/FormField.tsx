import { FormDropdown } from './FormDropdown';
import { FormToggle } from './FormToggle';

export const FORM_FIELD_IDS = {
  Dropdown: 'dropdown',
  Toggle: 'toggle'
} as const;

export type FormFieldType = (typeof FORM_FIELD_IDS)[keyof typeof FORM_FIELD_IDS];

export interface FormFieldConfig {
  type: FormFieldType;
  label: string;
  prop?: string; // TODO: remove optional after refactor
  default?: string | boolean; // TODO: remove optional after refactor
  options?: string[]; // Dropdowns only
}

// Used for rendering fields in the form with state management
export interface FormField extends FormFieldConfig {
  value: any;
  onChange: (value: any) => void;
}

export default function FormFieldRenderer({ fields }: { fields: FormField[]; className?: string }) {
  return (
    <>
      {fields.map((field, i) =>
        field.type === FORM_FIELD_IDS.Dropdown ? (
          <FormDropdown
            key={i}
            label={field.label}
            value={field.value}
            options={field.options || []}
            onChange={field.onChange}
          />
        ) : (
          <FormToggle key={i} label={field.label} checked={field.value} onChange={field.onChange} />
        )
      )}
    </>
  );
}
