import { AppProps } from 'next/app';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import 'react-image-lightbox/style.css';

const App = ({ Component, pageProps }: AppProps) => (
  <div className="bg-white dark:bg-neutral-900">
    <Component {...pageProps} />
    {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
    <Script id="dark-mode-script" strategy="beforeInteractive" src="/dark-mode-script.js" />
  </div>
);

export default App;
