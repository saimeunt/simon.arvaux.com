import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const storeTokens = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );
    const authUrl = client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/gmail.send'],
    });
    res.redirect(authUrl);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default storeTokens;
