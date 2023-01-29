const Head = () => {
  const title = 'Simon Arvaux portfolio';
  const description = 'Full Stack Web3 Developer';
  const metaImageUrl = 'https://simon.arvaux.com/img/meta-image.jpg';
  // const metaImageUrl = 'https://simon.arvaux.com/api/meta-image';
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    </>
  );
};

export default Head;
