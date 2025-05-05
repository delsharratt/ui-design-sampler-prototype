import { COMPONENT_REGISTRY } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';
import React from 'react';

export default async function LibraryOverviewPage({ params }: { params: Promise<{ library: Library }> }) {
  const { library } = await params;

  return (
    <div className="flex flex-col gap-12">
      {Object.entries(COMPONENT_REGISTRY).map(([key, Component]) => (
        <section key={key} className="flex flex-col gap-4 items-start">
          <h1 className="text-2xl font-semibold capitalize">{key}</h1>
          <Component library={library} label={key} />
        </section>
      ))}
    </div>
  );
}