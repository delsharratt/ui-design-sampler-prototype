import { Library, LIBRARY_IDS } from '@/core/system/uiLibraries';
import DaisyButton from './daisy';
import { ButtonProps } from './types';

interface RenderProps extends ButtonProps {
    library: Library;
}

export default function ButtonRenderer(props: RenderProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARY_IDS.DAISY:
            return <DaisyButton {...rest} />;
        default:
            return null;
    }
}