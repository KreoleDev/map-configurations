import { useQuery } from '@tanstack/react-query';
import { getWidgets } from '../functions/widgets';

export function useWidgets() {
  return useQuery({
    queryKey: ['widgets'],
    queryFn: () => getWidgets(),
  });
}