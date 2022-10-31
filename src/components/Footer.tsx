import Link from 'next/link';
import css from '../styles/Footer.module.css';

import Image from 'next/image';
import facebook from '../../public/fb.svg';
import instagram from '../../public/in.svg';
import twitter from '../../public/tt.svg';

export const Footer: React.FC = () => {
  return (
    <>
      <div className={css.footer}>
        <div className={css.sectiontransition}>
          <div className={css.sectionflankleftwrap}>
            <div className={css.sectionflankleft}></div>
          </div>
          <div className={css.sectionmiddle}></div>
          <div className={css.sectionflankrightwrap}>
            <div className={css.sectionflankright}></div>
          </div>
        </div>
        <div className={css.footercushion}>
          <div className={css.directlinks}>
            {/*
            <div className={css.footerlist}>
              <h3>Why QWS</h3>
              <p>Choosing QWS</p>
              <p>Your Business Matters</p>
              <p>The Design Cycle</p>
              <p>Unrestricted Communication</p>
              <p>SEO &#38; Performance</p>
              <p>Experience &#38; Qualifications</p>
              <p>Accessibility Compliance</p>
            </div> 
            */}
            <div className={css.footerlist}>
              <h3>Services</h3>
              <a href="#websites">
                <p>Websites</p>
              </a>
              <a href="#maintenance">
                <p>Website Maintenance</p>
              </a>
              <a href="#business">
                <p>APIs &#38; Databases</p>
              </a>
              <a href="#business">
                <p>Business Solutions</p>
              </a>
              <a href="#business">
                <p>Branding &#38; Design</p>
              </a>
              <a href="#business">
                <p>Cloud App Services</p>
              </a>
              <a href="#business">
                <p>Desktop Apps</p>
              </a>
              <a href="#hourly">
                <p>Hourly Rates</p>
              </a>
            </div>
            {/*
            <div className={css.footerlist}>
              <h3>Resources</h3>
              <p>Why You Need a Website</p>
              <p>Web Terminology 101</p>
              <p>Pick the Right Website For You</p>
              <p>Performance with Caching &#38; CDNs</p>
              <p>Page Speed: Make or Break</p>
              <p>How the Frontend Attracts Clients</p>
              <p>Is Your Backend Doing its Job?</p>
              <p>Tired of the Mental Overhead?</p>
            </div>
          */}
            <div className={css.footerlist}>
              <h3>QWS</h3>
              <p>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </p>

              <p>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </p>
            </div>
          </div>

          <div className={css.finisher}>
            <div className={css.finishersmall}>Call 905-246-4210</div>

            <div className={[css.finishersmall, css.centeralign].join(' ')}>
              Quinn Web Solutions - &#169; {new Date().getFullYear()}
            </div>

            <div className={[css.finishersmall, css.rightalign].join(' ')}>
              <a
                href="https://facebook.com/quinnwebsolutions"
                target="_blank"
                rel="noreferrer"
              >
                <div className={css.socialmedia}>
                  <Image
                    alt="facebook"
                    src={facebook}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/quinnwebsolutions/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={css.socialmedia}>
                  <Image
                    alt="twitter"
                    src={twitter}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </a>
              <a
                href="https://twitter.com/QuinnWebSols"
                target="_blank"
                rel="noreferrer"
              >
                <div className={css.socialmedia}>
                  <Image
                    alt="instagram"
                    src={instagram}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </a>
              {/*
              <div className={css.socialmedia}>
                <Image
                  alt="linkedin"
                  src={linkedin}
                  quality={100}
                  layout="responsive"
                />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
