import { getGeometryType, getLayersType } from './configurations';

async function getLayers() {
  return await fetch('/api/layer').then((res) => res.json());
}

async function deleteLayer(uuid: string) {
  return await fetch(`/api/layer/${uuid}`, {
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
  if (layer.uuid) {
    return await fetch(`/api/layer/${layer.uuid}`, {
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

async function getLayer(uuid: string) {
  return await fetch(`/api/layer?uuid=${uuid}`).then((res) => res.json());
}

export { getLayers, deleteLayer, useLayersConfiguration, createOrUpdateLayer, getLayer };
