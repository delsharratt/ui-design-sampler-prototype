/* 
See documentation @link https://daisyui.com/components/select/
All class names include a hyphenated "select" prefix
*/

import { DaisyElementColor, DaisyElementSize } from "@/core/constants/daisy";
import { SelectProps } from "../types";

export enum DaisySelectVariant {
    Ghost = 'ghost' // Only one style available
}

export interface DaisySelectProps extends SelectProps {
    size?: DaisyElementSize;
    color?: DaisyElementColor;
    variant?: DaisySelectVariant;
    fieldset?: boolean;
    hasLabel?: boolean;
    disabled?: boolean;
}