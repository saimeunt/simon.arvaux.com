import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import 'photoswipe/dist/photoswipe.css';

import '../styles.css';

const title = 'Simon Arvaux portfolio';
const description = 'Full Stack Web3 Developer';
const scheme = `http${process.env.NODE_ENV !== 'production' ? '' : 's'}`;
const metaImageUrl = `${scheme}://${process.env.VERCEL_URL}/api/meta-image`;

export const metadata = {
  title,
  description,
  icons: { icon: { url: '/img/favicon.png', sizes: '128x128', type: 'image/png' } },
  openGraph: {
    title,
    description,
    url: 'https://simon.arvaux.com',
    type: 'website',
    images: [metaImageUrl],
  },
  twitter: { card: 'summary_large_image', title, description, images: [metaImageUrl] },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
