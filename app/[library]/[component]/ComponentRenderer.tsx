'use client';

import GenericComponentForm from '@/components/shared/ui/ComponentForm';
import {
  COMPONENT_FORM_REGISTRY,
  ComponentId,
  NEW_COMPONENT_REGISTRY
} from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

export default function ComponentRenderer({
  library,
  componentId
}: {
  library: Library;
  componentId: ComponentId;
}) {
  let ComponentForm = COMPONENT_FORM_REGISTRY[componentId];
  if (!ComponentForm) {
    // Replace line above when fully migrated to new registry
    const config = NEW_COMPONENT_REGISTRY[componentId];
    return <GenericComponentForm library={library} {...config} />;
  }

  return (
    <div className="flex flex-col gap-4 items-start h-full w-full">
      <h2 className="text-2xl font-semibold capitalize">{componentId} Customization</h2>
      <div className="flex flex-col gap-4 text-start w-full">
        <ComponentForm library={library} />
      </div>
    </div>
  );
}
