import type { ComponentProps } from 'react';

import { ShadcnToggle } from '../ui/toggle/shadcn';

export function Toggle(props: ComponentProps<typeof ShadcnToggle>) {
  return <ShadcnToggle {...props} />;
}
