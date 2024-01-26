import { type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'tailwindcss/tailwind.css';
import 'photoswipe/dist/photoswipe.css';

import '@/app/ui/global.css';

const title = 'Simon Arvaux portfolio';
const description = 'Full Stack Web3 Developer';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: process.env.URL,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
  metadataBase: new URL(process.env.URL),
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
    <body>
      {children}
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
