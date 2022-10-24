import Image from 'next/image';
import designcycle from '../../public/qws_designcycle.svg';
import css from '../styles/Expectations.module.css';
type Props = {
  _unused?: string;
};
export const Expectations: React.FC<Props> = ({ _unused }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.flankcontent}>
        <div>
          <div className={css.title}>Accessibility</div>
          <p>
            We adhere to AA for all sites, AAA standard available upon request
          </p>
        </div>
        <div>
          <div className={css.title}>Testing</div>
          <p>All services are tested against multiple devices and real users</p>
        </div>
        <div>
          <div className={css.title}>Form Factors</div>
          <p>All designs include desktop, mobile and tablet compatibility</p>
        </div>
        <div>
          <div className={css.title}>Performance</div>
          <p>We employ caching and SSG to ensure the fastest loading speeds</p>
        </div>
      </div>
      <div className={css.centercontainer}>
        <div className={css.topcontent}>
          <div className={css.title}>Insight</div>
          <div className={css.smalltext}>
            We learn about you and understand your business. Then, we discuss
            with you the features for success.
          </div>
        </div>
        <div className={css.centerinnercontainer}>
          <div className={css.midcontentleft}>
            <div className={css.title}>Launch</div>
            <div className={css.smalltext}>
              We help you with everything you need to launch your site.
              Maintenance packages are available.
            </div>
          </div>

          <div className={css.designcircle}>
            <Image
              alt="Design"
              src={designcycle}
              quality={100}
              layout="responsive"
            ></Image>
          </div>

          <div className={css.midcontentright}>
            <div className={css.title}>Design</div>
            <div className={css.smalltext}>
              From understanding your business and vision we draft designs for
              your review and feedback.
            </div>
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.bottomcontent}>
            <div className={css.title}>Review</div>
            <div className={css.smalltext}>
              The design and content is ready and your final recommendations are
              amended in full.
            </div>
          </div>
          <div className={css.bottomcontent}>
            <div className={css.title}>Implement</div>
            <div className={css.smalltext}>
              We take to our tools and create your working product. We will ask
              for your feedback along the way.
            </div>
          </div>
        </div>
      </div>

      <div className={css.flankcontent}>
        <div>
          <div className={css.title}>Timely Communication</div>
          <p>Email communication within 48 hours, Phone services available</p>
        </div>
        <div>
          <div className={css.title}>Consulting</div>
          <p>We are here to help at every step of the design process</p>
        </div>
        <div>
          <div className={css.title}>APIs &#38; Databases</div>
          <p>
            RESTful APIs made here. Relational or not, Databases are served.{' '}
          </p>
        </div>
        <div>
          <div className={css.title}>Add-ons</div>
          <p>Did we miss something you need? We will accommodate!</p>
        </div>
      </div>
    </div>
  );
};
