/* 
*  ---- DAISY UI BUTTONS ----
*  See documentation https://daisyui.com/components/button/
*  All class names include a hyphenated "btn" prefix
*/

import { DaisyElementColor, DaisyElementSize } from "@/core/constants/daisy";
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

export enum DaisyButtonModifier {
    Wide = 'wide',
    Block = 'block', // full width
    Square = 'square',
    Circle = 'circle'
}

export interface DaisyButtonProps extends ButtonProps {
    size?: DaisyElementSize;
    color?: DaisyElementColor;
    variant?: DaisyButtonVariant;
    modifier?: DaisyButtonModifier | null;
    icon?: boolean;
    iconOnly?: boolean;
}