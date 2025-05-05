import { ElementColor } from "@/core/constants/daisy";
import { ButtonSize } from "../button/types";
import { ToggleProps } from "./types";

export default function DaisyToggle({
    label = null,
    color = ElementColor.Primary,
    size = ButtonSize.Medium,
    ...rest
}: React.HTMLAttributes<HTMLElement> & ToggleProps) {
    return (
        <fieldset className="fieldset border-base-300 rounded-box w-64 border p-4">
            <legend className="fieldset-legend capitalize">{label}</legend>
            <label className="label gap-4">
                <input type="checkbox" defaultChecked className="toggle" />
                Remember me
            </label>
        </fieldset>
    );
}