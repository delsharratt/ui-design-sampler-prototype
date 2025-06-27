'use client';

import React from 'react';

import { COMPONENT_REGISTRY } from '@/core/system/componentRegistry';
import { Library } from '@/core/system/uiLibraries';

export default function LibraryOverviewRenderer({ library }: { library: Library }) {
  return (
    <div className="flex flex-col gap-12">
      {Object.entries(COMPONENT_REGISTRY).map(([componentKey, config]) => {
        const Component = config.componentMap[library];

        if (!Component) {
          return (
            <section key={componentKey} className="flex flex-col gap-4 items-start">
              <h1 className="text-2xl font-semibold capitalize">{componentKey}</h1>
              <div className="text-muted">Component not available for {library}.</div>
            </section>
          );
        }

        return (
          <section key={componentKey} className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-semibold capitalize">{componentKey}</h1>
            <Component
              label={componentKey}
              {...(config.staticData ? { staticData: config.staticData } : {})}
            />
          </section>
        );
      })}
    </div>
  );
}
