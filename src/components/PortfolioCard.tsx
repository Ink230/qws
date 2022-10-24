import Image from 'next/image';
import css from '../styles/PortfolioCard.module.css';

type Props = {
  image: string;
  alt?: string;
  title?: string;
  tools?: string;
};

export const PortfolioCard: React.FC<Props> = ({
  image,
  alt,
  title,
  tools,
}: Props) => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <Image alt={alt} src={image} quality={100} layout="fill"></Image>
      </div>
      <div className={css.bottomcontainer}>
        <div className={css.title}>{title}</div>
        <div className={css.tools}>{tools}</div>
      </div>
    </div>
  );
};
