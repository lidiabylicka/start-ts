import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware');
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return NextResponse.redirect('/');
  }

  return NextResponse.next();
}
