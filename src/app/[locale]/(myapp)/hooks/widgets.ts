import { useQuery } from '@tanstack/react-query';
import { getWidget, getWidgets } from '../functions/widgets';

export function useWidgets() {
  return useQuery({
    queryKey: ['widgets'],
    queryFn: () => getWidgets(),
  });
}

export function useDetailWidget(uuid: string) {
  return useQuery({
    queryKey: ['widget', uuid],
    queryFn: () => getWidget(uuid),
  });
}