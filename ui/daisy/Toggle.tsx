import { ElementColor } from "@/core/constants/daisy/color";

export default function Toggle({
    label,
    color = ElementColor.Primary,
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    label: string;
    color?: ElementColor;
}) {
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