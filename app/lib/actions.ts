'use server';
import { Resend } from 'resend';
import { z } from 'zod';

// import Email from '@/app/lib/email';
import template from '@/app/lib/template';

const resend = new Resend(process.env.RESEND_API_KEY);

const siteVerify = async (captcha: string) => {
  const apiUrl = new URL('https://www.google.com/recaptcha/api/siteverify');
  apiUrl.searchParams.append('secret', process.env.RECAPTCHA_SECRET_KEY);
  apiUrl.searchParams.append('response', captcha);
  const response = await fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    method: 'POST',
  });
  const responseJson = await response.json();
  const { success } = responseJson as { success: boolean };
  return success;
};

const sendEmail = async (replyTo: string, subject: string, message: string) => {
  const htmlPart = template.replace('{{message}}', message.replaceAll('\n', '<br />'));
  const payload = {
    from: 'Simon Arvaux <simon@arvaux.com>',
    to: 'Simon Arvaux <simon@arvaux.com>',
    reply_to: replyTo,
    subject,
    // react: Email({ message }),
    html: htmlPart,
  };
  if (process.env.NODE_ENV !== 'production') {
    console.info('======== BEGIN MAIL ========');
    console.info(payload);
    console.info('========= END MAIL =========');
    return {
      data: { id: '' },
      error: null,
    };
  }
  return resend.emails.send(payload);
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
    const { error } = await sendEmail(
      `${firstName} ${lastName} <${email}> ${phone ? `(${phone})` : ''}`.trim(),
      subject,
      message,
    );
    if (error) {
      throw new Error('error');
    }
    // return { status: ok ? 'success' : 'error' };
  } catch (error) {
    console.error(error);
    throw new Error('error');
    // return { status: 'error' };
  }
};
