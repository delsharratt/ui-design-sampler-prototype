import React from 'react';

import GenericComponentForm from '@/components/shared/ui/ComponentForm';
import { ComponentId } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';
import { toPascalCase } from '@/core/utils/string';

export default async function ComponentPage({
  params
}: {
  params: Promise<{ library: Library; component: ComponentId }>;
}) {
  const { library, component } = await params;
  const componentId = toPascalCase(component) as ComponentId;

  return <GenericComponentForm library={library} componentId={componentId} />;
}
