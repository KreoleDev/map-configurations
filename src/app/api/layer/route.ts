import { callGateway } from '@/app/[locale]/(myapp)/lib/use-server';
import { Layer } from '@/app/[locale]/(myapp)/types/global';
import { NextRequest, NextResponse } from 'next/server';

//use the basepath from the env
const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8080';
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;
const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/layer`;


export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get('uuid');
  if (uuid) {
    const layer = await callGateway<Layer>(`${ROUTE_BASE_URL}/${uuid}`, {
      method: 'GET',
    });
    if (!layer) {
      return NextResponse.json({ error: 'Layer not found' }, { status: 404 });
    }
    return NextResponse.json(layer);
  }
  const layers = await callGateway<Layer[]>(`${ROUTE_BASE_URL}`, {
    method: 'GET',
  });
  return NextResponse.json(layers);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get('uuid');
  const layer = await callGateway<Layer>(`${ROUTE_BASE_URL}/${uuid}`, {
    method: 'DELETE',
  });
  if (!layer) {
    return NextResponse.json({ error: 'Layer not found' }, { status: 404 });
  }
  return NextResponse.json(layer);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const layer = await callGateway<Layer>(`${ROUTE_BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return NextResponse.json(layer);
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const layer = await callGateway<Layer>(`${ROUTE_BASE_URL}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  return NextResponse.json(layer);
}
