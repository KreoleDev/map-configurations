export async function getWidgets() {
  return await fetch('/api/widget').then((res) => res.json());
}

export async function deleteWidget(id: string) {
  return await fetch(`/api/widget/${id}`, {
    method: 'DELETE',
  });
}

export async function createOrUpdateWidget(widget: any) {
  if (widget.id) {
    return await fetch(`/api/widget/${widget.id}`, {
      method: 'PUT',
      body: JSON.stringify(widget),
    });
  } else {
    return await fetch('/api/widget', {
      method: 'POST',
      body: JSON.stringify(widget),
    });
  }
}

export async function getWidget(id: string) {
  return await fetch(`/api/widget/${id}`).then((res) => res.json());
}
