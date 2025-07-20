export async function getBasemaps() {
  return await fetch('/api/basemap').then((res) => res.json());
}

export async function deleteBasemap(id: string) {
  return await fetch(`/api/basemap/${id}`, {
    method: 'DELETE',
  });
}