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

    // Use Web3Forms - completely free, no setup required!
    // Get your free access key from: https://web3forms.com
    const formData = new FormData();
    formData.append('access_key', 'YOUR_WEB3FORMS_KEY'); // You'll add this
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', `Contact Form: ${subject}`);
    formData.append('message', message);
    formData.append('from_name', 'AgriO Exports Website');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error('Web3Forms error:', result);
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
