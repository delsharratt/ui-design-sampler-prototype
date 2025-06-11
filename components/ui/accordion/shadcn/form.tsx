'use client';

import { AccordionSingleProps } from '@radix-ui/react-accordion';
import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/FormField';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';

import { LIBRARY_IDS } from '../../../../core/system/uiLibraries';
import ShadcnAccordion, {
  accordionItems,
  ShadcnAccordionOrientation
  // ShadcnAccordionType
} from '.';

export default function ShadcnAccordionForm({}: AccordionSingleProps) {
  // const [type, setType] = useState<ShadcnAccordionType>(ShadcnAccordionType.Single);
  const [defaultValue, setDefaultValue] = useState('item-1');
  const [orientation, setOrientation] = useState<ShadcnAccordionOrientation>('horizontal');
  const [collapsible, setCollapsible] = useState(false);
  const [triggerIcon, setTriggerIcon] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const DropdownFields: FormField[] = [
    // {
    //   type: 'dropdown',
    //   label: 'Type',
    //   value: type,
    //   options: Object.values(ShadcnAccordionType),
    //   onChange: (e) => setType(e.target.value)
    // },
    {
      type: 'dropdown',
      label: 'Default Value',
      value: defaultValue,
      options: Object.values(accordionItems).map((item) => item.value),
      onChange: (e) => setDefaultValue(e.target.value)
    },
    {
      type: 'dropdown',
      label: 'Direction',
      value: orientation,
      options: ['horizontal', 'vertical'], //TODO: use enum
      onChange: (e) => setOrientation(e.target.value)
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Collapsible',
      value: collapsible,
      onChange: (e) => setCollapsible(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Icon',
      value: triggerIcon,
      onChange: (e) => setTriggerIcon(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Disabled',
      value: disabled,
      onChange: (e) => setDisabled(e.target.checked)
    }
  ];

  return (
    <>
      <FormWrapper>
        <FormColumnPanel size="2/3" fields={DropdownFields} />
        <FormColumnPanel size="1/3" fields={ToggleFields} />
      </FormWrapper>

      {/* Render the Accordion */}
      <div className="flex justify-around mt-8 w-full">
        {/* TODO: implement dynamic type */}
        <ShadcnAccordion
          library={LIBRARY_IDS.SHADCN}
          type="single"
          defaultValue={defaultValue}
          disabled={disabled}
        />
      </div>
    </>
  );
}
