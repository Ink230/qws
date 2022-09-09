import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  _pageTitle?: string;
  _home: boolean;
};

export const siteName = 'Quinn Web Solutions 2';

export const Layout: React.FC<Props> = ({
  children,
  _pageTitle,
  _home,
}: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quinn Web Solutions" />
        <meta name="og:title" content={siteName} />
        <title>{siteName}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};
