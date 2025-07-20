export interface Layer {
  id: string;
  name: string;
  code: string;
  type: string;
  url: string;
  nameType: boolean;
  geometryType: string;
  visibility: string;
  status: string;
}

export interface Basemap {
  id: string;
  name: string;
  code: string;
  type: string;
  url: string;
}

export interface Widget {
  id: string;
  name: string;
  code: string;
  type: string;
  url: string;
}
