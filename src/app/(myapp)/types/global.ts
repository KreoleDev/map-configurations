export interface Layer {
  uuid: string;
  name: string;
  type: string;
  url: string;
  nameType: string;
  editable: boolean;
  geometryType: string;
  status: string;
  statusDescription: string;
  geometryTypeDescription: string;
  layerTypeDescription: string;
}

export interface Basemap {
  uuid: string;
  name: string;
  code: string;
  link: string;
  status: string;
  statusDescription: string;
}

export enum WidgetType {
  TIMESLIDER = 'TIMESLIDER',
  EDIT = 'EDIT',
  LEGEND = 'LEGEND',
  ZOOM = 'ZOOM',
  PAN = 'PAN',
  MEASURE = 'MEASURE',
  PRINT = 'PRINT',
  SEARCH = 'SEARCH',
  LOCATE = 'LOCATE',
  FULLSCREEN = 'FULLSCREEN',
  SCALE = 'SCALE',
  BASEMAP = 'BASEMAP',
  LAYERS = 'LAYERS',
  ATTRIBUTES = 'ATTRIBUTES',
  DRAW = 'DRAW',
  GEOLOCATION = 'GEOLOCATION',
  COORDINATES = 'COORDINATES',
  HOME = 'HOME',
  COMPASS = 'COMPASS',
  ROTATION = 'ROTATION',
  IDENTITY = 'IDENTITY',
  CONTEXTMENU = 'CONTEXTMENU'
}

export interface Widget {
  uuid: string;
  name: string;
  code: string;
  link: string;
  statusDescription: string;
  tooltip: string;
  position: string;
  page: string;
}

export interface WidgetMap {
  widgetId: string;
  order: number;
}

export interface Map {
  uuid: string;
  name: string;
  framingId: number;
  fullScreen: boolean;
  scale: boolean;
  expand: boolean;
  locate: boolean;
  layersPanel: boolean;
  widgetsPanel: boolean;
  statusDescription: string;
  code: string;
  layers: {
    layerId: string;
    groupId: string;
    visible: boolean;
    order: number;
  }[];
  widgets: {
    widgetType: string;
    order: number;
  }[];
  basemaps: {
    basemapId: string;
    defaultBasemap: number;
  }[];
  center: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface GroupMap {
  name: string;
  uuid: string;
}

export interface FormGroupMap {
  groups: GroupMap[];
}

export interface WidgetData {
  [key: string]: unknown;
}

export interface WidgetConfiguration {
  data: WidgetData;
}