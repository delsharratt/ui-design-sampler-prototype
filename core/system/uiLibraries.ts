// Which libraries are globally supported in the app
export const LIBRARY_IDS = {
    MATERIAL: 'material',
    SHADCN: 'shadcn',
    DAISY: 'daisy',
    // BOOTSTRAP: 'bootstrap',
    // TAILWIND: 'tailwind',
    // CHAKRA: 'chakra',
    // FLOWBITE: 'flowbite',
    // ANT_DESIGN: 'ant-design',
} as const;

export type Library = (typeof LIBRARY_IDS)[keyof typeof LIBRARY_IDS];

// Data map with display labels and future metadata
export const LIBRARIES: Record<Library, { label: string }> = {
    [LIBRARY_IDS.MATERIAL]: { label: 'Material UI' },
    [LIBRARY_IDS.SHADCN]: { label: 'shadcn/ui' },
    [LIBRARY_IDS.DAISY]: { label: 'DaisyUI' },
};
