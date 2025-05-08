import { ElementColor } from "@/core/constants/daisy";
import { DaisyToggleProps, DaisyToggleSize } from "./types";
import clsx from "clsx";

export default function DaisyToggle({
    label = "Toggle",
    color = ElementColor.Primary,
    size = DaisyToggleSize.Medium,
    disabled = false,
    simple = false,
    ...rest
}: React.HTMLAttributes<HTMLElement> & DaisyToggleProps) {
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