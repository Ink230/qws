import Image from 'next/image';
import hero from '../../public/qws_hero.svg';
import css from '../styles/Hero.module.css';

type Props = {
  _unused?: number;
};

export const Hero: React.FC<Props> = ({ _unused }: Props) => {
  return (
    <div className={css.herocontainer}>
      <div className={css.heropush}>
        <div className={css.herotitle}>
          Focus on business, let us handle the tech overhead
        </div>
        <div className={css.herocapture}>
          QWS will design, build or manage your online experience. Attract and
          retain clients without worrying about technology.{' '}
        </div>
        <div className={css.heroaction}>Start Now</div>
      </div>
      <div className={css.heroimage}>
        <Image alt="hero image" src={hero} quality={100} layout="responsive" />
      </div>
    </div>
  );
};