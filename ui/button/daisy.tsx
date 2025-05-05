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
        [ // Styled based on props
            style && `btn-${style}`,
            size && `btn-${size}`,
            color && `btn-${color}`,
        ],
        rest.className, // Allow additional classes to be passed in
        {
            "btn-disabled": rest.disabled, // Apply disabled class if button is disabled
            "loading": rest.disabled // Show loading spinner if button is disabled
        }
    );

    return (
        <button className={buttonStyles} {...rest}>{label}</button>
    );
}