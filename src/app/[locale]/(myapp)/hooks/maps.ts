import { useQuery } from '@tanstack/react-query';
import { getMaps } from '../functions/maps';

export function useMaps() {
  return useQuery({
    queryKey: ['maps'],
    queryFn: () => getMaps(),
  });
}