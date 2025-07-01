import { Metadata } from 'next';

import LibraryOverview from '@/components/shared/ui/LibraryOverview';
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
  metadata.title = LIBRARIES[library]?.label ?? 'Library Overview';

  return <LibraryOverview library={library} />;
}
