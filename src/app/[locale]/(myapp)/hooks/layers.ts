import { useQuery } from '@tanstack/react-query';
import {  getLayer, getLayers } from '../functions/layers';

export function useLayers() {
  return useQuery({
    queryKey: ['layers'],
    queryFn: () => getLayers(),
  });
}

export function useDetailLayer(uuid: string) {
  return useQuery({
    queryKey: ['layer', uuid],
    queryFn: () => getLayer(uuid),
  });
}