import { createTheme } from '@mui/material/styles';

// This is the default theme for Material UI components
export const materialDarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export enum MaterialComponentColor {
    Inherit = 'inherit',
    Standard = 'standard',
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
    Info = 'info',
    Warning = 'warning',
    Success = 'success',
}

export enum MaterialComponentSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}