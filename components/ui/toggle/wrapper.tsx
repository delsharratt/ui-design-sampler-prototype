import { LIBRARY_IDS } from '@/core/system/uiLibraries';

import { UnifiedToggleProps } from '.';
import { DaisyToggleProps } from './daisy';
import DaisyToggleWrapperRenderer from './daisy/wrapper';
import { MaterialToggleProps } from './material';
import MaterialToggleWrapperRenderer from './material/wrapper';

export default function ToggleWrapperRenderer(props: UnifiedToggleProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyToggleWrapperRenderer {...(rest as DaisyToggleProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialToggleWrapperRenderer {...(rest as MaterialToggleProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
