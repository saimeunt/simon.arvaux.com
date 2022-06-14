import got from 'got';
import { htmlToText } from 'html-to-text';

const mailjetApi = got.extend({
  prefixUrl: 'https://api.mailjet.com/v3.1',
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_API_SECRET}`,
    ).toString('base64')}`,
  },
});

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
    return { ok: true, statusCode: 200 };
  }
  return mailjetApi.post('send', { json: payload });
};

export default sendEmail;
