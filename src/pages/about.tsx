import type { NextPage } from 'next';
import Image from 'next/image';
import qws_aboutus from '../../public/qws_aboutus.svg';
import qws_canada from '../../public/qws_canada.svg';
import qws_communication from '../../public/qws_communication.svg';
import qws_modern from '../../public/qws_modern.svg';
import qws_trusted from '../../public/qws_trusted.svg';
import { Layout, Section } from '../components';
import css from '../styles/About.module.css';

const qws_jq = '/qws_jq_headshot.jpg';

const title: string = 'Quinn Web Solutions';

const About: NextPage = () => {
  return (
    <Layout _home={true} _pageTitle={title}>
      <Section lessGap reverse final>
        <div className={css.container}>
          <div className={css.left}>
            <div className={css.title}>About QWS</div>
            <div className={css.smalltext}>
              Quinn Web Solutions is a privately owned tech solution company.
              Originally servicing Niagara and Ottawa, QWS has grown to service
              across Ontario.
            </div>
            <div className={css.lastboxes}>
              <div className={css.smallboxes}>
                <div className={css.smallcontainer}>
                  <div className={css.smallleft}>
                    <Image
                      alt="QWS About Us"
                      src={qws_modern}
                      quality={100}
                      width={50}
                      height={50}
                      layout="fixed"
                    />
                  </div>
                  <div className={css.smallright}>
                    <div className={css.smalltitle}>Modern Tools</div>
                    <div className={css.smallcaption}>
                      Only the latest tools are used to efficiently service your
                      product and needs.{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.smallboxes}>
                <div className={css.smallcontainer}>
                  <div className={css.smallleft}>
                    <Image
                      alt="QWS About Us"
                      src={qws_communication}
                      quality={100}
                      width={50}
                      height={50}
                      layout="fixed"
                    />
                  </div>
                  <div className={css.smallright}>
                    <div className={css.smalltitle}>Communication</div>
                    <div className={css.smallcaption}>
                      Your needs and feedback are listened to and used in each
                      step of the process.
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.smallboxes}>
                <div className={css.smallcontainer}>
                  <div className={css.smallleft}>
                    <Image
                      alt="QWS About Us"
                      src={qws_trusted}
                      quality={100}
                      width={50}
                      height={50}
                      layout="fixed"
                    />
                  </div>
                  <div className={css.smallright}>
                    <div className={css.smalltitle}>Trusted Experience</div>
                    <div className={css.smallcaption}>
                      From flip phones to foldable screens, we&apos;ve been
                      there to build all of it.
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.smallboxes}>
                <div className={css.smallcontainer}>
                  <div className={css.smallleft}>
                    <Image
                      alt="QWS About Us"
                      src={qws_canada}
                      quality={100}
                      width={50}
                      height={50}
                      layout="fixed"
                    />
                  </div>
                  <div className={css.smallright}>
                    <div className={css.smalltitle}>Made in Canada</div>
                    <div className={css.smallcaption}>
                      Based in Ontario to understand your business needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.right}>
            <Image
              alt="QWS About Us"
              src={qws_aboutus}
              quality={100}
              width={500}
              height={500}
              layout="fixed"
            />
          </div>
        </div>
      </Section>
      <Section></Section>
      <Section lessGap reverse final>
        <div className={css.personcontainer}>
          <div className={css.ourpeople}>Our People</div>
          <div className={css.person}>
            <div className={css.personimagecontainer}>
              <div className={css.personimage}>
                <Image
                  alt="JQ Headshot"
                  src={qws_jq}
                  quality={100}
                  width={400}
                  height={400}
                  layout="fixed"
                />
              </div>
              <div className={css.persontitle}>Justin Quinn</div>
            </div>
            <div className={css.personbio}>
              <p>
                Justin founded QWS after noting the lack of impactful technology
                solutions available to business owners in Ontario. Justin seeks
                to provide every business owner with the information and tools
                they need to solve their tech burdens.
              </p>
              <p>
                With over ten years of experience in web development, Justin
                brings a first class standard to all products developed. When
                developing software solutions, Justin&apos;s top priority is to
                get to know business owners in order to produce the quality
                software they need that is relevant for their business.
              </p>
              <p>
                Justin has a degree in Chemical Engineering from the University
                of Ottawa. His tech stack began with HTML4 and CSS2 and today
                covers technologies like React/NextJS, Angular, .NET, PHP and
                Python. Justin has specific expertise in real time technologies
                like web sockets and in data analysis.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default About;
