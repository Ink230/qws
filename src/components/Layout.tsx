import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer, Header } from '../components';
import css from '../styles/Layout.module.css';

type Props = {
  children: ReactNode;
  _pageTitle?: string;
  _home: boolean;
};

export const siteName = 'Quinn Web Solutions';

export const Layout: React.FC<Props> = ({
  children,
  _pageTitle,
  _home,
}: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Quinn Web Solutions" />
        <meta name="og:title" content={siteName} />
        <title>{siteName}</title>
      </Head>
      <div className={css.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
