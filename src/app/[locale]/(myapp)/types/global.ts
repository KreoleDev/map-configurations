export interface Layer {
  uuid: string;
  name: string;
  type: string;
  url: string;
  nameType: string;
  editable: boolean;
  geometryType: string;
  status: string;
}

export interface Basemap {
  uuid: string;
  name: string;
  code: string;
  link: string;
}

export interface Widget {
  uuid: string;
  name: string;
  code: string;
  link: string;
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
  layers: {
    layerId: string;
    groupId: string;
    visible: boolean;
    order: number;
  }[];
  widgets: {
    widgetId: string;
    order: number;
  }[];
  basemaps: {
    basemapId: string;
    defaultBasemap: number;
  }[];
}

export interface GroupMap {
  name: string;
  uuid: string;
}