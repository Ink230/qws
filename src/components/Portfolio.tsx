import { PortfolioCard } from '../components';
import css from '../styles/Portfolio.module.css';

const qws_srp = '/qws_srp.png';
const qws_cgo = '/qws_cgo.png';
const qws_wedding = '/qws_wedding.png';
const qws_flarez = '/qws_flarez.png';
const qws_mlit = '/qws_mlit.png';
const qws_vqv = '/qws_vqv.png';
const qws_dural = '/qws_dural.png';
const qws_code = '/qws_code.png';

type Props = {
  _unused?: string;
};

export const Portfolio: React.FC<Props> = ({ _unused }: Props) => {
  return (
    <div className={css.container}>
      <PortfolioCard
        image={qws_srp}
        alt="stone road pharmacy"
        title="Stone Road Pharmacy"
        tools="WordPress, one page wonder"
      ></PortfolioCard>

      <PortfolioCard
        image={qws_mlit}
        alt="Moonlit Digital Studio"
        title="Moonlit Digital Studio"
        tools="NextJS, frontend, design"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_dural}
        alt="Dural Photography"
        title="Dural Photography"
        tools="NextJS, frontend, design"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_vqv}
        alt="VQ Visuals"
        title="VQ Visuals"
        tools="NextJS, frontend, design"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_cgo}
        alt="competitive gaming organization"
        title="CGO Media"
        tools="Web App, PHP, MySQL, dashboard"
      ></PortfolioCard>

      <PortfolioCard
        image={qws_flarez}
        alt="flareZ shoes"
        title="FlareZ Shoes"
        tools="Web App, NextJS, shopify store"
      ></PortfolioCard>

      <PortfolioCard
        image={qws_wedding}
        alt="wedding"
        title="Simple Wedding Site"
        tools="NextJS, simple"
      ></PortfolioCard>
      <a
        href="https://github.com/Ink230/online-marketplace"
        target="_blank"
        rel="noreferrer"
      >
        <PortfolioCard
          image={qws_code}
          alt="online marketplace"
          title="Online Marketplace"
          tools="Web App, Angular, .NET, SQLite"
        ></PortfolioCard>
      </a>
    </div>
  );
};
