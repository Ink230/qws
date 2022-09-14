import Link from 'next/link';

import css from '../styles/Header.module.css';

import Image from 'next/image';

import qws from '../../public/qws_logo_small.svg';

export const navLinks = [
  { name: 'Websites', path: '/test' },
  { name: 'APIs & DB', path: '/test' },
  { name: 'Maintenance', path: '/test' },
  { name: 'Business Solutions', path: '/test' },
  { name: 'Branding', path: '/test' },
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
