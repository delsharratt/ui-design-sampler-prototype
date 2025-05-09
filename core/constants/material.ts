import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import { createTheme } from '@mui/material/styles';

// This is the default theme for Material UI components
export const materialDarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export enum MaterialComponentColor {
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

// !!! SIDE MISSION BELOW, REEVALUATE AT LATER TIME

// See documentation @link https://mui.com/material-ui/transitions/
export const MATERIAL_TRANSITIONS = {
    none: {
        label: 'None',
        description: 'No transition applied.',
        Component: undefined,
        props: {},
    },
    fade: {
        label: 'Fade',
        description: 'Fades in or out a component.',
        Component: Fade,
        props: {
            appear: true
        },
    },
    grow: {
        label: 'Grow',
        description: 'Expands in size from a point of origin.',
        Component: Grow,
        props: {
            appear: true
        },
    },
    slide: {
        label: 'Slide',
        description: 'Slides in from a direction.',
        Component: Slide,
        props: {
            // container: HTMLElement, // Determine how to set this?
            direction: 'up', // 'up' | 'down' | 'left' | 'right'
        },
    },
    zoom: {
        label: 'Zoom',
        description: 'Zooms in or out.',
        Component: Zoom,
        props: {
            appear: true
        },
    },
} as const;

export type MaterialTransitionId = keyof typeof MATERIAL_TRANSITIONS;

export interface MaterialTransitionProps {
    easing?: {
        enter?: string,
        exit?: string
    } | string,
    in?: boolean,
    orientation?: 'horizontal' | 'vertical',
    timeout?: 'auto' | number | {
        appear?: number,
        enter?: number,
        exit?: number
    }
}

export function getAvailableTransitionProps(id: MaterialTransitionId) {
    return MATERIAL_TRANSITIONS[id].props;
}