import { NextRequest, NextResponse } from 'next/server';

let fakeData = [
  { uuid: '1', name: 'Widget 1', type: 'wms', url: 'https://wms.example.com', status: 'active' },
  { uuid: '2', name: 'Widget 2', type: 'wfs', url: 'https://wfs.example.com', status: 'active' },
];

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get('uuid');
  if (uuid) {
    const widget = fakeData.find((widget) => widget.uuid === uuid);
    console.log(widget, uuid);
    if (!widget) {
      return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
    }
    return NextResponse.json(widget);
  }
  return NextResponse.json(fakeData);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get('uuid');
  const widget = fakeData.find((widget) => widget.uuid === uuid);
  if (!widget) {
    return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
  }
  //fakeData = fakeData.filter((widget) => widget.id !== Number(id));
  return NextResponse.json(widget);
}
