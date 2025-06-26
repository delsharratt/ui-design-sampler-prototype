import { Library } from '@/core/system/uiLibraries';

import DaisyButton, { DaisyButtonProps } from './daisy';
import MaterialButton, { MaterialButtonProps } from './material';
import ShadcnButton, { ShadcnButtonProps } from './shadcn';

/* Shared Button Props */
export interface ButtonProps {
  library: Library;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
}

/* Shared Button Props */
export type UnifiedButtonProps = DaisyButtonProps | MaterialButtonProps | ShadcnButtonProps;

const buttonComponents: Record<Library, React.FC<any>> = {
  daisy: DaisyButton,
  shadcn: ShadcnButton,
  material: MaterialButton
};

/*
 * ---- DEFAULT COMPONENT EXPORT ----
 */
export default function ButtonRenderer({
  library,
  ...props
}: { library: Library } & UnifiedButtonProps) {
  const Component = buttonComponents[library];
  return <Component {...props} />;
}
