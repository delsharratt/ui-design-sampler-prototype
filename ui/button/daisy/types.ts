/* 
*  ---- DAISY UI BUTTONS ----
*  See documentation https://daisyui.com/components/button/
*  All class names include a hyphenated "btn" prefix
*/

import { ElementColor } from "@/core/constants/daisy";
import { ButtonProps } from "../types";

export enum DaisyButtonVariant {
    Outline = 'outline',
    Dash = 'dash',
    Soft = 'soft',
    Ghost = 'ghost',
    Link = 'link'
}

export enum DaisyButtonBehavior {
    Active = 'active',
    Disabled = 'disabled'
}

export enum DaisyButtonSize {
    ExtraSmall = 'xs',
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    ExtraLarge = 'xl'
}

export enum DaisyButtonModifier {
    Wide = 'wide',
    Square = 'square',
    Circle = 'circle'
}

export interface DaisyButtonProps extends ButtonProps {
    size?: DaisyButtonSize;
    variant?: DaisyButtonVariant;
    color?: ElementColor;
}