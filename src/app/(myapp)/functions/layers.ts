import { apiClient } from '@/app/(myapp)/lib/api-client';
import { Layer } from '@/app/(myapp)/types/global';

export async function getLayers(): Promise<Layer[]> {
  const response = await apiClient.get<Layer[]>('/api/layer');
  return response.data ?? [];
}

export async function deleteLayer(uuid: string): Promise<void> {
  const response = await apiClient.delete(`/api/layer?uuid=${uuid}`);
  if (response.error) {
    throw new Error(response.error);
  }
}

export async function createOrUpdateLayer(layer: Partial<Layer>): Promise<Layer> {
  if (layer.uuid) {
    const response = await apiClient.put<Layer>(`/api/layer?uuid=${layer.uuid}`, layer);
    if (!response.data) throw new Error('Failed to update layer');
    return response.data;
  } else {
    const response = await apiClient.post<Layer>('/api/layer', layer);
    if (!response.data) throw new Error('Failed to create layer');
    return response.data;
  }
}

export async function getLayer(uuid: string): Promise<Layer> {
  const response = await apiClient.get<Layer>(`/api/layer?uuid=${uuid}`);
  if (!response.data) throw new Error('Layer not found');
  return response.data;
}
