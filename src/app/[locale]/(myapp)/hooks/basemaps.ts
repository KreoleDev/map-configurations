import { useQuery } from '@tanstack/react-query';
import { getBasemap, getBasemaps } from '../functions/basemaps';

export function useBasemaps() {
  return useQuery({
    queryKey: ['basemaps'],
    queryFn: () => getBasemaps(),
  });
}

export function useDetailBasemap(uuid: string) {
  return useQuery({
    queryKey: ['basemap', uuid],
    queryFn: () => getBasemap(uuid),
  });
}