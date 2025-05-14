import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';

import { DaisyDropdownProps } from './daisy';
import DaisyDropdown from './daisy';
import { MaterialDropdownProps } from './material';
import MaterialDropdown from './material';
import { ShadcnDropdownMenu } from './shadcn';

/* Shared Dropdown Props */
export interface DropdownProps {
  library: Library;
  label?: string;
  open?: boolean;
}

/* Unified Dropdown Props */
export type UnifiedDropdownProps = DaisyDropdownProps | MaterialDropdownProps;

export default function DropdownRenderer(props: UnifiedDropdownProps) {
  const { library, ...rest } = props;

  switch (library) {
    case LIBRARY_IDS.DAISY:
      return <DaisyDropdown {...(rest as DaisyDropdownProps)} />;
    case LIBRARY_IDS.MATERIAL:
      return <MaterialDropdown {...(rest as MaterialDropdownProps)} />;
    case LIBRARY_IDS.SHADCN:
      return <ShadcnDropdownMenu {...(rest as DropdownMenuProps)} />;
    default:
      throw new Error(`Unsupported in library: ${library}`);
  }
}
