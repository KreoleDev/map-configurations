import { NextRequest, NextResponse } from 'next/server';

let fakeData = [
  { id: 1, name: 'Basemap 1', type: 'wms', url: 'https://wms.example.com', status: 'active' },
  { id: 2, name: 'Basemap 2', type: 'wfs', url: 'https://wfs.example.com', status: 'active' },
];

export async function GET(request: NextRequest) {
  const basemaps = fakeData;
  return NextResponse.json(basemaps);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const basemap = fakeData.find((basemap) => basemap.id === Number(id));
  if (!basemap) {
    return NextResponse.json({ error: 'Basemap not found' }, { status: 404 });
  }
  //fakeData = fakeData.filter((basemap) => basemap.id !== Number(id));
  return NextResponse.json(basemap);
}