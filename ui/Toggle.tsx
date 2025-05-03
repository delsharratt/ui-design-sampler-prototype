export enum ButtonColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Accent = 'accent',
    Neutral = 'neutral',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export default function Toggle({
    label,
    color = ButtonColor.Primary,
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    label: string;
    color?: ButtonColor;
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