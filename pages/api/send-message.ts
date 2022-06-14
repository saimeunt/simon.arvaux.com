import { NextApiRequest, NextApiResponse } from 'next';
import mjml2html from 'mjml';

import sendEmail from '../../lib/mailjet';
// import { readFileSync } from 'fs';
// import { google } from 'googleapis';

const sendMessage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body as {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    const { html: htmlPart } = mjml2html(`
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>
              <mj-text font-size="20px">
                ${message.replace(/\n/g, '<br />')}
              </mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `);
    const { ok, statusCode } = await sendEmail(
      email,
      `${firstName} ${lastName} <${email}> ${phone ? `(${phone})` : ''}`.trim(),
      subject,
      htmlPart,
    );
    res.status(ok ? 201 : statusCode).end();
    /* const tokens = readFileSync('config/tokens.json', { encoding: 'utf-8' });
    const client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );
    client.setCredentials(JSON.parse(tokens));
    const gmail = google.gmail({ version: 'v1', auth: client });
    // You can use UTF-8 encoding for the subject using the method below.
    // You can also just use a plain string if you don't need anything fancy.
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
    const messageParts = [
      `From: ${firstName} ${lastName} <${email}>`,
      'To: Simon Arvaux <simon@arvaux.com>',
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: ${utf8Subject}`,
      '',
      message,
    ].join('\n');
    // The body needs to be base64url encoded.
    const encodedMessage = Buffer.from(messageParts)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    const { status } = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedMessage },
    });
    res.status(status === 200 ? 201 : status).end(); */
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default sendMessage;
