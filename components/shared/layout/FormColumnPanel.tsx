import FormFieldRenderer, { FormField } from '@/components/shared/form/FormField';

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
      <FormFieldRenderer fields={fields} />
    </div>
  );
}
FormFieldRenderer;
