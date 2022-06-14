import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const callback = async (
  req: NextApiRequest & { url: string },
  res: NextApiResponse,
): Promise<void> => {
  try {
    const qs = new URL(req.url, 'http://localhost:3000').searchParams;
    const client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );
    const { tokens } = await client.getToken(qs.get('code') as string);
    writeFileSync('config/tokens.json', JSON.stringify(tokens));
    res.end('Saved tokens to config/tokens.json');
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default callback;
