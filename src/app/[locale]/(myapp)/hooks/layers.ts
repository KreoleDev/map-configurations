import { useQuery } from '@tanstack/react-query';
import {  getLayer, getLayers } from '../functions/layers';
import { getGeometryType, getLayersType } from '../functions/configurations';

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

export function useLayersConfiguration() {
  const geometryTypeOptions = getGeometryType();
  const layersTypeOptions = getLayersType();

  return {
    geometryTypeOptions,
    layersTypeOptions,
  };
}
