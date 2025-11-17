import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  let email: string;
  try {
    const body = await request.json();
    email = body.email;
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Invalid request body' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  }

  // Type validation for email
  if (typeof email !== 'string') {
    return new NextResponse(JSON.stringify({ message: 'Invalid email address format' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      },
    });
  }

  // Robust email validation regex
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\\s@"]+(\.[^<>()[\]\\.,;:\\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (!email || !emailRegex.test(email)) {
    return new NextResponse(JSON.stringify({ message: 'Invalid email address' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      },
    });
  }

  // PII compliant logging
  const hashedEmail = crypto.createHash('sha256').update(email).digest('hex');
  console.info(`Newsletter subscription attempt for hashed email: ${hashedEmail}`);

  // Placeholder for newsletter subscription logic
  await saveEmailToDatabase(email);

  return new NextResponse(JSON.stringify({ message: 'Subscription successful' }), {
    status: 202,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store', // Prevent caching of successful POST responses
    },
  });
}

// Placeholder function for database integration
async function saveEmailToDatabase(email: string) {
  // In a real application, you would interact with your database here
  // For example:
  // await db.collection('newsletter_subscriptions').insertOne({ email, subscribedAt: new Date() });
  console.log('Saving email to database');
  // Simulate a delay for database operation
  await new Promise(resolve => setTimeout(resolve, 100));
}

