export async function getMaps() {
  return await fetch('/api/map').then((res) => res.json());
}

export async function deleteMap(uuid: string) {
  return await fetch(`/api/map/${uuid}`, {
    method: 'DELETE',
  });
}

export async function createOrUpdateMap(map: any) {
  if (map.uuid) {
    return await fetch(`/api/map/${map.uuid}`, {
      method: 'PUT',
      body: JSON.stringify(map),
    });
  } else {
    return await fetch('/api/map', {
      method: 'POST',
      body: JSON.stringify(map),
    });
  }
}

export async function getMap(uuid: string) {
  return await fetch(`/api/map/${uuid}`).then((res) => res.json());
}
