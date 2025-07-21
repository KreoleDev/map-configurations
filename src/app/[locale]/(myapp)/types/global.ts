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
