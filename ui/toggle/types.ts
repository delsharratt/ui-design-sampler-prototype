import { ElementColor } from "@/core/constants/daisy";
import { ButtonSize } from "../button/types";

/* 
See documentation https://daisyui.com/components/toggle/
All class names include a hyphenated "toggle" prefix
*/

export interface ToggleProps {
    label?: string | null;
    color?: ElementColor;
    size?: ButtonSize;
    disabled?: boolean;
    simple: boolean;
}