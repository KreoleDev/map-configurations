import { useQuery } from '@tanstack/react-query';
import { getBasemap, getBasemaps } from '../functions/basemaps';

export function useBasemaps() {
  return useQuery({
    queryKey: ['basemaps'],
    queryFn: () => getBasemaps(),
  });
}

export function useDetailBasemap(id: string) {
  return useQuery({
    queryKey: ['basemap', id],
    queryFn: () => getBasemap(id),
  });
}