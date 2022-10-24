import type { NextPage } from 'next';
import maintenance from '../../public/qws_maintenance.svg';
import websites from '../../public/qws_websites_2.svg';
import {
  Business,
  Expectations,
  Hero,
  Layout,
  Main,
  MaintenanceTable,
  Portfolio,
  Product,
  Section,
  ServiceFees,
  WebsiteTable,
} from '../components';

const title: string = 'Quinn Web Solutions';

const Home: NextPage = () => {
  return (
    <Layout _home={true} _pageTitle={title}>
      <Main>
        <Hero />
      </Main>
      <div id="websites"></div>
      <Section>
        <Product
          icon={websites}
          title={'A digital experience your clients will love'}
          capture={
            'We get to know you first. Next, we craft a design that meets the needs of your business. Then, your website is yours.'
          }
          captureExtra={'It really is that simple.'}
          Component={WebsiteTable}
          action={'Get to know us'}
          actionRoute={'Websites'}
        />
      </Section>
      <div id="expectations"></div>
      <Section lessGap reverse>
        <Expectations />
      </Section>
      <div id="maintenance"></div>
      <Section lessGap>
        <Product
          icon={maintenance}
          vertical={true}
          title={'Leave the headache and worry behind'}
          capture={
            'A maintenance package is your ticket to worry free business. We handle the tech, you handle your business.'
          }
          captureExtra={'Be free of the burden.'}
          Component={MaintenanceTable}
          action={'Find out how'}
          actionRoute={'Websites'}
        />
      </Section>
      <div id="portfolio"></div>
      <Section lessGap reverse>
        <Portfolio />
      </Section>
      <div id="business"></div>
      <Section lessGap>
        <Business />
      </Section>
      <div id="hourly"></div>
      <Section lessGap reverse final>
        <Product
          icon={websites}
          vertical={false}
          title={'Hourly Service Fees'}
          capture={
            'When you do not need a package but you still need something done.'
          }
          Component={ServiceFees}
          action={'Contact us'}
          actionRoute={'Websites'}
          actionColour={true}
        />
      </Section>
    </Layout>
  );
};

export default Home;
