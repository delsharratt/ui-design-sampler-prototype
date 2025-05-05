'use client';

import { LIBRARIES, Library } from '@/core/system/uiLibraries';
import { useLibrary } from '@/core/system/useLibrary';

export default function LibrarySelector() {
    const { library, changeLibrary } = useLibrary();

    return (
        <select
            value={library}
            onChange={(e) => changeLibrary(e.target.value as Library)}
            className="select"
        >
            <option value="">Select a Library</option>
            {Object.entries(LIBRARIES).map(([label, value]) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
}