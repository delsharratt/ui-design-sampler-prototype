import { DaisyDropdownAlignment, DaisyDropdownDirection, DaisyDropdownProps } from "./types";
import clsx from "clsx";

/* 
See documentation https://daisyui.com/components/dropdown/
*/
export default function DaisyDropdown({
    label,
    alignment = DaisyDropdownAlignment.Start,
    direction = DaisyDropdownDirection.Bottom,
    modifier = null,
    ...rest
}: React.HTMLAttributes<HTMLElement> & DaisyDropdownProps) {


    const buttonStyles = clsx(
        "dropdown",
        [ // Styled based on props
            alignment && `dropdown-${alignment}`,
            direction && `dropdown-${direction}`,
            modifier && `btn-${modifier}`,
        ],
        rest.className, // Allow additional classes to be passed in
        "capitalize"
    );

    return (
        <>
            {/* NOTE: Anchor Positioning is a new standard but isn't yet supported in Firefox and Safari */}
            {/* Use unique names for each dropdown (values must match between button and ul) */}
            {/* For TSX uncomment the commented types below */}
            <button className="btn" popoverTarget="sample-dropdown"
                style={{ ['anchorName']: '--dropdown-anchor' } as React.CSSProperties}>
                {label}
            </button>

            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="sample-dropdown" style={{ ['positionAnchor']: '--dropdown-anchor' } as React.CSSProperties}>
                <li><a>DaisyUI</a></li>
                <li><a>ShadCN</a></li>
                <li><a>OnceUI</a></li>
                <li><a>MaterialUI</a></li>
                <li><a>Tailwind</a></li>
            </ul>
        </>
    );
}