import mjml2html from 'mjml';
import { htmlToText } from 'html-to-text';

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

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message, captcha } = body as {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      captcha: string;
    };
    const success = await siteVerify(captcha);
    if (!success) {
      return new Response(null, { status: 500 });
    }
    const { html: htmlPart } = mjml2html(`
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
    `);
    const { ok, status } = await sendEmail(
      email,
      `${firstName} ${lastName} <${email}> ${phone ? `(${phone})` : ''}`.trim(),
      subject,
      htmlPart,
    );
    return new Response(null, { status: ok ? 201 : status });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
};
