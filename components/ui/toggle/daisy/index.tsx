/* 
See documentation https://daisyui.com/components/toggle/
All class names include a hyphenated "toggle" prefix
*/

import clsx from "clsx";
import { COMPONENT_IDS } from "@/core/system/componentRegistry";
import { DaisyElementColor, DaisyElementSize } from "@/core/constants/daisy";
import { ToggleProps } from "..";

export interface DaisyToggleProps extends ToggleProps {
    label?: string;
    size?: DaisyElementSize;
    color?: DaisyElementColor;
    disabled?: boolean;
    simple?: boolean;
}

/* 
* ---- DEFAULT COMPONENT EXPORT ----
*/
export default function DaisyToggle({
    label = COMPONENT_IDS.Toggle,
    color = DaisyElementColor.Primary,
    size = DaisyElementSize.Medium,
    simple = false,
    disabled = false
}: React.HTMLAttributes<HTMLElement> & DaisyToggleProps) {
    const toggleStyles = clsx(
        "toggle",
        [ // Styled based on props
            color && `toggle-${color}`,
            size && `toggle-${size}`
        ],
        "capitalize"
    );

    const toggleElement = (
        <input
            type="checkbox"
            defaultChecked
            className={toggleStyles}
            disabled={disabled}
        />
    );

    if (simple) {
        return toggleElement;
    }

    return (
        <fieldset className="fieldset bg-base-100 border-base-content rounded-box w-64 border p-4">
            <legend className="fieldset-legend capitalize">{label}</legend>
            <label className="label gap-4">
                {toggleElement}
                Remember me
            </label>
        </fieldset>
    );
}