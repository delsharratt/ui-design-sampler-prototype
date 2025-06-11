import type { ComponentProps } from 'react';

import ShadcnSelect from '../ui/select/shadcn';

export function Select(props: ComponentProps<typeof ShadcnSelect>) {
  return <ShadcnSelect {...props} />;
}
