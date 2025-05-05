import { ElementColor } from "@/core/constants/daisy/color";


export type ButtonLibrary = 'daisy' | 'material'; // extend later

/* 
See documentation https://daisyui.com/components/button/
All class names include a hyphenated "btn" prefix
*/

export interface ButtonProps {
    label: string;
    style?: ButtonStyle;
    size?: ButtonSize;
    color?: ElementColor;
    disabled?: boolean;
}

export enum ButtonStyle {
    Outline = 'outline',
    Dash = 'dash',
    Soft = 'soft',
    Ghost = 'ghost',
    Link = 'link'
}

export enum ButtonBehavior {
    Active = 'active',
    Disabled = 'disabled'
}

export enum ButtonSize {
    ExtraSmall = 'xs',
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    ExtraLarge = 'xl'
}

export enum ButtonModifier {
    Wide = 'wide',
    Square = 'square',
    Circle = 'circle'
}

