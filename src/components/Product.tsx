import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import css from '../styles/Product.module.css';
type Props = {
  icon: string;
  vertical?: boolean;
  title: string;
  capture: string;
  captureExtra?: string;
  Component: NextComponentType;
  action: string;
  actionRoute: string;
  actionColour?: boolean;
};

export const Product: React.FC<Props> = ({
  icon,
  vertical,
  title,
  capture,
  captureExtra,
  Component,
  action,
  actionRoute,
  actionColour,
}: Props) => {
  const iconType = vertical ? css.iconvertical : css.icon;
  const actionType = actionColour ? css.actiondark : css.action;

  return (
    <div className={css.container}>
      <div className={css.push}>
        <div className={iconType}>
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
          <a>
            <div className={actionType}>{action}</div>
          </a>
        </Link>
      </div>
      <div className={css.offering}>
        <Component />
      </div>
    </div>
  );
};
