'use client';

import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import clsx from 'clsx';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import LibraryThemeProvider from '@/components/shared/theme/LibraryThemeProvider';

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { library } = useParams();
  const pathname = usePathname();

  // Dynamically render theme provider based on library
  return (
    <LibraryThemeProvider library={library as Library}>
      <div className="relative h-full w-full p-10">
        <nav className="absolute top-0 left-0 w-full flex gap-8 border-b border-neutral-400 p-10 pb-2">
          <Link
            key="all"
            href={`/${library}`}
            className={clsx(
              {
                'font-bold text-neutral-100': pathname === `/${library}`,
                'font-semibold text-neutral-300': pathname !== `/${library}`,
              },
              'uppercase text-sm text-neutral-300 hover:text-neutral-100 pb-2',
            )}
          >
            View All
          </Link>
          {Object.entries(COMPONENT_IDS).map(([label, component]) => (
            <Link
              key={component}
              href={`/${library}/${component}`}
              className={clsx(
                {
                  'font-bold text-neutral-100': pathname === `/${library}/${component}`,
                  'font-semibold text-neutral-300': pathname !== `/${library}/${component}`,
                },
                'uppercase text-sm hover:text-neutral-100 pb-2',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Scrolling Form Container */}
        <div className="overflow-y-auto pt-20">{children}</div>
      </div>

    </LibraryThemeProvider>
  );
}