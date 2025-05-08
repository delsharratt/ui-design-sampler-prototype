import { ElementColor } from "@/core/constants/daisy";
import { ToggleProps } from "../types";

/* 
See documentation https://daisyui.com/components/toggle/
All class names include a hyphenated "toggle" prefix
*/

export enum DaisyToggleSize {
    ExtraSmall = 'xs',
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    ExtraLarge = 'xl'
}

export interface DaisyToggleProps extends ToggleProps {
    label?: string;
    color?: ElementColor;
    size?: DaisyToggleSize;
    disabled?: boolean;
    simple?: boolean;
}