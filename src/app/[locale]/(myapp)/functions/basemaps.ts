export async function getBasemaps() {
  return await fetch('/api/basemap').then((res) => res.json());
}

export async function deleteBasemap(uuid: string) {
  return await fetch(`/api/basemap/${uuid}`, {
    method: 'DELETE',
  });
}

export async function createOrUpdateBasemap(basemap: any) {
  if (basemap.uuid) {
    return await fetch(`/api/basemap/${basemap.uuid}`, {
      method: 'PUT',
      body: JSON.stringify(basemap),
    });
  } else {
    return await fetch('/api/basemap', {
      method: 'POST',
      body: JSON.stringify(basemap),
    });
  }
}

export async function getBasemap(uuid: string) {
  return await fetch(`/api/basemap?uuid=${uuid}`).then((res) => res.json());
}
