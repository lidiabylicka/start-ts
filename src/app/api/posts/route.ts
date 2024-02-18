import { NextResponse } from 'next/server';

import data from '@/data/database.json';

export async function GET() {
  return NextResponse.json({
    data,
  });
}
