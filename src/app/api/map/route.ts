import { NextRequest, NextResponse } from 'next/server';

let fakeData = [
  { uuid: '1', name: 'Map 1', type: 'wms', url: 'https://wms.example.com', status: 'active' },
  { uuid: '2', name: 'Map 2', type: 'wfs', url: 'https://wfs.example.com', status: 'active' },
];

export async function GET(request: NextRequest) {
  const basemaps = fakeData;
  return NextResponse.json(basemaps);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get('uuid');
  const map = fakeData.find((map) => map.uuid === uuid);
  if (!map) {
    return NextResponse.json({ error: 'Map not found' }, { status: 404 });
  }
  //fakeData = fakeData.filter((map) => map.uuid !== uuid);
  return NextResponse.json(map);
}