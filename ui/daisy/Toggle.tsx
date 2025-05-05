import { ElementColor } from "@/core/constants/daisy/color";
import { ButtonSize } from "../button/types";

/* 
See documentation https://daisyui.com/components/toggle/
*/
interface ToggleProps {
    label?: string | null;
    color?: ElementColor;
    size?: ButtonSize;
}

export default function Toggle({
    label = null,
    color = ElementColor.Primary,
    size = ButtonSize.Medium,
    ...rest
}: React.HTMLAttributes<HTMLElement> & ToggleProps) {
    return (
        <fieldset className="fieldset border-base-300 rounded-box w-64 border p-4">
            <legend className="fieldset-legend">{label}</legend>
            <label className="label gap-4">
                <input type="checkbox" defaultChecked className="toggle" />
                Remember me
            </label>
        </fieldset>
    );
}