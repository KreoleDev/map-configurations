export async function getMaps() {
  return await fetch('/api/map').then((res) => res.json());
}

export async function deleteMap(uuid: string) {
  return await fetch(`/api/map/${uuid}`, {
    method: 'DELETE',
  });
}