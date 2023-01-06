import css from '../styles/Business.module.css';

type Props = {
  _unused?: string;
};
export const Business: React.FC<Props> = ({ _unused }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.title}>Additional Services</div>
      <div className={css.servicescontainer}>
        <div className={css.service}>APIs and RPC</div>
        <div className={css.service}>Databases</div>
        <div className={css.service}>Cloud Services</div>
        <div className={css.service}>Consulting</div>
        <div className={css.service}>Branding</div>
        <div className={css.service}>Social media</div>
        <div className={css.service}>Logo design</div>
        <div className={css.service}>Internal Software</div>
        <div className={css.service}>Desktop Apps</div>
        <div className={css.service}>Discord Bots</div>
        <div className={css.service}>Automation Scripts</div>
        <div className={css.service}>Cloud email</div>
        <div className={css.service}>Dashboards</div>
      </div>
    </div>
  );
};
