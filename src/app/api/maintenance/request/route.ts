import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'success',
    message: 'Maintenance requests retrieved',
    requests: []
  });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Here we would typically save to a database
    return NextResponse.json({
      status: 'success',
      message: 'Maintenance request created',
      request: data
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to create maintenance request'
    }, { status: 400 });
  }
} 