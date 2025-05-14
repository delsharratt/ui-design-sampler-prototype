interface ComponentFormProps {
  children: React.ReactNode;
}

export default function FormWrapper({ children }: ComponentFormProps) {
  return (
    <div className="flex flex-row gap-4 w-full border-b border-neutral-400 pb-10">{children}</div>
  );
}
