import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Simple in-memory rate limiting store
// In production, consider using Redis or a database for distributed systems
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Rate limit: max 5 submissions per IP per 15 minutes
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

function getClientIP(request: Request): string {
  // Try to get IP from various headers (for proxies/load balancers)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  // Fallback (won't work in production but helps with local dev)
  return 'unknown';
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    // Clean up old entries periodically
    if (rateLimitStore.size > 1000) {
      for (const [key, value] of rateLimitStore.entries()) {
        if (now > value.resetTime) {
          rateLimitStore.delete(key);
        }
      }
    }
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX - 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX - entry.count,
    resetTime: entry.resetTime,
  };
}

function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  // Remove potentially dangerous characters and trim
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .substring(0, 10000); // Limit length
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  // Rate limiting
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(clientIP);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        message: 'Too many requests. Please try again later.',
        resetTime: rateLimit.resetTime,
      },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString(),
        },
      }
    );
  }

  const body = await request.json();
  let { name, email, phone, subject, message, to, bcc, inquiryType, website } =
    body;

  // Honeypot check (server-side validation)
  if (website) {
    console.warn(`Spam detected: honeypot field filled from IP ${clientIP}`);
    return NextResponse.json(
      { message: 'Invalid submission' },
      { status: 400 }
    );
  }

  // Validate required fields
  if (!name || !email || !subject || !message || !to) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Validate email format
  if (!validateEmail(email)) {
    return NextResponse.json(
      { message: 'Invalid email address' },
      { status: 400 }
    );
  }

  // Sanitize inputs
  name = sanitizeInput(name);
  email = sanitizeInput(email);
  phone = phone ? sanitizeInput(phone) : '';
  subject = sanitizeInput(subject);
  message = sanitizeInput(message);
  inquiryType = inquiryType ? sanitizeInput(inquiryType) : '';
  if (!process.env.FROM_EMAIL) {
    throw new Error('FROM_EMAIL is not defined');
  }
  const bccArray = [];
  if (bcc) {
    bccArray.push(sanitizeInput(bcc));
  }
  if (process.env.PERSONAL_EMAIL) {
    bccArray.push(process.env.PERSONAL_EMAIL);
  }
  const msg = {
    to: sanitizeInput(to),
    bcc: bccArray,
    from: process.env.FROM_EMAIL,
    replyto: email,
    subject: `New Flight-1 Tech contact form submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    if (process.env.ENVIRONMENT === 'local') {
      console.log('Email msg:');
      console.log(msg);
      return NextResponse.json(
        { message: 'Local ENVIRONMENT: Console logged successfully' },
        {
          status: 200,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          },
        }
      );
    }
    await sgMail.send(msg);
    return NextResponse.json(
      { status: 200 },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
