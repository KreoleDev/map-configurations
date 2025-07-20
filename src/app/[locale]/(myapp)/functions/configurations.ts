function getStatus() {
  return [
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },
  ];
}

function getLayersType() {
  return [
    { name: 'Web Feature Service', value: 'wfs' },
    { name: 'Web Map Service', value: 'wms' },
    { name: 'Web Coverage Service', value: 'wcs' },
  ];
}

function getGeometryType() {
  return [
    { name: 'Point', value: 'point' },
    { name: 'Line', value: 'line' },
    { name: 'Polygon', value: 'polygon' },
  ];
}

function getVisibility() {
  return [
    { name: 'Sim', value: 'Y' },
    { name: 'Não', value: 'N' },
  ];
}
