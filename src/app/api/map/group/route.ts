import { callGateway } from '@/app/[locale]/(myapp)/lib/use-server';
import { GroupMap } from '@/app/[locale]/(myapp)/types/global';
import { NextRequest, NextResponse } from 'next/server';

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8080';
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;
const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/group`;

export async function GET(request: NextRequest) {
  const groups = await callGateway<GroupMap[]>(`${ROUTE_BASE_URL}`, {
    method: 'GET',
  });
  return NextResponse.json(groups);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const map = await callGateway<GroupMap>(`${ROUTE_BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return NextResponse.json(map);
}
