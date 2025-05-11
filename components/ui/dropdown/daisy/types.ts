/* 
See documentation @link https://daisyui.com/components/dropdown/
All class names include a hyphenated "dropdown" prefix
*/

import { DropdownProps } from "../types";

export enum DaisyDropdownAlignment {
    Start = 'start',
    Center = 'center',
    End = 'end',
}

export enum DaisyDropdownDirection {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right'
}

export enum DaisyDropdownModifier {
    Hover = 'hover',
    Open = 'open' // force open
}

export interface DaisyDropdownProps extends DropdownProps {
    alignment?: DaisyDropdownAlignment;
    direction?: DaisyDropdownDirection;
    modifier?: DaisyDropdownModifier | null;
}