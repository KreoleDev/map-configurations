import { callGateway } from '@/app/(myapp)/lib/use-server';
import { Map } from '@/app/(myapp)/types/global';
import { NextRequest, NextResponse } from 'next/server';

//change to use API_GATEWAY
const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8080';
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;
const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/map`;

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get('uuid');
  const code = request.nextUrl.searchParams.get('code');
  if (uuid) {
    const map = await callGateway<Map>(`${ROUTE_BASE_URL}/${uuid}`, {
      method: 'GET',
    });
    if (!map) {
      return NextResponse.json({ error: 'Map not found' }, { status: 404 });
    }
    return NextResponse.json(map);
  }
  if (code) {
    const map = await callGateway<Map>(`${ROUTE_BASE_URL}/integration?code=${code}`, {
      method: 'GET',
    });
    if (!map) {
      return NextResponse.json({ error: 'Map not found' }, { status: 404 });
    }
    return NextResponse.json(map);
  }
  const maps = await callGateway<Map[]>(`${ROUTE_BASE_URL}`, {
    method: 'GET',
  });
  return NextResponse.json(maps);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get('uuid');
  console.log('uuid', uuid);
  const map = await callGateway<Map>(`${ROUTE_BASE_URL}/${uuid}`, {
    method: 'DELETE',
  });
  if (!map) {
    return NextResponse.json({ error: 'Map not found' }, { status: 404 });
  }
  return NextResponse.json(map);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const map = await callGateway<Map>(`${ROUTE_BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return NextResponse.json(map);
}
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const map = await callGateway<Map>(`${ROUTE_BASE_URL}/${body.uuid}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  return NextResponse.json(map);
}
