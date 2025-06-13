import FormFieldRenderer, { FormField } from '@/components/shared/form/FormField';

export default function Form({ formFields }: { formFields: FormField[] }) {
  const dropdownFields = formFields.filter((field) => field.type === 'dropdown');
  const toggleFields = formFields.filter((field) => field.type === 'toggle');

  return (
    <div className="flex flex-row gap-4 w-full border-b border-neutral-400 pb-10">
      <FormColumnPanel size="2/3" fields={dropdownFields} />
      <FormColumnPanel size="1/3" fields={toggleFields} />
    </div>
  );
}

function FormColumnPanel({
  fields,
  size
}: {
  size: '1/3' | '2/3';
  fields: FormField[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${size === '1/3' ? 'basis-1/3' : 'basis-2/3'} gap-4`}>
      <FormFieldRenderer fields={fields} />
    </div>
  );
}
