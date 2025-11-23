import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  message: z.string().trim().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(JSON.stringify({ 
        message: 'Validation failed', 
        errors: validation.error.flatten().fieldErrors 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      });
    }

    const { name, email, message } = validation.data;

    // Placeholder for actual contact message persistence (e.g., saving to a database, sending an email)
    if (process.env.NODE_ENV === "development") {
      console.log('Received contact form submission (development):', { name, email, message });
    } else {
      const redactedEmail = email.replace(/(.{2})[^@]*(@.*)/, '$1...$2');
      const truncatedMessage = message.substring(0, 100) + (message.length > 100 ? '...' : '');
      console.log('Received contact form submission (production sanitized):', { 
        name, 
        email: redactedEmail, 
        message: truncatedMessage, 
        timestamp: new Date().toISOString() 
      });
    }

    // Simulate a delay for processing
    await new Promise(resolve => setTimeout(resolve, 500));

    return new NextResponse(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Contact form API error:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  }
}
