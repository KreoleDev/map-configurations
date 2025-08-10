import { useQuery } from '@tanstack/react-query';
import { getMap, getMaps } from '@/app/(myapp)/functions/maps';
import { convertToNameValue } from '@/app/(myapp)/functions/utils';
import { useLayers } from './layers';
import { useBasemaps } from './basemaps';
import { getWidgetsByType } from './widgets';
import { getStatusFilter, getVisibility } from '../functions/configurations';
import { useGroups } from './group';

export function useMaps() {
  //i want to join latitude and longitude and zomm to the maps to new field called center
  const { data: maps } = useQuery({
    queryKey: ['maps'],
    queryFn: () => getMaps(),
  });
  if (maps) {
    maps.forEach((map) => {
      map.center = `${map.latitude},${map.longitude},${map.zoom}`;
    });
  }
  //return the maps with the center field, isLoading and isError
  return {
    data: maps,
    isLoading: false,
    isError: false,
  };
}

export function useDetailMap(uuid: string) {
  return useQuery({
    queryKey: ['map', uuid],
    queryFn: () => getMap(uuid),
  });
}

export function useMapConfiguration() {
  const widgetsQuery = useQuery({
    queryKey: ['widgets', 'byType'],
    queryFn: getWidgetsByType,
  });

  try {
    const layers = useLayers();
    const basemaps = useBasemaps();
    const groups = useGroups();
    const widgetsOptions = widgetsQuery.data || []; // Already in label/value format

    const visibilityOptions = getVisibility();

    // Extract and convert basemaps, layers, widgets
    const basemapsOptions = convertToNameValue(basemaps.data || []);
    const layersOptions = convertToNameValue(layers.data || []);
    const groupsOptions = convertToNameValue(groups.data || []);

    const isLoading =
      layers.isLoading || basemaps.isLoading || widgetsQuery.isLoading || groups.isLoading;
    const isError = layers.isError || basemaps.isError || widgetsQuery.isError || groups.isError;

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


export function useMapListConfiguration() {
  const statusOptions = getStatusFilter();

  return {
    statusOptions
  };
}