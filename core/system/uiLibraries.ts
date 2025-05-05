// Which libraries are globally supported in the app
export const LIBRARIES = {
    DAISY: 'daisy',
    MATERIAL: 'material',
    // SHADCN: 'shadcn',
} as const;

export type Library = (typeof LIBRARIES)[keyof typeof LIBRARIES];
