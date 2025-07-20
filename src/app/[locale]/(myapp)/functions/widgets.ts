export async function getWidgets() {
  return await fetch('/api/widget').then((res) => res.json());
}

export async function deleteWidget(id: string) {
  return await fetch(`/api/widget/${id}`, {
    method: 'DELETE',
  });
}
