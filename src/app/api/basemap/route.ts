import { NextRequest, NextResponse } from 'next/server';

let fakeData = [
  { uuid: '1', name: 'Basemap 1', type: 'wms', url: 'https://wms.example.com', status: 'active' },
  { uuid: '2', name: 'Basemap 2', type: 'wfs', url: 'https://wfs.example.com', status: 'active' },
];

//promise get uuid from request
export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get('uuid');
  if (uuid) {
    const basemap = fakeData.find((basemap) => basemap.uuid === uuid);
    if (!basemap) {
      return NextResponse.json({ error: 'Basemap not found' }, { status: 404 });
    }
    return NextResponse.json(basemap);
  }
  return NextResponse.json(fakeData);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get('uuid');
  const basemap = fakeData.find((basemap) => basemap.uuid === uuid);
  if (!basemap) {
    return NextResponse.json({ error: 'Basemap not found' }, { status: 404 });
  }
  //fakeData = fakeData.filter((basemap) => basemap.id !== Number(id));
  return NextResponse.json(basemap);
}
