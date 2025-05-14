import React from 'react';

import {
  COMPONENT_REGISTRY,
  COMPONENT_WRAPPER_REGISTRY,
  ComponentId
} from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

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
      <div className="flex flex-col gap-4 items-center justify-center h-full w-full text-center">
        <h3 className="font-medium text-md tracking-widest text-neutral-300 w-1/3 uppercase">
          Loading...
        </h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-start h-full w-full">
      <h2 className="text-2xl font-semibold capitalize">{component} Customization</h2>
      <div className="flex flex-col gap-4 text-start w-full">
        <WrapperComponent library={library} />
      </div>
    </div>
  );
}
