import { Metadata } from 'next';

import { LIBRARIES, Library } from '@/core/system/uiLibraries';

import LibraryOverviewRenderer from './LibraryOverviewRenderer';

export const metadata: Metadata = {
  title: 'Library Overview'
};

export default async function LibraryOverviewPage({
  params
}: {
  params: Promise<{ library: Library }>;
}) {
  const { library } = await params;
  metadata.title = LIBRARIES[library]?.label ?? 'Library Overview';

  return <LibraryOverviewRenderer library={library} />;
}
