'use client';

import GenericComponentForm from '@/components/shared/ui/ComponentForm';
import { COMPONENT_REGISTRY, ComponentId } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

export default function ComponentRenderer({
  library,
  componentId
}: {
  library: Library;
  componentId: ComponentId;
}) {
  const config = COMPONENT_REGISTRY[componentId];
  return (
    <div className="flex flex-col gap-4 items-start h-full w-full">
      <h2 className="text-2xl font-semibold capitalize">{componentId} Customization</h2>
      <div className="flex flex-col gap-4 text-start w-full">
        <GenericComponentForm library={library} {...config} />
      </div>
    </div>
  );
}
