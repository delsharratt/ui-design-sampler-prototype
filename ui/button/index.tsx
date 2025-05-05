import { LIBRARIES, Library } from '@/core/system/uiLibraries';
import DaisyButton from './daisy';
import { ButtonProps } from './types';

interface RenderProps extends ButtonProps {
    library: Library;
}

export default function ButtonRenderer(props: RenderProps) {
    const { library, ...rest } = props;

    switch (library) {
        case LIBRARIES.DAISY:
            return <DaisyButton {...rest} />;
        default:
            return null;
    }
}