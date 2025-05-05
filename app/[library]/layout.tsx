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
      <nav className="mb-4 flex gap-4 border-b pb-2">
        {UI_TABS.map((tab) => (
          <Link
            key={tab}
            href={`/${library}/${tab}`}
            className="capitalize"
          >
            {tab}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
}