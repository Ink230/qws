import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  pageTitle?: string;
  home: boolean;
}

export const siteName = "Quinn Web Solutions";

export const Layout: React.FC<Props> = ({ children, pageTitle, home}: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Quinn Web Solutions"
        />
        <meta name="og:title" content={siteName} />
        <title>{siteName}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}