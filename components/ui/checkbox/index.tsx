import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';

import ShadcnCheckbox, { ShadcnCheckboxProps } from './shadcn';

/* Shared Checkbox Props */
export interface CheckboxProps {
  library: Library;
  label?: string;
  open?: boolean;
}

/* Unified Checkbox Props */
export type UnifiedCheckboxProps = ShadcnCheckboxProps;
// export type UnifiedDropdownProps = DaisyCheckboxProps | MaterialCheckboxProps | ShadcnCheckboxProps;

export default function CheckboxRenderer(props: UnifiedCheckboxProps) {
  const { library, ...rest } = props;

  switch (library) {
    // case LIBRARY_IDS.DAISY:
    //   return <DaisyCheckbox {...(rest as DaisyCheckboxProps)} />;
    // case LIBRARY_IDS.MATERIAL:
    //   return <MaterialCheckbox {...(rest as MaterialCheckboxProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnCheckbox {...(rest as ShadcnCheckboxProps)} />;
    default:
      throw new Error(`Unsupported in library: ${library}`);
  }
}
