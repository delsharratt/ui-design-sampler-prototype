import { ButtonSize, ButtonStyle } from "@/core/constants/daisy/button";
import { ElementColor } from "@/core/constants/daisy/color";

/* 
See documentation https://daisyui.com/components/button/
*/
interface ButtonProps {
    label: string;
    color?: ElementColor;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
}

export default function Button({
    label,
    color = ElementColor.Primary,
    size = ButtonSize.Medium,
    style = ButtonStyle.Outline,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {
    return (
        <button className="btn" {...rest}>{label}</button>
    );
}