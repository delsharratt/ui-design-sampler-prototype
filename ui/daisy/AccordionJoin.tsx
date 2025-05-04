import { AccordionModifier } from '@/core/constants/daisy/accordion'
import Accordion from './daisy/Accordion';

export default function AccordionJoin({
    label,
    modifier,
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    label: string;
    modifier?: AccordionModifier;
}) {
    return (
        <div className="join join-vertical bg-base-100">
            <Accordion label={label} />
        </div>
    );
}