import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message, to } = await request.json();
  if (!process.env.FROM_EMAIL) {
    throw new Error('FROM_EMAIL is not defined');
  }
  const msg = {
    to: to,
    bcc: process.env.PERSONAL_EMAIL,
    from: process.env.FROM_EMAIL,
    replyto: email,
    subject: `New contact form submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    if (process.env.ENVIRONMENT === 'local') {
      console.log('Email msg:');
      console.log(msg);
      return NextResponse.json(
        { message: 'Local ENVIRONMENT: Console logged successfully' },
        { status: 200 }
      );
    }
    await sgMail.send(msg);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
