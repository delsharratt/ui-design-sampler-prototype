import { DropdownAlignment, DropdownDirection, DropdownModifier } from '@/core/constants/daisy/dropdown';

/* 
See documentation https://daisyui.com/components/dropdown/
*/
export default function Dropdown({
    label,
    alignment = DropdownAlignment.Start,
    direction = DropdownDirection.Bottom,
    modifier = null,
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    label: string;
    alignment?: DropdownAlignment;
    direction?: DropdownDirection;
    modifier?: DropdownModifier | null;
}) {
    return (
        <>
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button className="btn" popoverTarget="popover-1" style={{ ['anchorName']: '--anchor-1' } as React.CSSProperties}>
                {label}
            </button>

            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ ['positionAnchor']: '--anchor-1' } as React.CSSProperties}>
                <li><a>DaisyUI</a></li>
                <li><a>ShadCN</a></li>
                <li><a>OnceUI</a></li>
                <li><a>MaterialUI</a></li>
                <li><a>Tailwind</a></li>
            </ul>
        </>
    );
}