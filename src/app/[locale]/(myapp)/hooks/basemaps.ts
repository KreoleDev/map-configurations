import { useQuery } from '@tanstack/react-query';
import { getBasemaps } from '../functions/basemaps';

export function useBasemaps() {
  return useQuery({
    queryKey: ['basemaps'],
    queryFn: () => getBasemaps(),
  });
}