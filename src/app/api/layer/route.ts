import { NextRequest, NextResponse } from 'next/server';

let fakeData = [
  { id: 1, name: 'Layer 1', type: 'wms', url: 'https://wms.example.com', status: 'active', geomType:'point' },
  { id: 2, name: 'Layer 2', type: 'wfs', url: 'https://wfs.example.com', status: 'active', geomType:'point' },
];

export async function GET(request: NextRequest) {
  const layers = fakeData;
  return NextResponse.json(layers);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const layer = fakeData.find((layer) => layer.id === Number(id));
  if (!layer) {
    return NextResponse.json({ error: 'Layer not found' }, { status: 404 });
  }
  //fakeData = fakeData.filter((layer) => layer.id !== Number(id));
  return NextResponse.json(layer);
}