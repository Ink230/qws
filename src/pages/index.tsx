import type { NextPage } from 'next';
import { Layout } from '../components';

const title: string = 'Quinn Web Solutions';

const Home: NextPage = () => {
  return (
    <Layout _home={true} _pageTitle={title}>
      Test
    </Layout>
  );
};

export default Home;
