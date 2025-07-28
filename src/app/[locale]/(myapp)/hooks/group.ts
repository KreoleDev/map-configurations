import { useQuery } from '@tanstack/react-query';
import { getGroup, getGroups } from '../functions/group';

export function useGroups() {
  return useQuery({
    queryKey: ['groups'],
    queryFn: () => getGroups(),
  });
}

export function useDetailGroup(uuid: string) {
  return useQuery({
    queryKey: ['group', uuid],
    queryFn: () => getGroup(uuid),
  });
}

