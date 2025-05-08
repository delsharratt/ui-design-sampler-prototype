import { MaterialButtonSize, MaterialButtonVariant, MaterialButtonColor } from './material/types';
import { DaisyButtonSize, DaisyButtonVariant } from './daisy/types';
import { ElementColor } from '@/core/constants/daisy';

export const DEFAULT_BUTTON_PROPS = {
    daisy: {
        variant: DaisyButtonVariant.Outline,
        size: DaisyButtonSize.Medium,
        color: ElementColor.Primary,
        disabled: false,
    },
    material: {
        variant: MaterialButtonVariant.Contained,
        size: MaterialButtonSize.Medium,
        color: MaterialButtonColor.Primary,
        disabled: false,
    },
} as const;

export const BUTTON_VARIANT_OPTIONS = {
    daisy: DaisyButtonVariant,
    material: MaterialButtonVariant,
}

export const BUTTON_SIZE_OPTIONS = {
    daisy: DaisyButtonSize,
    material: MaterialButtonSize,
}

export const BUTTON_COLOR_OPTIONS = {
    daisy: ElementColor,
    material: MaterialButtonColor
}
