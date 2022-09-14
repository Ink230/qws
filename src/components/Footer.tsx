import css from '../styles/Footer.module.css';

import Image from 'next/image';
import facebook from '../../public/fb.svg';
import instagram from '../../public/in.svg';
import linkedin from '../../public/li.svg';
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
            <div className={css.footerlist}>
              <h3>Why QWS</h3>
              <p>Choosing QWS</p>
              <p>Your Business Matters</p>
              <p>The Design Cycle</p>
              <p>Unrestricted Communication</p>
              <p>SEO & Performance</p>
              <p>Experience & Qualifications</p>
              <p>Accessibility Compliance</p>
              <p></p>
            </div>
            <div className={css.footerlist}>
              <h3>Services and Pricing</h3>
              <p>Websites</p>
              <p>APIs & Databases</p>
              <p>Website Maintenance</p>
              <p>Business Solutions</p>
              <p>Branding & Design</p>
              <p>Cloud App Services</p>
              <p>Desktop Apps</p>
              <p>Hourly Rates</p>
            </div>
            <div className={css.footerlist}>
              <h3>Resources</h3>
              <p>Why You Need a Website</p>
              <p>Web Terminology 101</p>
              <p>Pick the Right Website For You</p>
              <p>Performance with Caching & CDNs</p>
              <p>Page Speed: Make or Break</p>
              <p>How the Frontend Attracts Clients</p>
              <p>Is Your Backend Doing its Job?</p>
              <p>Tired of the Mental Overhead?</p>
            </div>
            <div className={css.footerlist}>
              <h3>Company</h3>
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className={css.finisher}>
            <div className={css.finishersmall}>Call 905-246-4210</div>

            <div className={[css.finishersmall, css.centeralign].join(' ')}>
              Quinn Web Solutions - &#169; {new Date().getFullYear()}
            </div>

            <div className={[css.finishersmall, css.rightalign].join(' ')}>
              <div className={css.socialmedia}>
                <Image
                  alt="facebook"
                  src={facebook}
                  quality={100}
                  layout="responsive"
                />
              </div>
              <div className={css.socialmedia}>
                <Image
                  alt="twitter"
                  src={twitter}
                  quality={100}
                  layout="responsive"
                />
              </div>
              <div className={css.socialmedia}>
                <Image
                  alt="instagram"
                  src={instagram}
                  quality={100}
                  layout="responsive"
                />
              </div>
              <div className={css.socialmedia}>
                <Image
                  alt="linkedin"
                  src={linkedin}
                  quality={100}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
