import css from '../styles/TableDark.module.css';

type Props = {
  _unused?: string;
};

export const ServiceFees: React.FC<Props> = ({ _unused }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.tablecontainer}>
        <div className={css.column}>
          <div className={css.title}>
            Manage<div className={css.smalltitle}></div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}></div>
              <div className={css.price}>
                <b>$</b>50
              </div>

              <div className={css.discount}>/hour</div>
            </div>

            <div className={css.offering}>
              Cloud services (email, file-sharing)
            </div>
            <div className={css.offering}>
              Small content changes (text, images, colours)
            </div>
            <div className={css.offering}>
              Web solutions and services consulting
            </div>
            <div className={css.offeringend}>Backups</div>
          </div>
        </div>
        <div className={css.column}>
          <div className={css.title}>
            Design
            <div className={css.smalltitle}></div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}></div>
              <div className={css.price}>
                <b>$</b>90
              </div>

              <div className={css.discount}>/hour</div>
            </div>

            <div className={css.offering}>
              Positional layout adjustments and changes
            </div>
            <div className={css.offering}>
              Design or CSS adjustments and changes
            </div>
            <div className={css.offering}>Small component creation</div>
            <div className={css.offeringend}>Basic logo creation</div>
          </div>
        </div>
        <div className={css.column}>
          <div className={css.title}>
            Code
            <div className={css.smalltitle}></div>
          </div>
          <div className={css.inner}>
            <div className={css.pricingcontainer}>
              <div className={css.startingfrom}></div>
              <div className={css.price}>
                <b>$</b>120
              </div>

              <div className={css.discount}>/hour</div>
            </div>

            <div className={css.offering}>New website features</div>
            <div className={css.offering}>New or existing APIs</div>
            <div className={css.offering}>Database creation or consulting</div>
            <div className={css.offering}>
              Diagnostics and performance reviews
            </div>
            <div className={css.offeringend}>Other</div>
          </div>
        </div>
      </div>
    </div>
  );
};
