import Head from 'next/head';

import Index from '../components/index';

const title = 'Simon Arvaux portfolio';
const description = 'Full Stack Web3 Developer';
const metaImageUrl = 'https://simon.arvaux.com/img/meta-image.jpg';

const IndexPage = () => (
  <div className="bg-white dark:bg-neutral-900">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Favicon */}
      <link rel="icon" href="/img/favicon.png" sizes="128x128" type="image/png" />
      {/* Facebook meta */}
      <meta property="og:url" content="https://simon.arvaux.com" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImageUrl} />
      {/* Twitter meta */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImageUrl} />
    </Head>
    <Index />
  </div>
);

export default IndexPage;
