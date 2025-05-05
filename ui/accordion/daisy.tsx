import { AccordionItem, AccordionModifier, AccordionProps } from "./types";
import clsx from "clsx";

/* 
See documentation https://daisyui.com/components/accordion/
*/
export default function DaisyAccordion({
    items = [],
    modifier = AccordionModifier.Arrow,
    join = false,
    ...rest
}: React.HTMLAttributes<HTMLElement> & AccordionProps) {
    const wrapperClass = join ? "join join-vertical bg-base-100" : "flex flex-col gap-2"; // Apply "join" wrapper if enabled

    return (
        <div className={wrapperClass}>
            {items.map((item: AccordionItem, index: number) => (
                <div
                    key={index} // TODO: potentially look into changing background color and border by prop?
                    className={clsx(
                        `collapse collapse-${modifier} bg-base-100`,
                        { 'join-item': join } // Add 'join-item' class if join is true
                    )}
                >
                    <input type="radio" name="accordion-group" defaultChecked={index === 0} />
                    <div className="collapse-title font-semibold">{item.title}</div>
                    <div className="collapse-content text-sm">{item.content}</div>
                </div>
            ))}
        </div>
    );
}