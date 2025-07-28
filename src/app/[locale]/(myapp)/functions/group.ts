import { apiClient } from '@/app/[locale]/(myapp)/lib/api-client';
import { FormGroupMap, GroupMap } from '@/app/[locale]/(myapp)/types/global';

export async function getGroups(): Promise<GroupMap[]> {
  const response = await apiClient.get<GroupMap[]>('/api/map/group');
  return response.data ?? [];
}

export async function deleteGroup(uuid: string): Promise<void> {
  const response = await apiClient.delete(`/api/group?uuid=${uuid}`);
  if (response.error) {
    throw new Error(response.error);
  }
}

export async function createOrUpdateGroup(group: Partial<FormGroupMap>): Promise<GroupMap> {
  console.log('group', group);
  const response = await apiClient.post<GroupMap>('/api/map/group', group.groups);
  if (!response.data) throw new Error('Failed to create group');
  return response.data;
}

export async function getGroup(uuid: string): Promise<GroupMap> {
  const response = await apiClient.get<GroupMap>(`/api/group?uuid=${uuid}`);
  if (!response.data) throw new Error('Group not found');
  return response.data;
}
