import type { ComponentProps } from 'react';

import ShadcnCheckbox from '../ui/checkbox/shadcn';

export function Checkbox(props: ComponentProps<typeof ShadcnCheckbox>) {
  return <ShadcnCheckbox {...props} />;
}
