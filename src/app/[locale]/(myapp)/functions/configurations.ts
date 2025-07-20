function getStatus() {
  return [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ];
}

function getLayersType() {
  return [
    { label: 'Web Feature Service', value: 'wfs' },
    { label: 'Web Map Service', value: 'wms' },
    { label: 'Web Coverage Service', value: 'wcs' },
  ];
}

function getGeometryType() {
  return [
    { label: 'Point', value: 'point' },
    { label: 'Line', value: 'line' },
    { label: 'Polygon', value: 'polygon' },
  ];
}

function getVisibility() {
  return [
    { label: 'Sim', value: 'Y' },
    { label: 'Não', value: 'N' },
  ];
}

export { getStatus, getLayersType, getGeometryType, getVisibility };