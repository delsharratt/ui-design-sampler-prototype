import { Library } from "@/core/system/uiLibraries";
import { DaisyToggleProps } from "./daisy/types";

/* Shared Button Props */
export interface ToggleProps {
    library: Library;
    label?: string;
    active?: boolean;
}

/* Unified Toggle Props */
export type UnifiedToggleProps = DaisyToggleProps; // TODO: add MaterialToggleProps when available