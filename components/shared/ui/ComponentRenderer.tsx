import { Library } from '@/core/system/uiLibraries';

type ComponentMap = Record<Library, React.ComponentType<any>>;

interface GenericComponentRendererProps {
  library: Library;
  componentMap: ComponentMap;
  props?: Record<string, any>;
  items?: any;
}

export function ComponentRenderer({
  library,
  componentMap,
  props = {},
  items
}: GenericComponentRendererProps) {
  const Component = componentMap[library];
  return <Component {...props} items={items} />;
}
