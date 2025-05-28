import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedButtonProps } from '.';
import { DaisyButtonProps } from './daisy';
import DaisyButtonForm from './daisy/form';
import { MaterialButtonProps } from './material';
import MaterialButtonForm from './material/form';
import { ShadcnButtonProps } from './shadcn';
import ShadcnButtonForm from './shadcn/form';

export default function ButtonFormRenderer(props: UnifiedButtonProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyButtonForm {...(rest as DaisyButtonProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialButtonForm {...(rest as MaterialButtonProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnButtonForm {...(rest as ShadcnButtonProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
