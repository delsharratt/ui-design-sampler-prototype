'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

import { Library } from '@/core/system/uiLibraries';

export function useLibrary() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const library = params.library as Library;

  function changeLibrary(newLibrary: Library) {
    const parts = pathname.split('/');
    if (parts.length > 1) {
      parts[1] = newLibrary; // replace the current library in the URL
      router.push(parts.join('/'));
    }
  }

  return {
    library,
    changeLibrary,
    is: (target: Library) => library === target
  };
}
