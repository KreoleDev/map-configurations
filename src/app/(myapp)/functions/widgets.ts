import { apiClient } from '@/app/(myapp)/lib/api-client';
import { Widget } from '@/app/(myapp)/types/global';

export async function getWidgets(): Promise<Widget[]> {
  const response = await apiClient.get<Widget[]>('/api/widget');
  return response.data ?? [];
}

export async function deleteWidget(uuid: string): Promise<void> {
  const response = await apiClient.delete(`/api/widget?uuid=${uuid}`);
  if (response.error) {
    throw new Error(response.error);
  }
}

export async function createOrUpdateWidget(widget: Partial<Widget>): Promise<Widget> {
  if (widget.uuid) {
    const response = await apiClient.put<Widget>(`/api/widget?uuid=${widget.uuid}`, widget);
    if (!response.data) throw new Error('Failed to update widget');
    return response.data;
  } else {
    const response = await apiClient.post<Widget>('/api/widget', widget);
    if (!response.data) throw new Error('Failed to create widget');
    return response.data;
  }
}

export async function getWidget(uuid: string): Promise<Widget> {
  const response = await apiClient.get<Widget>(`/api/widget?uuid=${uuid}`);
  if (!response.data) throw new Error('Widget not found');
  return response.data;
}

export async function createOrUpdateWidgetData(associationId: string, data: any) {
  console.log(data);
  const response = await apiClient.post<string>(
    `/api/widget/configuration?uuid=${associationId}`,
    data,
  );
  if (!response.data) throw new Error('Failed to update widget configuration');
  return response.data;
}
