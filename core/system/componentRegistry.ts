import ButtonRenderer from "@/ui/button";
import Accordion from "@/ui/daisy/Accordion";
import Toggle from "@/ui/daisy/Toggle";

export const COMPONENT_IDS = {
    Button: "button",
    Accordion: "accordion",
    Toggle: "toggle"
} as const;

export type ComponentId = (typeof COMPONENT_IDS)[keyof typeof COMPONENT_IDS];

// Replace others with renderer components once made to reflect button component setup
export const COMPONENT_REGISTRY = {
    [COMPONENT_IDS.Button]: ButtonRenderer,
    [COMPONENT_IDS.Accordion]: Accordion,
    [COMPONENT_IDS.Toggle]: Toggle,
};