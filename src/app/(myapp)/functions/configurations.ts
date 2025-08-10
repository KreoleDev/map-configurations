function getStatus() {
  return [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ];
}

function getStatusFilter() {
  return [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
  ];
}

function getLayersType() {
  return [
    { label: 'Web Feature Service', value: 'WFS' },
    { label: 'Web Map Service', value: 'WMS' },
    { label: 'Web Coverage Service', value: 'WCS' },
  ];
}

function getGeometryType() {
  return [
    { label: 'Point', value: 'POINT' },
    { label: 'Line', value: 'LINESTRING' },
    { label: 'Polygon', value: 'POLYGON' },
  ];
}

function getVisibility() {
  return [
    { label: 'Sim', value: 'Y' },
    { label: 'Não', value: 'N' },
  ];
}

function getWidgetPosition() {
  return [
    { label: 'Map Tools', value: 'MAP_TOOLS' },
    { label: 'Layer Menu', value: 'LAYER_MENU' },
    { label: 'Sem Posição', value: 'NONE' },
  ];
}

export { getStatus, getLayersType, getGeometryType, getVisibility, getWidgetPosition,getStatusFilter };
