import { useQuery } from '@tanstack/react-query';
import { getWidget, getWidgets } from '../functions/widgets';

export function useWidgets() {
  return useQuery({
    queryKey: ['widgets'],
    queryFn: () => getWidgets(),
  });
}

export function useDetailWidget(id: string) {
  return useQuery({
    queryKey: ['widget', id],
    queryFn: () => getWidget(id),
  });
}