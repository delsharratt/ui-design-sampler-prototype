/* 
See documentation @link https://daisyui.com/components/dropdown/
All class names include a hyphenated "dropdown" prefix
*/

import { DaisyElementColor, DaisyElementSize } from "@/core/constants/daisy";
import { DropdownProps } from "../types";

export enum DropdownAlignment {
    Start = 'start',
    Center = 'center',
    End = 'end',
}

export enum DropdownDirection {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right'
}

export enum DropdownModifier {
    Hover = 'hover',
    Open = 'open' // force open
}

export interface DaisyDropdownProps extends DropdownProps {
    size?: DaisyElementSize;
    color?: DaisyElementColor;
    alignment?: DropdownAlignment;
    direction?: DropdownDirection;
    modifier?: DropdownModifier;
}