import AccordionRenderer from "@/components/ui/accordion";
import AccordionWrapperRenderer from "@/components/ui/accordion/wrapper";
import ButtonRenderer from "@/components/ui/button";
import ButtonWrapperRenderer from "@/components/ui/button/wrapper";
import Toggle from "@/components/ui/toggle";
import ToggleWrapperRenderer from "@/components/ui/toggle/wrapper";

export const COMPONENT_IDS = {
    Button: "button",
    Accordion: "accordion",
    Toggle: "toggle"
} as const;

export type ComponentId = (typeof COMPONENT_IDS)[keyof typeof COMPONENT_IDS];

// Replace others with renderer components once made to reflect button component setup
export const COMPONENT_REGISTRY = {
    [COMPONENT_IDS.Button]: ButtonRenderer,
    [COMPONENT_IDS.Accordion]: AccordionRenderer,
    [COMPONENT_IDS.Toggle]: Toggle,
};

export const COMPONENT_WRAPPER_REGISTRY = {
    [COMPONENT_IDS.Button]: ButtonWrapperRenderer,
    [COMPONENT_IDS.Accordion]: AccordionWrapperRenderer,
    [COMPONENT_IDS.Toggle]: ToggleWrapperRenderer,
};