import { NextResponse } from 'next/server';
import { getDbData } from '@/lib/db';

export async function GET() {
  const data = getDbData();
  return NextResponse.json(data);
}
