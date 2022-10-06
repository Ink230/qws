import css from '../styles/TableDark.module.css';

type Props = {
  _unused?: string;
};

export const MaintenanceTable: React.FC<Props> = ({ _unused }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.tablecontainer}>
        <div className={css.column}>
          <div className={css.title}>
            Basic<div className={css.smalltitle}></div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}>Starting from</div>
              <div className={css.price}>
                <b>$</b>139
              </div>

              <div className={css.discount}>/month</div>
            </div>

            <div className={css.offering}>Domain name management</div>
            <div className={css.offering}>Website hosting management</div>
            <div className={css.offering}>Software and security updates</div>
            <div className={css.offering}>Monthly backups</div>
            <div className={css.offering}>Unlimited email communication</div>
            <div className={css.offering}>
              30 minutes of free consulting time a month
            </div>
            <div className={css.offeringend}>
              1 hour of free content updates a month
            </div>
          </div>
        </div>
        <div className={css.column}>
          <div className={css.title}>
            Premium
            <div className={css.smalltitle}>Recommended</div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}>Starting from</div>
              <div className={css.price}>
                <b>$</b>259
              </div>

              <div className={css.discount}>/month</div>
            </div>

            <div className={css.offering}>Everything in Tier I</div>
            <div className={css.offering}>
              Manage cloud services (email, file-sharing)
            </div>
            <div className={css.offering}>Bi-weekly backups</div>
            <div className={css.offering}>
              <b>$</b>10/hr discount on all Hourly Fees for up to 2 hrs
            </div>
            <div className={css.offering}>
              30 minutes of free design adjustments
            </div>
            <div className={css.offering}>
              1 hour total of free consulting time a month
            </div>
            <div className={css.offeringend}>
              2 hours total of free content updates a month
            </div>
          </div>
        </div>
        <div className={css.column}>
          <div className={css.title}>
            Business
            <div className={css.smalltitle}></div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}>Starting from</div>
              <div className={css.price}>
                <b>$</b>499
              </div>

              <div className={css.discount}>/month</div>
            </div>

            <div className={css.offering}>Everything in Tier II</div>
            <div className={css.offering}>
              Business hours phone availability
            </div>
            <div className={css.offering}>High Priority Scheduling</div>
            <div className={css.offering}>
              <b>$</b>20/hr discount on all Hourly Fees for up to 4 hrs
            </div>
            <div className={css.offering}>
              1 hour of free design adjustments
            </div>
            <div className={css.offering}>
              2 hours total of free consulting time a month
            </div>
            <div className={css.offeringend}>
              3 hours total of free content updates a month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
