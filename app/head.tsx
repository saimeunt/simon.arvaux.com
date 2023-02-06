const Head = () => {
  const title = 'Simon Arvaux portfolio';
  const description = 'Full Stack Web3 Developer';
  const scheme = `http${process.env.NODE_ENV !== 'production' ? '' : 's'}`;
  const metaUrl = `${scheme}://${process.env.VERCEL_URL}`;
  const metaImageUrl = `${metaUrl}/api/meta-image`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Favicon */}
      <link rel="icon" href="/img/favicon.png" sizes="128x128" type="image/png" />
      {/* Facebook meta */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImageUrl} />
      {/* Twitter meta */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImageUrl} />
    </>
  );
};

export default Head;
