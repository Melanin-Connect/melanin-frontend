// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Get form data from request body
  const { name, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all required fields' });
  }

  // Configure nodemailer transporter
  // For production, you would use your actual email service credentials
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER || 'smtp.example.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'your-website@example.com',
    to: process.env.EMAIL_TO || 'your-email@example.com', // Where you want to receive contact messages
    replyTo: email,
    subject: `Contact Form: ${subject || 'New message from website contact form'}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <h4>Message:</h4>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
  }
}