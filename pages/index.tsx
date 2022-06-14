import Head from 'next/head';

import IndexPage from '../components/index';

const Index = () => (
  <>
    <Head>
      <title>Simon Arvaux</title>
      <meta name="description" content="Simon Arvaux portfolio" />
      {/* Favicon */}
      <link rel="icon" href="/img/favicon.png" sizes="128x128" type="image/png" />
      {/* Facebook meta */}
      <meta property="og:url" content="https://simon.arvaux.com" />
      <meta property="og:title" content="Simon Arvaux portfolio" />
      <meta property="og:description" content="Simon Arvaux portfolio" />
      <meta property="og:image" content="https://simon.arvaux.com/img/og-image.jpg" />
    </Head>
    <IndexPage />
  </>
);

export default Index;
