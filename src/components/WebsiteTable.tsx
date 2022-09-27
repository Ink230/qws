import css from '../styles/WebsiteTable.module.css';

type Props = {
  _unused?: string;
};

export const WebsiteTable: React.FC<Props> = ({ _unused }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.tablecontainer}>
        <div className={css.column}>
          <div className={css.title}>
            WORDPRESS<div className={css.smalltitle}></div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}>Starting from</div>
              <div className={css.price}>$699</div>

              <div className={css.discount}></div>
            </div>

            <div className={css.offering}>1 page</div>
            <div className={css.offering}>Premade WP Theme</div>
            <div className={css.offering}>
              We fill the theme with your content
            </div>
            <div className={css.offeringend}>
              Site is prepared for you to host
            </div>
            <div className={css.isitforyou}>If you have...</div>
            <div className={css.offering}>
              a simple presence to deliver to clients
            </div>
            <div className={css.offering}>
              an upgrade for a better experience planned
            </div>
            <div className={css.offeringend}>
              have minimal content updates each year
            </div>
          </div>
        </div>
        <div className={css.column}>
          <div className={css.title}>
            ONE PAGE WONDER
            <div className={css.smalltitle}>NextJS</div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}>Starting from</div>
              <div className={css.price}>$2999</div>

              <div className={css.discount}></div>
            </div>

            <div className={css.offering}>
              Custom design for the best user experience
            </div>
            <div className={css.offering}>
              Up to 9x the performance of a WordPress site
            </div>
            <div className={css.offering}>
              Content formulated for the best SEO rankings
            </div>
            <div className={css.offeringend}>
              Up to 2 additional small pages
            </div>
            <div className={css.isitforyou}>If you have...</div>
            <div className={css.offering}>
              an established brand and vision to share
            </div>
            <div className={css.offering}>
              the need to attract, inform or convert clients
            </div>
            <div className={css.offeringend}>
              some interactivity for the website planned
            </div>
          </div>
        </div>
        <div className={css.column}>
          <div className={css.title}>
            CUSTOM SOLUTION
            <div className={css.smalltitle}>
              React • NextJS • .NET • Laravel • Cloud
            </div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}>Starting from</div>
              <div className={css.price}>$4999</div>

              <div className={css.discount}></div>
            </div>

            <div className={css.offering}>User account systems</div>
            <div className={css.offering}>Content management systems</div>
            <div className={css.offering}>
              Dashboards or high levels of interactivity
            </div>
            <div className={css.offeringend}>
              Cloud solutions for high traffic scaling
            </div>
            <div className={css.isitforyou}>If you need...</div>
            <div className={css.offering}>
              a performant business critical application
            </div>
            <div className={css.offering}>
              an all in one frontend and backend solution
            </div>
            <div className={css.offeringend}>
              either NextJS/JS, .NET or PHP integrations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
