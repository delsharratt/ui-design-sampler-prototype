/* 
See documentation https://daisyui.com/components/toggle/
All class names include a hyphenated "toggle" prefix
*/

import { DaisyElementColor, DaisyElementSize } from "@/core/constants/daisy";
import { ToggleProps } from "../types";

export interface DaisyToggleProps extends ToggleProps {
    label?: string;
    size?: DaisyElementSize;
    color?: DaisyElementColor;
    disabled?: boolean;
    simple?: boolean;
}