import { useQuery } from '@tanstack/react-query';
import {  getLayer, getLayers } from '../functions/layers';

export function useLayers() {
  return useQuery({
    queryKey: ['layers'],
    queryFn: () => getLayers(),
  });
}

export function useDetailLayer(id: string) {
  return useQuery({
    queryKey: ['layer', id],
    queryFn: () => getLayer(id),
  });
}