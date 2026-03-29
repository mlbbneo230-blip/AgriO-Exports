import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Use formsubmit.co for free dynamic form submission without API keys
    const response = await fetch('https://formsubmit.co/ajax/agrioexports.india@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject: `Contact Form: ${subject}`,
        message,
        _template: "table"
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error('Formsubmit error:', result);
      return NextResponse.json(
        { error: result.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
