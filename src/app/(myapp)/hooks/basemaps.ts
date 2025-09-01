import { useQuery } from '@tanstack/react-query';
import { getBasemap, getBasemaps } from '../functions/basemaps';
import { getStatusFilter } from '../functions/configurations';
import { Basemap } from '../types/global';

export function useBasemaps() {
  return useQuery<Basemap[]>({
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

export function useBasemapsConfiguration() {
  const statusOptions = getStatusFilter();

  return {
    statusOptions
  };
}
