import React from 'react';
import { Library } from '@/core/system/uiLibraries';
import MaterialThemeProvider from './MaterialThemeProvider';
import ShadcnThemeProvider from './ShadcnThemeProvider';
import { DaisyThemeProvider } from './DaisyThemeProvider';

const ThemeProviderMap: Record<Library, React.FC<{ children: React.ReactNode }>> = {
    material: MaterialThemeProvider,
    daisy: DaisyThemeProvider,
    shadcn: ShadcnThemeProvider,
};

export default function LibraryThemeProvider({
    library,
    children,
}: {
    library: Library;
    children: React.ReactNode;
}) {
    const ThemeProvider = ThemeProviderMap[library] || React.Fragment; // Default to no provider if library is not found

    return <ThemeProvider>{children}</ThemeProvider>;
}

