'use client';

import { SelectProps } from '@radix-ui/react-select';
import React, { useState } from 'react';

import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';
import FormWrapper from '@/components/shared/layout/FormWrapper';

import { ShadcnDropdownDirection } from '.';
import { ShadcnDropdownMenu } from '.';

// interface DropdownMenuProps {
//     children?: React.ReactNode;
//     dir?: Direction;
//     open?: boolean;
//     defaultOpen?: boolean;
//     onOpenChange?(open: boolean): void;
//     modal?: boolean;
// }

export default function ShadcnDropdownWrapperRenderer({}: SelectProps) {
  const [direction, setDirection] = useState<ShadcnDropdownDirection>(
    ShadcnDropdownDirection.LeftToRight
  );

  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(false);

  const DropdownFields: FormField[] = [
    {
      type: 'dropdown',
      label: 'Direction',
      value: direction,
      options: Object.values(ShadcnDropdownDirection),
      onChange: (e) => setDirection(e.target.value)
    }
  ];

  const ToggleFields: FormField[] = [
    {
      type: 'toggle',
      label: 'Modal',
      value: modal,
      onChange: (e) => setModal(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'Open',
      value: open,
      onChange: (e) => setOpen(e.target.checked)
    },
    {
      type: 'toggle',
      label: 'defaultOpen',
      value: defaultOpen,
      onChange: (e) => setDefaultOpen(e.target.checked)
    }
  ];

  return (
    <>
      <FormWrapper>
        <FormColumnPanel size="2/3" fields={DropdownFields} />
        <FormColumnPanel size="1/3" fields={ToggleFields} />
      </FormWrapper>

      {/* Render the Button */}
      <div className="flex justify-around mt-8 w-full">
        {/* TODO: IMPLEMENT PROPS AND CHILD PROP SUPPORT */}
        <ShadcnDropdownMenu />
      </div>
    </>
  );
}
