import { useQuery } from '@tanstack/react-query';
import {  getLayers } from '../functions/layers';

export function useLayers() {
  return useQuery({
    queryKey: ['layers'],
    queryFn: () => getLayers(),
  });
}
