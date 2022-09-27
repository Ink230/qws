import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import css from '../styles/Product.module.css';
type Props = {
  icon: string;
  title: string;
  capture: string;
  captureExtra?: string;
  Component: NextComponentType;
  action: string;
  actionRoute: string;
};

export const Product: React.FC<Props> = ({
  icon,
  title,
  capture,
  captureExtra,
  Component,
  action,
  actionRoute,
}: Props) => {
  return (
    <div className={css.container}>
      <div className={css.push}>
        <div className={css.icon}>
          <Image
            alt="Icon"
            src={icon}
            quality={100}
            layout="responsive"
          ></Image>
        </div>
        <div className={css.title}>{title}</div>
        <div className={css.capture}>
          {capture}
          <br />
          <br />
          {captureExtra}
        </div>
        <Link href={actionRoute} key={actionRoute}>
          <div className={css.action}>{action}</div>
        </Link>
      </div>
      <div className={css.offering}>
        <Component />
      </div>
    </div>
  );
};
