import { Library } from "@/core/system/uiLibraries";
import { DaisyDropdownProps } from "./daisy/types";

export interface DropdownProps {
    library: Library;
    label?: string;
    active?: boolean;
}

/* Unified Dropdown Props */
export type UnifiedDropdownProps = DaisyDropdownProps; // TODO: add MaterialDropdownProps when available