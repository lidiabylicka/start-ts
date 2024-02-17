import { NextResponse } from 'next/server';

import data from '@/data/database.json';

export async function GET(request: Request, context: any) {
  const { params } = context;
  const post = data.filter((x) => params.postId === x.id.toString());

  return NextResponse.json({
    post,
  });
}
