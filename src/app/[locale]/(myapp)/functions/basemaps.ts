export async function getBasemaps() {
  return await fetch('/api/basemap').then((res) => res.json());
}

export async function deleteBasemap(id: string) {
  return await fetch(`/api/basemap/${id}`, {
    method: 'DELETE',
  });
}

export async function createOrUpdateBasemap(basemap: any) {
  if (basemap.id) {
    return await fetch(`/api/basemap/${basemap.id}`, {
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

export async function getBasemap(id: string) {
  return await fetch(`/api/basemap/${id}`).then((res) => res.json());
}
