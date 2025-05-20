import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* 検索エンジンにインデックスさせない */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <base href={process.env.NODE_ENV === 'production' ? '/skin-diving/' : '/'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}