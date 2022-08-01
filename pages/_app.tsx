import { AppProps } from 'next/app';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import 'react-image-lightbox/style.css';

import '../styles.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
    <Script id="dark-mode-script" strategy="beforeInteractive" src="/dark-mode-script.js" />
  </>
);

export default App;
