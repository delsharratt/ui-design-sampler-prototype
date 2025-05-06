import { ElementColor } from "@/core/constants/daisy";
import { ButtonSize } from "../button/types";
import { ToggleProps } from "./types";
import clsx from "clsx";

export default function DaisyToggle({
    label = null,
    color = ElementColor.Primary,
    size = ButtonSize.Medium,
    disabled = false,
    simple = false,
    ...rest
}: React.HTMLAttributes<HTMLElement> & ToggleProps) {
    const toggleStyles = clsx(
        "toggle",
        [ // Styled based on props
            color && `toggle-${color}`,
            size && `toggle-${size}`
        ],
        rest.className, // Allow additional classes to be passed in
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