import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedSelectProps } from '.';
import { DaisySelectProps } from './daisy';
import DaisySelectWrapperRenderer from './daisy/wrapper';
import { MaterialSelectProps } from './material';
import MaterialSelectWrapperRenderer from './material/wrapper';
import { ShadcnSelectProps } from './shadcn';
import ShadcnSelectWrapperRenderer from './shadcn/wrapper';

export default function SelectWrapperRenderer(props: UnifiedSelectProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisySelectWrapperRenderer {...(rest as DaisySelectProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialSelectWrapperRenderer {...(rest as MaterialSelectProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnSelectWrapperRenderer {...(rest as ShadcnSelectProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
