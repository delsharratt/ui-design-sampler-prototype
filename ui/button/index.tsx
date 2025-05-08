import { LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyButton from './daisy';
import MaterialButton from './material';
import { UnifiedButtonProps } from './types';
import { DaisyButtonProps } from './daisy/types';
import { MaterialButtonProps } from './material/types';

export default function ButtonRenderer(props: UnifiedButtonProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyButton {...rest as DaisyButtonProps} />;
        case LIBRARY_IDS.MATERIAL:
            return <MaterialButton {...rest as MaterialButtonProps} />;
        default:
            throw new Error(`Unsupported library: ${library}`);
    }
}