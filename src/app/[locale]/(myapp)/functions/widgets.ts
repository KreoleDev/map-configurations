export async function getWidgets() {
  return await fetch('/api/widget').then((res) => res.json());
}

export async function deleteWidget(uuid: string) {
  return await fetch(`/api/widget/${uuid}`, {
    method: 'DELETE',
  });
}

export async function createOrUpdateWidget(widget: any) {
  if (widget.uuid) {
    return await fetch(`/api/widget/${widget.uuid}`, {
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

export async function getWidget(uuid: string) {
  return await fetch(`/api/widget?uuid=${uuid}`).then((res) => res.json());
}
