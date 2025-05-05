import clsx from 'clsx';
import { ElementColor } from "@/core/constants/daisy/color";
import { ButtonProps, ButtonSize, ButtonStyle } from "./types";

/* 
See documentation https://daisyui.com/components/button/
*/
export default function DaisyButton({
    label,
    style = ButtonStyle.Outline,
    size = ButtonSize.Medium,
    color = ElementColor.Primary,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {

    const buttonStyles = clsx(
        "btn",
        style && `btn-${style}`,
        size && `btn-${size}`,
        color && `btn-${color}`
    );

    return (
        <button className={buttonStyles} {...rest}>{label}</button>
    );
}