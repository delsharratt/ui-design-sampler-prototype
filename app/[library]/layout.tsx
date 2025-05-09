'use client';

import { COMPONENT_IDS } from '@/core/system/componentRegistry';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import MaterialThemeProvider from '@/ui/providers/MaterialThemeProvider';
import clsx from 'clsx';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { library } = useParams();
  const pathname = usePathname();

  const layout = (
    <div>
      <nav className="mb-8 flex gap-8 border-b border-neutral-400 pb-2">
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
      <div>{children}</div>
    </div>
  )

  // Conditionally wrap with MaterialThemeProvider if the library is MaterialUI
  return library === LIBRARY_IDS.MATERIAL ? (
    <MaterialThemeProvider>{layout}</MaterialThemeProvider>
  ) : (
    layout
  );
}