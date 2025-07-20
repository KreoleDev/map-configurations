import { useQuery } from '@tanstack/react-query';
import { getMaps } from '@/app/[locale]/(myapp)/functions/maps';
import { convertToNameValue } from '@/app/[locale]/(myapp)/functions/utils';
import { useLayers } from './layers';
import { useBasemaps } from './basemaps';
import { useWidgets } from './widgets';
import { getVisibility } from '../functions/configurations';

export function useMaps() {
  return useQuery({
    queryKey: ['maps'],
    queryFn: () => getMaps(),
  });
}

export function useMapConfiguration() {
  const layers = useLayers();
  const basemaps = useBasemaps();
  const widgets = useWidgets();

  const visibilityOptions = getVisibility();

  // Extract and convert basemaps, layers, widgets
  const basemapsOptions = convertToNameValue(basemaps.data || []);
  const layersOptions = convertToNameValue(layers.data || []);
  const widgetsOptions = convertToNameValue(widgets.data || []);

  const isLoading = layers.isLoading || basemaps.isLoading || widgets.isLoading;
  const isError = layers.isError || basemaps.isError || widgets.isError;

  return {
    isLoading,
    isError,
    basemapsOptions,
    layersOptions,
    widgetsOptions,
    visibilityOptions,
  };
}
