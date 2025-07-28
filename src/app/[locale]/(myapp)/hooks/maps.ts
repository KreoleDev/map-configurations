import { useQuery } from '@tanstack/react-query';
import { getMap, getMaps } from '@/app/[locale]/(myapp)/functions/maps';
import { convertToNameValue } from '@/app/[locale]/(myapp)/functions/utils';
import { useLayers } from './layers';
import { useBasemaps } from './basemaps';
import { useWidgets } from './widgets';
import { getVisibility } from '../functions/configurations';
import { useGroups } from './group';

export function useMaps() {
  return useQuery({
    queryKey: ['maps'],
    queryFn: () => getMaps(),
  });
}

export function useDetailMap(uuid: string) {
  return useQuery({
    queryKey: ['map', uuid],
    queryFn: () => getMap(uuid),
  });
}

export function useMapConfiguration() {
  try {
    const layers = useLayers();
    const basemaps = useBasemaps();
    const widgets = useWidgets();
    const groups = useGroups();

    const visibilityOptions = getVisibility();

    // Extract and convert basemaps, layers, widgets
    const basemapsOptions = convertToNameValue(basemaps.data || []);
    const layersOptions = convertToNameValue(layers.data || []);
    const widgetsOptions = convertToNameValue(widgets.data || []);
    const groupsOptions = convertToNameValue(groups.data || []);

    const isLoading = layers.isLoading || basemaps.isLoading || widgets.isLoading || groups.isLoading;
    const isError = layers.isError || basemaps.isError || widgets.isError || groups.isError;

    return {
      isLoading,
      isError,
      basemapsOptions,
      layersOptions,
      widgetsOptions,
      visibilityOptions,
      groupsOptions,
    };
  } catch (error) {
    console.error(error);
    return {
      isLoading: false,
      isError: true,
      basemapsOptions: [],
      layersOptions: [],
      widgetsOptions: [],
      visibilityOptions: [],
      groupsOptions: [],
      };
  }
}
