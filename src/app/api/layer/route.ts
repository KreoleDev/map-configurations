import { NextRequest, NextResponse } from 'next/server';

let fakeData = [
  { uuid: '1', name: 'Layer 1', type: 'wms', url: 'https://wms.example.com', status: 'active', geomType:'point' },
  { uuid: '2', name: 'Layer 2', type: 'wfs', url: 'https://wfs.example.com', status: 'active', geomType:'point' },
];

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get('uuid');
  if (uuid) {
    const layer = fakeData.find((layer) => layer.uuid === uuid);
    if (!layer) {
      return NextResponse.json({ error: 'Layer not found' }, { status: 404 });
    }
    return NextResponse.json(layer);
  }
  return NextResponse.json(fakeData);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get('uuid');
  const layer = fakeData.find((layer) => layer.uuid === uuid);
  if (!layer) {
    return NextResponse.json({ error: 'Layer not found' }, { status: 404 });
  }
  //fakeData = fakeData.filter((layer) => layer.id !== Number(id));
  return NextResponse.json(layer);
}