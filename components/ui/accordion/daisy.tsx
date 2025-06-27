'use client';

import clsx from 'clsx';

import { FormFieldConfig } from '@/components/shared/form/FormField';

import { AccordionItem, AccordionProps } from './componentRegistry';

/*
 * See documentation https://daisyui.com/components/accordion/
 * All class names include a hyphenated "collapse" prefix
 */

export enum DaisyAccordionModifier {
  Arrow = 'arrow',
  Plus = 'plus',
  Open = 'open',
  Close = 'close'
}

export interface DaisyAccordionProps extends AccordionProps {
  modifier?: DaisyAccordionModifier;
  join?: boolean;
}

/*
 * ---- FORM CONFIGURATION ----
 */
export const daisyAccordionFields: FormFieldConfig[] = [
  {
    type: 'dropdown',
    label: 'Modifier',
    prop: 'modifier',
    options: Object.values(DaisyAccordionModifier),
    default: DaisyAccordionModifier.Arrow
  },
  {
    type: 'toggle',
    label: 'Join Items',
    prop: 'join',
    default: false
  }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function DaisyAccordion({
  staticData = [],
  modifier = DaisyAccordionModifier.Arrow,
  join = false
}: React.HTMLAttributes<HTMLElement> & DaisyAccordionProps) {
  const items = staticData as AccordionItem[];
  const wrapperClass = join ? 'join join-vertical bg-base-100' : 'flex flex-col gap-2'; // Apply "join" wrapper if enabled

  return (
    <div className={wrapperClass}>
      {items.map((item: AccordionItem, index: number) => (
        <div
          key={index} // TODO: potentially look into changing background color and border by prop?
          className={clsx(`collapse collapse-${modifier} bg-base-100`, { 'join-item': join })}
        >
          <input type="radio" name="accordion-group" defaultChecked={index === 0} />
          <div className="collapse-title font-semibold">{item.title}</div>
          <div className="collapse-content text-sm">{item.details}</div>
        </div>
      ))}
    </div>
  );
}
