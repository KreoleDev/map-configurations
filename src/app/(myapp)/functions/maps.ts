import { apiClient } from '@/app/(myapp)/lib/api-client';
import { Map } from '@/app/(myapp)/types/global';

export async function getMaps(): Promise<Map[]> {
  const response = await apiClient.get<Map[]>('/api/map');
  return response.data ?? [];
}

export async function deleteMap(uuid: string): Promise<void> {
  const response = await apiClient.delete(`/api/map?uuid=${uuid}`);
  if (response.error) {
    throw new Error(response.error);
  }
}

export async function createOrUpdateMap(map: Map): Promise<Map> {
  //layers layerd is null remove it and widgets widgetId is null remove it
  if (map.layers && map.layers.length > 0) {
    map.layers = map.layers.filter(
      (layer: { layerId: string }) =>
        layer.layerId !== '' && layer.layerId !== null && layer.layerId !== undefined,
    );
  }
  if (map.widgets && map.widgets.length > 0) {
    map.widgets = map.widgets.filter(
      (widget: { widgetType: string }) =>
        widget.widgetType !== '' && widget.widgetType !== null && widget.widgetType !== undefined,
    );
  }

  if (map.uuid) {
    const response = await apiClient.put<Map>(`/api/map?uuid=${map.uuid}`, map);
    if (!response.data) throw new Error('Failed to update map');
    return response.data;
  } else {
    const response = await apiClient.post<Map>('/api/map', map);
    if (!response.data) throw new Error('Failed to create map');
    return response.data;
  }
}

export async function getMap(uuid: string): Promise<Map> {
  const response = await apiClient.get<Map>(`/api/map?uuid=${uuid}`);
  if (!response.data) throw new Error('Map not found');
  return response.data;
}

export async function getMapByCode(code: string): Promise<Map> {
  const response = await apiClient.get<Map>(`/api/map?code=${code}`);
  if (!response.data) throw new Error('Map not found');
  return response.data;
}