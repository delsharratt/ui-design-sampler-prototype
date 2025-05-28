import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedSelectProps } from '.';
import { DaisySelectProps } from './daisy';
import DaisySelectForm from './daisy/form';
import { MaterialSelectProps } from './material';
import MaterialSelectForm from './material/form';
import { ShadcnSelectProps } from './shadcn';
import ShadcnSelectForm from './shadcn/form';

export default function SelectFormRenderer(props: UnifiedSelectProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisySelectForm {...(rest as DaisySelectProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialSelectForm {...(rest as MaterialSelectProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnSelectForm {...(rest as ShadcnSelectProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
