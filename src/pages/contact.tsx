import { NextPage } from 'next';
import { ContactForm, Layout, Main } from '../components';

const title: string = 'Quinn Web Solutions';

const Contact: NextPage = () => {
  return (
    <Layout _home={true} _pageTitle={title}>
      <Main>
        <ContactForm />
      </Main>
    </Layout>
  );
};

export default Contact;
