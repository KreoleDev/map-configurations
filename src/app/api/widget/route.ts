import { callGateway } from '@/app/[locale]/(myapp)/lib/use-server';
import { Widget } from '@/app/[locale]/(myapp)/types/global';
import { NextRequest, NextResponse } from 'next/server';

//refactor this to use the basepath from the env
const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8080';
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;
const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/widget`;

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get('uuid');
  if (uuid) {
    const widget = await callGateway<Widget>(`${ROUTE_BASE_URL}/${uuid}`, {
      method: 'GET',
    });
    if (!widget) {
      return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
    }
    return NextResponse.json(widget);
  }
  const widgets = await callGateway<Widget[]>(`${ROUTE_BASE_URL}`, {
    method: 'GET',
  });
  return NextResponse.json(widgets);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get('uuid');
  const widget = await callGateway<Widget>(`${ROUTE_BASE_URL}/${uuid}`, {
    method: 'DELETE',
  });
  if (!widget) {
    return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
  }
  return NextResponse.json(widget);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const widget = await callGateway<Widget>(`${ROUTE_BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return NextResponse.json(widget);
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const widget = await callGateway<Widget>(`${ROUTE_BASE_URL}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  return NextResponse.json(widget);
}
