interface Layer {
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

interface Basemap {
  id: string;
  name: string;
  code: string;
  type: string;
  url: string;
}

interface Widget {
  id: string;
  name: string;
  code: string;
  type: string;
  url: string;
}
