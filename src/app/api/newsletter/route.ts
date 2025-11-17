import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return new NextResponse(JSON.stringify({ message: 'Invalid email address' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      },
    });
  }

  console.info(`Newsletter subscription: ${email}`);

  return new NextResponse(JSON.stringify({ message: 'Subscription successful' }), {
    status: 202,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, max-age=60', // Short cache for successful response
    },
  });
}
