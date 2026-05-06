import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

/** Contact form validation schema */
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, company, email, message } = parsed.data;

    const contactMessage = await db.contactMessage.create({
      data: { name, company: company || null, email, message },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: contactMessage.id,
        name: contactMessage.name,
        createdAt: contactMessage.createdAt,
      },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
