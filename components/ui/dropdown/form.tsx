import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedDropdownProps } from '.';
import { DaisyDropdownProps } from './daisy';
import DaisyDropdownForm from './daisy/form';
import { MaterialDropdownProps } from './material';
import MaterialDropdownForm from './material/form';
import { ShadcnDropdownProps } from './shadcn';
import ShadcnDropdownForm from './shadcn/form';

export default function DropdownFormRenderer(props: UnifiedDropdownProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyDropdownForm {...(rest as DaisyDropdownProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialDropdownForm {...(rest as MaterialDropdownProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnDropdownForm {...(rest as ShadcnDropdownProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
