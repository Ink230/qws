import type { NextPage } from 'next';
import websites from '../../public/qws_websites_2.svg';
import {
  Hero,
  Layout,
  Main,
  Product,
  Section,
  WebsiteTable,
} from '../components';

const title: string = 'Quinn Web Solutions';

const Home: NextPage = () => {
  return (
    <Layout _home={true} _pageTitle={title}>
      <Main>
        <Hero />
      </Main>
      <Section>
        <Product
          icon={websites}
          title={'A digital experience your clients will love'}
          capture={
            'We get to know you first. Next, we craft a design that meets the needs of your business. Then your website is yours.'
          }
          captureExtra={'It really is that simple.'}
          Component={WebsiteTable}
          action={'Get to know us'}
          actionRoute={'Websites'}
        />
      </Section>
      <Section lessGap reverse></Section>
      <Section lessGap></Section>
      <Section lessGap reverse></Section>
      <Section lessGap></Section>
      <Section lessGap reverse final></Section>
    </Layout>
  );
};

export default Home;
