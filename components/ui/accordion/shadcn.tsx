'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { FormFieldConfig } from '@/components/shared/form/FormField';
import { cn } from '@/lib/utils';

import { AccordionProps } from './componentRegistry';

/*
 * See documentation https://ui.shadcn.com/docs/components/accordion
 * Radix Primitive https://www.radix-ui.com/primitives/docs/components/accordion
 */

// Static accordion items data for rendering
// This can be replaced with dynamic data or props as needed
export const accordionItems = [
  {
    value: 'item-1',
    trigger: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    value: 'item-2',
    trigger: 'Is it styled?',
    content: "Yes. It comes with default styles that match the other components' aesthetic."
  },
  {
    value: 'item-3',
    trigger: 'Is it animated?',
    content: "Yes. It's animated by default, but you can disable it if you prefer."
  }
];

export enum ShadcnAccordionType {
  Single = 'single',
  Multiple = 'multiple'
}
// export type AccordionType = 'single' | 'multiple';
export type ShadcnAccordionOrientation = 'horizontal' | 'vertical';

export type ShadcnAccordionRootProps =
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps;

export type ShadcnAccordionProps = AccordionProps &
  ShadcnAccordionRootProps & {
    items: typeof accordionItems;
    // type?: AccordionType; // TODO: troubleshoot type error
    defaultValue?: string;
    orientation?: ShadcnAccordionOrientation;
    collapsible?: boolean;
    value?: string;
    triggerIcon?: boolean;
    // onChange?: (value: string) => void;
    disabled?: boolean;
  };

/*
 * ---- FORM CONFIGURATION ----
 */
export const shadcnAccordionFields: FormFieldConfig[] = [
  // {
  //   type: 'dropdown',
  //   label: 'Type',
  //   prop: 'type',
  //   options: Object.values(ShadcnAccordionType),
  //   default: ShadcnAccordionType.Single
  // },
  {
    type: 'dropdown',
    label: 'Default Value',
    prop: 'defaultValue',
    options: Object.values(accordionItems).map((item) => item.value),
    default: 'item-1'
  },
  {
    type: 'dropdown',
    label: 'Direction',
    prop: 'orientation',
    options: ['horizontal', 'vertical'], //TODO: use enum
    default: 'horizontal'
  },
  {
    type: 'toggle',
    label: 'Collapsible',
    prop: 'collapsible',
    default: false
  },
  {
    type: 'toggle',
    label: 'Icon',
    prop: 'triggerIcon',
    default: true
  },
  {
    type: 'toggle',
    label: 'Disabled',
    prop: 'disabled',
    default: false
  }
];

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function ShadcnAccordion({
  // items = accordionItems,
  // type = AccordionType.Single,
  defaultValue = 'item-1',
  orientation = 'vertical',
  collapsible = false,
  triggerIcon = true,
  // onChange,
  disabled = false
}: ShadcnAccordionProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <Accordion
        type="single"
        defaultValue={defaultValue}
        collapsible={collapsible}
        orientation={orientation}
        disabled={disabled}
        className="w-full"
      >
        {accordionItems.map((item) => (
          <AccordionItem key={item.value} value={item.value} disabled={disabled}>
            <AccordionTrigger icon={triggerIcon}>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

/*
 * ---- SHADCN ACCORDION COMPONENT PRIMITIVES ----
 * These are the lower-level building blocks used by the default export above.
 * Most are direct wrappers around @radix-ui/react-accordion primitives,
 * with added styling, props, and utility for use in custom accordion UIs.
 */

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> & {
  disabled?: boolean;
};

function AccordionItem({ className, disabled, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      disabled={disabled}
      {...props}
    />
  );
}

type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  icon?: boolean;
};

function AccordionTrigger({ className, children, icon = false, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all ' +
            'outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        {icon && (
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
