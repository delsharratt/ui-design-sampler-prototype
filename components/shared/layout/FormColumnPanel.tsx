import { FormDropdown } from '../form/FormDropdown';
import { FormToggle } from '../form/FormToggle';
import { FORM_FIELD_IDS, FormField } from '../form/useFormMap';

export function FormColumnPanel({
  fields,
  size
}: {
  size: '1/3' | '2/3';
  fields: FormField[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${size === '1/3' ? 'basis-1/3' : 'basis-2/3'} gap-4`}>
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
    </div>
  );
}
