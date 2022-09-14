import type { NextPage } from 'next';
import { Layout } from '../components';

const title: string = 'Quinn Web Solutions';

const Home: NextPage = () => {
  return (
    <Layout _home={true} _pageTitle={title}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed justo
        faucibus, tempus velit vitae, dignissim felis. Sed ullamcorper feugiat
        felis eget luctus. Phasellus lacinia lectus in turpis tristique sodales.
        Nam ultricies fermentum ultrices. Donec blandit purus sit amet diam
        ullamcorper congue. Pellentesque leo libero, dictum vitae commodo
        venenatis, viverra quis tellus. Proin ullamcorper pretium nisl. Nullam
        lorem felis, sollicitudin quis consequat sit amet, dictum facilisis
        lacus. Nullam bibendum accumsan lectus a molestie. Donec malesuada,
        tortor a commodo suscipit, sem est accumsan lectus, dictum sollicitudin
        turpis tellus sed libero. Integer blandit feugiat metus, in pharetra
        magna interdum ullamcorper. Donec pellentesque ultrices augue, eget
        pharetra nunc euismod sit amet. Vivamus lorem metus, tempus ac blandit
        ac, consectetur ac lacus.
      </p>
      <p>
        Nam condimentum lorem quam, vitae dictum felis vehicula eu. Phasellus
        euismod lacinia neque ut feugiat. Fusce a urna at odio imperdiet ornare
        eu a lacus. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Nullam bibendum tortor enim, a volutpat
        libero viverra eu. Vivamus mi mi, dictum id velit viverra, feugiat
        ullamcorper neque. Duis tempus velit quam, at ornare dolor viverra at.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Proin erat turpis, lacinia nec dictum semper,
        lacinia eget mi. Phasellus quis sollicitudin massa. Nullam vitae tortor
        dictum, efficitur metus sed, malesuada enim. Nullam pellentesque at arcu
        in tincidunt. Praesent convallis libero id viverra convallis. Sed
        aliquet condimentum imperdiet. Duis luctus magna a ligula ultrices
        ultricies. Nam metus nisi, luctus a pellentesque sed, commodo vitae mi.
        Quisque scelerisque iaculis orci dapibus pellentesque.
      </p>
      <p>
        Proin maximus sem felis, ut dapibus orci viverra porttitor. Praesent
        lorem purus, elementum eu lacinia in, sagittis a mi. Integer neque
        massa, porta sed maximus a, tristique ut turpis. Donec turpis lacus,
        pellentesque sed rhoncus a, lacinia ut arcu. Proin fringilla vitae
        tellus maximus sollicitudin. Sed porta, magna convallis dapibus mollis,
        libero mi commodo diam, non laoreet turpis diam dapibus ligula. Ut
        gravida sapien metus, eu pellentesque eros tempor eu. Sed metus lectus,
        eleifend ac ipsum in, porttitor rhoncus lectus. Integer molestie egestas
        lorem. Sed vulputate sit amet est vel faucibus. Duis tristique accumsan
        ante, sed aliquam quam interdum id.
      </p>
      <p>
        {' '}
        Quisque id vestibulum nibh, quis tincidunt dolor. Suspendisse auctor
        magna massa. Praesent sed leo non ex pretium dignissim. Proin dapibus
        consectetur erat, non sodales magna aliquam at. Duis bibendum varius
        nisi a consectetur. In hac habitasse platea dictumst. Suspendisse tempor
        nulla nisi, ut rhoncus erat cursus vel. Maecenas elit ipsum,
        sollicitudin id sagittis in, luctus a tortor. Vestibulum tempor risus et
        molestie congue. Cras iaculis feugiat mauris nec semper. Suspendisse
        semper auctor ultrices. Pellentesque nec mi lobortis, maximus metus ac,
        convallis augue. Curabitur id varius dolor. Integer vel mauris justo.
        Aliquam id rhoncus orci, ut efficitur dui. Phasellus dictum fringilla
        metus et interdum. Donec ornare egestas faucibus.
      </p>
    </Layout>
  );
};

export default Home;
