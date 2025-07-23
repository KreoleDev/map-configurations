import { apiClient } from '@/app/[locale]/(myapp)/lib/api-client';
import { Map } from '@/app/[locale]/(myapp)/types/global';

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

export async function createOrUpdateMap(map: any): Promise<Map> {
  if (map.uuid) {
    const response = await apiClient.put<Map>(`/api/map?uuid=${map.uuid}`, map);
    if (!response.data) throw new Error('Failed to update map');
    return response.data;
  } else {
    const response = await apiClient.post<Map>('/api/map', map);
    console.log('response', response);
    if (!response.data) throw new Error('Failed to create map');
    return response.data;
  }
}

export async function getMap(uuid: string): Promise<Map> {
  const response = await apiClient.get<Map>(`/api/map?uuid=${uuid}`);
  if (!response.data) throw new Error('Map not found');
  return response.data;
}

export async function createOrUpdateMapGroups(groups: any): Promise<any> {
  const response = await apiClient.post<any>('/api/map/group', groups);
  if (!response.data) throw new Error('Failed to create or update map groups');
  return response.data;
}
