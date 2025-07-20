import { NextRequest, NextResponse } from 'next/server';

let fakeData = [
  { id: 1, label: 'Widget 1', type: 'wms', url: 'https://wms.example.com', status: 'active' },
  { id: 2, label: 'Widget 2', type: 'wfs', url: 'https://wfs.example.com', status: 'active' },
];

export async function GET(request: NextRequest) {
  const widgets = fakeData;
  return NextResponse.json(widgets);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const widget = fakeData.find((widget) => widget.id === Number(id));
  if (!widget) {
    return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
  }
  //fakeData = fakeData.filter((widget) => widget.id !== Number(id));
  return NextResponse.json(widget);
}
