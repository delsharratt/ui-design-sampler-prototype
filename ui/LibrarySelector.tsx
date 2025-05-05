'use client';

import { LIBRARIES, Library } from '@/core/system/uiLibraries';
import { useLibrary } from '@/core/system/useLibrary';

export default function LibrarySelector() {
    const { library, changeLibrary } = useLibrary();

    return (
        <select
            value={library}
            defaultValue=""
            onChange={(e) => changeLibrary(e.target.value as Library)}
            className="select"
        >
            <option value="" disabled></option>
            {Object.entries(LIBRARIES).map(([key, { label }]) => (
                <option key={key} value={key}>
                    {label}
                </option>
            ))}
        </select>
    );
}