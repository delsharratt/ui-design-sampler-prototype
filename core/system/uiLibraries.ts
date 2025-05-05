// Which libraries are globally supported in the app
export const LIBRARY_IDS = {
    DAISY: 'daisy',
    MATERIAL: 'material',
    // SHADCN: 'shadcn',
    // BOOTSTRAP: 'bootstrap',
    // TAILWIND: 'tailwind',
    // CHAKRA: 'chakra',
    // FLOWBITE: 'flowbite',
    // ANT_DESIGN: 'ant-design',
} as const;

export type Library = (typeof LIBRARY_IDS)[keyof typeof LIBRARY_IDS];

// Data map with display labels and future metadata
export const LIBRARIES: Record<Library, { label: string }> = {
    [LIBRARY_IDS.DAISY]: { label: 'DaisyUI' },
    [LIBRARY_IDS.MATERIAL]: { label: 'Material UI' },
};
