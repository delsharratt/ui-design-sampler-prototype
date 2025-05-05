'use client';

import { COMPONENT_REGISTRY } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';
import React from 'react';

export default function LibraryOverviewPage({ params }: { params: Promise<{ library: Library }> }) {
  const [library, setLibrary] = React.useState<Library | null>(null);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setLibrary(resolvedParams.library);
    });
  }, [params]);

  if (!library) {
    return <div>Loading...</div>; // Show a loading state while params are being resolved
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-md font-bold">Select a UI component from the nav above to preview here!</h4>
      {Object.entries(COMPONENT_REGISTRY).map(([key, Component]) => (
        <section key={key}>
          <h2 className="text-xl font-semibold capitalize">{key}</h2>
          <Component library={library} label={key} />
        </section>
      ))}
    </div>
  );
}