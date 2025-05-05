'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const UI_TABS = ['button', 'accordion', 'toggle'] as const;

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { library } = useParams();

  return (
    <div>
      <nav className="mb-8 flex gap-8 border-b border-neutral-400 pb-2">
        {UI_TABS.map((tab) => (
          <Link
            key={tab}
            href={`/${library}/${tab}`}
            className="uppercase text-sm font-semibold text-neutral-300 hover:text-neutral-100 pb-2"
          >
            {tab}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
}