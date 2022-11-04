'use client';
import { ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts';
import classNames from 'classnames';
import 'tailwindcss/tailwind.css';
import 'react-image-lightbox/style.css';

import '../styles.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode(true);
  return (
    <html
      lang="en"
      className={classNames({ dark: isDarkMode }, 'scroll-smooth')}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-white dark:bg-neutral-900">{children}</body>
    </html>
  );
};

export default RootLayout;
