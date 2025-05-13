import ComponentFormLayout from '@/components/shared/layout/ComponentFormLayout';
import {
  COMPONENT_WRAPPER_REGISTRY,
  COMPONENT_REGISTRY,
  ComponentId
} from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';
import React from 'react';

export default async function ComponentPage({
  params
}: {
  params: Promise<{ library: Library; component: ComponentId }>;
}) {
  const { library, component } = await params;

  const WrapperComponent = COMPONENT_WRAPPER_REGISTRY[component];
  const BaseComponent = COMPONENT_REGISTRY[component];

  if (!WrapperComponent || !BaseComponent) {
    return <div>Component not found</div>;
  }

  if (!library) {
    // TODO: consider actual loading spinner? Also isn't this built into Next.js some other way???
    return (
      // Show a loading state while params are being resolved
      <div className='flex flex-col gap-4 items-center justify-center h-full w-full text-center'>
        <h3 className='font-medium text-md tracking-widest text-neutral-300 w-1/3 uppercase'>
          Loading...
        </h3>
      </div>
    );
  }

  return (
    <ComponentFormLayout component={component}>
      <WrapperComponent library={library} />
    </ComponentFormLayout>
  );
}
