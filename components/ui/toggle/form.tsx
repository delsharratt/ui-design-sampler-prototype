import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedToggleProps } from '.';
import { DaisyToggleProps } from './daisy';
import DaisyToggleForm from './daisy/form';
import { MaterialToggleProps } from './material';
import MaterialToggleForm from './material/form';
import { ShadcnToggleProps } from './shadcn';
import ShadcnToggleForm from './shadcn/form';

export default function ToggleFormRenderer(props: UnifiedToggleProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyToggleForm {...(rest as DaisyToggleProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialToggleForm {...(rest as MaterialToggleProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnToggleForm {...(rest as ShadcnToggleProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
