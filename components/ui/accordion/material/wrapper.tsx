'use client';

import React, { useEffect, useState } from 'react';
import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import MaterialAccordion from './index';
import { MaterialAccordionProps } from './types';
import { MATERIAL_TRANSITIONS, MaterialTransitionId } from '../../../../core/constants/material';
import { FormField } from '@/components/shared/form/useFormMap';
import { FormColumnPanel } from '@/components/shared/layout/FormColumnPanel';

export default function MaterialAccordionWrapper({ }: MaterialAccordionProps) {
    const [expanded, setExpanded] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [transition, setTransition] = useState<MaterialTransitionId>('none'); // Static default

    useEffect(() => {
        // Dynamically set the transition after hydration
        const firstTransition = Object.keys(MATERIAL_TRANSITIONS)[0] as MaterialTransitionId;
        setTransition(firstTransition);
    }, []);

    const DropdownFields: FormField[] = [
        {
            type: 'dropdown',
            label: 'Transition',
            value: transition,
            options: Object.keys(MATERIAL_TRANSITIONS),
            onChange: (e) => setTransition(e.target.value)
        },
    ];

    const ToggleFields: FormField[] = [
        {
            type: 'toggle',
            label: 'Join Items',
            value: expanded,
            onChange: (e) => setExpanded(e.target.checked)
        },
        {
            type: 'toggle',
            label: 'Disabled',
            value: disabled,
            onChange: (e) => setDisabled(e.target.checked)
        },
    ];

    return (
        <>
            <div className="flex flex-row gap-4 w-full border-b border-neutral-400 pb-10">
                <FormColumnPanel size="2/3" fields={DropdownFields} />
                <FormColumnPanel size="1/3" fields={ToggleFields} />
            </div>

            {/* Render the Accordion */}
            <div className="flex justify-around mt-8 w-full">
                <MaterialAccordion
                    library={LIBRARY_IDS.MATERIAL}
                    disabled={disabled}
                />
            </div>

        </>
    );
}