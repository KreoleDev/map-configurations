import { useQuery } from '@tanstack/react-query';
import { getMap, getMaps } from '@/app/(myapp)/functions/maps';
import { convertToNameValue } from '@/app/(myapp)/functions/utils';
import { getWidgetsByType } from './widgets';
import { getStatusFilter, getVisibility } from '../functions/configurations';
import { getBasemaps } from '../functions/basemaps';
import { getGroups } from '../functions/group';
import { getLayers } from '../functions/layers';

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

export async function useMapConfiguration() {
  const widgetsQuery = await getWidgetsByType();

  try {
    const layers = await getLayers();
    const basemaps = await getBasemaps();
    const groups = await getGroups();
    const widgetsOptions = widgetsQuery || []; // Already in label/value format

    const visibilityOptions = getVisibility();

    // Extract and convert basemaps, layers, widgets
    const basemapsOptions = convertToNameValue(basemaps || []);
    const layersOptions = convertToNameValue(layers || []);
    const groupsOptions = convertToNameValue(groups || []);
    
    

    return {
      basemapsOptions,
      layersOptions,
      widgetsOptions,
      visibilityOptions,
      groupsOptions,
    };
  } catch (error) {
    console.error(error);
    return {
      isLoading: true,
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
    statusOptions,
  };
}
