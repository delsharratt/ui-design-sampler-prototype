import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';

import DaisyButton from './daisy';
import { DaisyButtonProps } from './daisy';
import MaterialButton from './material';
import { MaterialButtonProps } from './material';
import ShadcnButton, { ShadcnButtonProps } from './shadcn';

/* Shared Button Props */
export interface ButtonProps {
  library: Library;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
}

/* Shared Button Props */
export type UnifiedButtonProps = DaisyButtonProps | MaterialButtonProps;

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function ButtonRenderer(props: UnifiedButtonProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyButton {...(rest as DaisyButtonProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialButton {...(rest as MaterialButtonProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnButton {...(rest as ShadcnButtonProps)} />;
    default:
      throw new Error(`Unsupported library: ${library}`);
  }
}
