interface ComponentFormProps {
  component: string;
  children: React.ReactNode;
}

export default function ComponentFormLayout({ component, children }: ComponentFormProps) {
  return (
    <div className="flex flex-col gap-4 items-start h-full w-full">
      <h2 className="text-2xl font-semibold capitalize">{component} Customization</h2>
      <div className="flex flex-col gap-4 text-start w-full">
        {children}
      </div>
    </div >
  );
}