'use server';
// import mjml2html from 'mjml';
import { htmlToText } from 'html-to-text';
import { z } from 'zod';

import template from '@/app/lib/template';

const siteVerify = async (captcha: string) => {
  const apiUrl = 'https://www.google.com/recaptcha/api/siteverify';
  const response = await fetch(
    `${apiUrl}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      method: 'POST',
    },
  );
  const responseJson = await response.json();
  const { success } = responseJson as { success: boolean };
  return success;
};

const sendEmail = async (email: string, name: string, subject: string, htmlPart: string) => {
  const payload = {
    Messages: [
      {
        From: {
          Email: 'simon@arvaux.com',
          Name: name,
        },
        To: [{ Email: 'simon@arvaux.com' }],
        ReplyTo: {
          Email: email,
          Name: name,
        },
        Subject: subject,
        HTMLPart: htmlPart,
        TextPart: htmlToText(htmlPart),
      },
    ],
  };
  if (process.env.NODE_ENV !== 'production') {
    console.info('======== BEGIN MAIL ========');
    console.info(payload.Messages);
    console.info('========= END MAIL =========');
    return new Response(null, { status: 200 });
  }
  return fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_API_SECRET}`,
      ).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

const MessageSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
  captcha: z.string(),
});

// This is temporary until @types/react-dom is updated
/* type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
    // captcha?: string[];
  };
  status: string;
}; */

export const sendMessage = async (/* prevState: State, */ formData: FormData) => {
  const validatedFields = MessageSchema.safeParse({
    firstName: formData.get('first-name'),
    lastName: formData.get('last-name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    captcha: formData.get('captcha'),
  });
  if (!validatedFields.success) {
    throw new Error('error');
    /* return {
      errors: validatedFields.error.flatten().fieldErrors,
      status: 'error',
    }; */
  }
  const { firstName, lastName, email, phone, subject, message, captcha } = validatedFields.data;
  try {
    const success = await siteVerify(captcha);
    if (!success) {
      throw new Error('error');
      // return { status: 'error' };
    }
    /* const { html: htmlPart } = mjml2html(`
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>
              <mj-text font-size="20px">
                ${message.replaceAll('\n', '<br />')}
              </mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `); */
    const htmlPart = template.replace('{{message}}', message.replaceAll('\n', '<br />'));
    const { ok } = await sendEmail(
      email,
      `${firstName} ${lastName} <${email}> ${phone ? `(${phone})` : ''}`.trim(),
      subject,
      htmlPart,
    );
    if (!ok) {
      throw new Error('error');
    }
    // return { status: ok ? 'success' : 'error' };
  } catch (error) {
    console.error(error);
    throw new Error('error');
    // return { status: 'error' };
  }
};
