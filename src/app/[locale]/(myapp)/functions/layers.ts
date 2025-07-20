async function getLayers() {
  return await fetch('/api/layer').then((res) => res.json());
}

async function deleteLayer(id: string) {
  return await fetch(`/api/layer/${id}`, {
    method: 'DELETE',
  });
}

export { getLayers, deleteLayer };
