import type { NextPage } from 'next';
import maintenance from '../../public/qws_maintenance.svg';
import websites from '../../public/qws_websites_2.svg';
import {
  Expectations,
  Hero,
  Layout,
  Main,
  MaintenanceTable,
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
      <Section lessGap reverse>
        <Expectations />
      </Section>
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
      <Section lessGap reverse>
        <Product
          icon={maintenance}
          vertical={true}
          title={'portfolio'}
          capture={
            'A maintenance package is your ticket to worry free business. We handle the tech, you handle your business.'
          }
          captureExtra={'Be free of the burden.'}
          Component={MaintenanceTable}
          action={'Find out how'}
          actionRoute={'Websites'}
          actionColour={true}
        />
      </Section>

      <Section lessGap></Section>
      <Section lessGap reverse final>
        <Product
          icon={websites}
          vertical={true}
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
