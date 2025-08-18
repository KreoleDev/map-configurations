import { callGateway } from '@/app/(myapp)/lib/use-server';
import { NextRequest, NextResponse } from 'next/server';

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8080';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/widget`;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const uuid = request.nextUrl.searchParams.get('uuid');
  const widget = await callGateway<string>(`${ROUTE_BASE_URL}/${uuid}/configuration`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return NextResponse.json(widget);
}
