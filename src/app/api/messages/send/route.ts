import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.recipient || !data.subject || !data.message) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing required fields'
      }, { status: 400 });
    }
    
    // Here we would typically save to a database and send notifications
    return NextResponse.json({
      status: 'success',
      message: 'Message sent successfully',
      data: {
        recipient: data.recipient,
        subject: data.subject,
        timestamp: new Date().toISOString()
      }
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to send message'
    }, { status: 500 });
  }
} 