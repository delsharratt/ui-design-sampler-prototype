'use client';

import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedAccordionProps } from '..';
import { ACCORDION_SAMPLE_DATA } from '../config';
import DaisyAccordion, { DaisyAccordionModifier } from '.';

export default function DaisyAccordionWrapper({}: UnifiedAccordionProps) {
  const [modifier, setModifier] = useState<DaisyAccordionModifier>(DaisyAccordionModifier.Arrow);
  const [join, setJoin] = useState(false);

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Modifier',
      value: modifier,
      options: Object.values(DaisyAccordionModifier),
      onChange: (e) => setModifier(e.target.value as DaisyAccordionModifier)
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Join Items',
      value: join,
      onChange: (e) => setJoin(e.target.checked)
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
        <DaisyAccordion
          library={LIBRARY_IDS.DAISY}
          items={ACCORDION_SAMPLE_DATA}
          modifier={modifier}
          join={join}
        />
      </div>
    </>
  );
}
