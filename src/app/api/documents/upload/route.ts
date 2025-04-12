import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file || !(file instanceof File)) {
      return NextResponse.json({
        status: 'error',
        message: 'No valid file uploaded'
      }, { status: 400 });
    }
    
    // Here we would typically upload to a storage service
    return NextResponse.json({
      status: 'success',
      message: 'Document uploaded successfully',
      data: {
        filename: file.name,
        type: file.type,
        size: file.size,
        uploadedAt: new Date().toISOString()
      }
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to upload document'
    }, { status: 500 });
  }
} 