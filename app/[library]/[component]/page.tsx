import React from 'react';

import { ComponentId } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';
import { toPascalCase } from '@/core/utils/string';

import ComponentRenderer from './ComponentRenderer';

export default async function ComponentPage({
  params
}: {
  params: Promise<{ library: Library; component: ComponentId }>;
}) {
  const { library, component } = await params;
  const componentId = toPascalCase(component) as ComponentId;

  return <ComponentRenderer library={library} componentId={componentId} />;
}
