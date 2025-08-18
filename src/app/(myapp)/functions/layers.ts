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

export async function getDescribeFeatureType(uuid: string): Promise<any> {
  const layer = await getLayer(uuid);
  const url = `${layer.url}?service=WFS&request=DescribeFeatureType&typeName=${layer.nameType}&version=1.0.0&outputFormat=application/json`;

  const response = await fetch(url);
  const data = await response.json();
  if (data && data.featureTypes && data.featureTypes.length > 0) {
    const properties = data.featureTypes[0].properties;
    if (properties && properties.length > 0) {
      return properties.filter((prop: { name: string; localType: string }) => 
        prop.name !== 'geom' ).map((prop: { name: string; localType: string }) => ({
        value: prop.name,
        label: prop.name
      }));
    }
  }

  return [];
}
