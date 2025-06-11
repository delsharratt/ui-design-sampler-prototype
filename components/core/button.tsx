import type { ComponentProps } from 'react';

import ShadcnButton from '../ui/button/shadcn';

export function Button(props: ComponentProps<typeof ShadcnButton>) {
  return (
    <ShadcnButton
      {...props}
      className={`w-full ${props.className ?? ''}`}
      variant={props.variant ?? 'default'}
    />
  );
}
