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

export { getLayers, deleteLayer, useLayersConfiguration };
