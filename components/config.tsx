import Head from 'next/head';

const titleDefault = "Wewer";
const url = 'http://wewer.live';
const description =
  'A 3D advertisement platform built with React Three Fiber, Next.js';
const author = "Wewer";

const Heads = ({ title = titleDefault }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Software Engineer,Computer Scientist, Metaverse, 3D, Advertisement, Virtual Reality"
        />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="web_author" content={author} />
        <meta name="url" content={url} />
        <meta name="identifier-URL" content={url} />
        <meta name="directory" content="submission" />
        <meta name="category" content="business" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        <meta name="og:title" content={title} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={'/logo.png'} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />

        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={'/logo.png'} />
      </Head>
    </>
  );
};

export default Heads;
