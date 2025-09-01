import { useQuery } from '@tanstack/react-query';
import {  getLayer, getLayers } from '../functions/layers';
import { getGeometryType, getLayersType, getStatus, } from '../functions/configurations';
import { Layer } from '../types/global';

export function useLayers() {
  return useQuery<Layer[]>({
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

export function useLayersConfiguration() {
  const geometryTypeOptions = getGeometryType();
  const layersTypeOptions = getLayersType();
  const statusOptions = getStatus();

  return {
    geometryTypeOptions,
    layersTypeOptions,
    statusOptions
  };
}


