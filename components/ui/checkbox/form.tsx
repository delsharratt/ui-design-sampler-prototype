import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedCheckboxProps } from '.';
import { DaisyCheckboxProps } from './daisy';
import DaisyCheckboxForm from './daisy/form';
import { MaterialCheckboxProps } from './material';
import MaterialCheckboxForm from './material/form';
import { ShadcnCheckboxProps } from './shadcn';
import ShadcnCheckboxForm from './shadcn/form';

export default function CheckboxFormRenderer(props: UnifiedCheckboxProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyCheckboxForm {...(rest as DaisyCheckboxProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialCheckboxForm {...(rest as MaterialCheckboxProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnCheckboxForm {...(rest as ShadcnCheckboxProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
