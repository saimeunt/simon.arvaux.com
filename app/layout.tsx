import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import 'photoswipe/dist/photoswipe.css';

import '../styles.css';

const title = 'Simon Arvaux portfolio';
const description = 'Full Stack Web3 Developer';
const scheme = `http${process.env.NODE_ENV !== 'production' ? '' : 's'}`;
const metadataBase = `${scheme}://${process.env.VERCEL_URL}`;

export const metadata = {
  metadataBase: new URL(metadataBase),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://simon.arvaux.com',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
