'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { LIBRARIES, Library } from '@/core/system/uiLibraries';
import { useLibrary } from '@/core/system/useLibrary';

export default function LibrarySelector() {
  const { library, changeLibrary } = useLibrary();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.library && params.library !== library) {
      changeLibrary(params.library as Library);
    }
  }, [params.library, library, changeLibrary]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLibrary = e.target.value as Library;
    changeLibrary(selectedLibrary);
    router.push(`/${selectedLibrary}`); // Update the URL to reflect the selected library
  };

  return (
    <select value={library || ''} onChange={handleChange} className="select">
      <option value="" disabled>
        Select Library
      </option>
      {Object.entries(LIBRARIES).map(([key, { label }]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  );
}
