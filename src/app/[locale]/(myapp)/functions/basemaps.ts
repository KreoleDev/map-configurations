import { apiClient } from '@/app/[locale]/(myapp)/lib/api-client';
import { Basemap } from '@/app/[locale]/(myapp)/types/global';

export async function getBasemaps(): Promise<Basemap[]> {
  const response = await apiClient.get<Basemap[]>('/api/basemap');
  return response.data ?? [];
}

export async function deleteBasemap(uuid: string): Promise<void> {
  const response = await apiClient.delete(`/api/basemap?uuid=${uuid}`);
  if (response.error) {
    throw new Error(response.error);
  }
}

export async function createOrUpdateBasemap(basemap: Partial<Basemap>): Promise<Basemap> {
  console.log('basemap', basemap);
  if (basemap.uuid) {
    const response = await apiClient.put<Basemap>(`/api/basemap?uuid=${basemap.uuid}`, basemap);
    if (!response.data) throw new Error('Failed to update basemap');
    return response.data;
  } else {
    const response = await apiClient.post<Basemap>('/api/basemap', basemap);
    console.log('response', response);
    if (!response.data) throw new Error('Failed to create basemap');
    return response.data;
  }
}

export async function getBasemap(uuid: string): Promise<Basemap> {
  const response = await apiClient.get<Basemap>(`/api/basemap?uuid=${uuid}`);
  if (!response.data) throw new Error('Basemap not found');
  return response.data;
}
