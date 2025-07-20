import { getGeometryType, getLayersType } from './configurations';

async function getLayers() {
  return await fetch('/api/layer').then((res) => res.json());
}

async function deleteLayer(id: string) {
  return await fetch(`/api/layer/${id}`, {
    method: 'DELETE',
  });
}

function useLayersConfiguration() {
  const geometryTypeOptions = getGeometryType();
  const layersTypeOptions = getLayersType();

  return {
    geometryTypeOptions,
    layersTypeOptions,
  };
}

async function createOrUpdateLayer(layer: any) {
  if (layer.id) {
    return await fetch(`/api/layer/${layer.id}`, {
      method: 'PUT',
      body: JSON.stringify(layer),
    });
  } else {
    return await fetch('/api/layer', {
      method: 'POST',
      body: JSON.stringify(layer),
    });
  }
}

async function getLayer(id: string) {
  return await fetch(`/api/layer/${id}`).then((res) => res.json());
}

export { getLayers, deleteLayer, useLayersConfiguration, createOrUpdateLayer, getLayer };
