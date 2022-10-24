import { PortfolioCard } from '../components';
import css from '../styles/Portfolio.module.css';

const qws_srp = '/qws_srp.png';
const qws_cgo = '/qws_cgo.png';
const qws_wedding = '/qws_wedding.png';

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
        tools="wordpress, email, one page wonder"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_cgo}
        alt="competitive gaming organization"
        title="CGO Media"
        tools="PHP, MySQL, web app, frontend, backend, database"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_wedding}
        alt="wedding"
        title="Simple Wedding Site"
        tools="JS, CSS, HTML, RSVP form"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_srp}
        alt="flareZ shoes"
        title="FlareZ Shoes"
        tools="NextJS, shopify store, auth, database"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_cgo}
        alt="Moonlit Photography Ontario"
        title="Moonlit Photography Ontario"
        tools="NextJS, frontend, design"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_wedding}
        alt="Dural Photography"
        title="Dural Photography"
        tools="NextJS, frontend, design, one page wonder"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_srp}
        alt="online marketplace"
        title="Online Marketplace WebApp"
        tools="Angular, .NET, SQLServer, no design"
      ></PortfolioCard>
      <PortfolioCard
        image={qws_cgo}
        alt="react games"
        title="React/NextJS Games"
        tools="React, NextJS, interactivity"
      ></PortfolioCard>
    </div>
  );
};
