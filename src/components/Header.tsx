import Link from 'next/link';

import css from '../styles/Header.module.css';

import Image from 'next/image';

import qws from '../../public/qws_logo_small.svg';

export const navLinks = [
  { name: 'Websites', path: '/websites' },

  { name: 'Maintenance & Hosting', path: '/maintenance' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Business Solutions', path: '/business' },
  { name: 'Hourly Fees', path: '/hourly' },
];

export const Header: React.FC = () => {
  return (
    <div className={css.topbar}>
      <div className={css.logo}>
        <Image alt="QWS" src={qws} quality={100} layout="responsive" />
      </div>
      <div className={css.navbar}>
        <ul className={css.navmenu}>
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
