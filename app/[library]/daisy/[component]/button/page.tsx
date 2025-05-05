import { ButtonStyle, ButtonSize } from '@/ui/button/types';
import type { Library } from '@/core/system/uiLibraries';
import { ElementColor } from '@/core/constants/daisy/color';
import ButtonRenderer from '@/ui/button';

export default function ButtonPage({
    params,
}: {
    params: { library: Library };
}) {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold capitalize">{params.library} Button</h1>
            <ButtonRenderer
                library={params.library}
                label="Click Me"
                style={ButtonStyle.Outline}
                size={ButtonSize.Medium}
                color={ElementColor.Primary}
            />
        </div>
    );
}
