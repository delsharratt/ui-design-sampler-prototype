import { Metadata } from 'next';
import React from 'react';

import { COMPONENT_REGISTRY } from '@/core/system/componentRegistry';
import { LIBRARIES, Library } from '@/core/system/uiLibraries';

export const metadata: Metadata = {
  title: 'Library Overview'
};

export default async function LibraryOverviewPage({
  params
}: {
  params: Promise<{ library: Library }>;
}) {
  const { library } = await params;

  // Set the metadata title based on the library
  metadata.title = LIBRARIES[library]?.label;

  return (
    <div className="flex flex-col gap-12">
      {Object.entries(COMPONENT_REGISTRY).map(([key, Component]) =>
        typeof Component !== 'undefined' ? ( // Remove after migrating all components
          <section key={key} className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-semibold capitalize">{key}</h1>
            <Component library={library} label={key} />
          </section>
        ) : null
      )}
    </div>
  );
}
