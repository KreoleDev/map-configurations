import { callGateway } from '@/app/[locale]/(myapp)/lib/use-server';
import { Basemap } from '@/app/[locale]/(myapp)/types/global';
import { NextRequest, NextResponse } from 'next/server';

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8080';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/basemap`;

export async function GET(request: NextRequest) {
  try {
    const uuid = request.nextUrl.searchParams.get('uuid');

    if (uuid) {
      // Get specific basemap details by UUID
      const basemapDetails = await callGateway<Basemap>(`${ROUTE_BASE_URL}/${uuid}`, {
        method: 'GET',
      });
      return NextResponse.json(basemapDetails);
    }
    const basemaps = await callGateway<Basemap[]>(`${ROUTE_BASE_URL}`, {
      method: 'GET',
    });
    return NextResponse.json(basemaps);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch basemaps' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const basemap = await callGateway<Basemap>(`${ROUTE_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    return NextResponse.json(basemap);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create basemap' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const basemap = await callGateway<Basemap>(`${ROUTE_BASE_URL}`, {
      method: 'PUT',
      body: request.body,
    });
    return NextResponse.json(basemap);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update basemap' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const uuid = searchParams.get('uuid');

    if (!uuid) {
      return NextResponse.json({ error: 'UUID is required' }, { status: 400 });
    }

    await callGateway(`${ROUTE_BASE_URL}/${uuid}`, { method: 'DELETE' });
    return NextResponse.json({ message: 'Basemap deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete basemap' }, { status: 500 });
  }
}
