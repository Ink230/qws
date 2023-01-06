import Link from 'next/link';

import css from '../styles/Header.module.css';

import Image from 'next/image';

import hamburger from '../../public/qws_hamburger.svg';
import qws from '../../public/qws_logo_small.svg';

import { useRef } from 'react';

export const navLinks = [
  { name: 'Websites', path: '/#websites' },

  { name: 'Maintenance & Hosting', path: '/#maintenance' },
  { name: 'Portfolio', path: '/#portfolio' },
  { name: 'Business Solutions', path: '/#business' },
  { name: 'Hourly Fees', path: '/#hourly' },
];

export const Header: React.FC = () => {
  const hamRef = useRef<HTMLUListElement>(null);

  function hamburgerToggle(state: boolean): void {
    if (hamRef.current == null) return;

    if (state) {
      hamRef.current.style.display = 'flex';
    } else {
      hamRef.current.style.display = 'none';
    }
  }

  return (
    <div className={css.topbar}>
      <div className={css.logo}>
        <Link href="/" passHref>
          <a>
            <Image alt="QWS" src={qws} quality={100} layout="responsive" />
          </a>
        </Link>
      </div>
      <div className={css.navbar}>
        <ul className={css.navmenu}>
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                <a>
                  <li>{link.name}</li>
                </a>
              </Link>
            );
          })}
        </ul>
        <a
          onClick={() => hamburgerToggle(true)}
          aria-label="Hamburger"
          href="#"
        >
          <div className={css.hamburgericon}>
            <Image
              alt="QWS"
              src={hamburger}
              quality={100}
              layout="responsive"
            />
          </div>
        </a>
        <a onClick={() => hamburgerToggle(false)} aria-label="Menu" href="#">
          <ul className={css.hamburgercontainer} ref={hamRef}>
            <div className={css.logo}>
              <Image alt="QWS" src={qws} quality={100} layout="responsive" />
            </div>

            {navLinks.map((link, index) => {
              return (
                <Link href={link.path} key={index}>
                  <li>{link.name}</li>
                </Link>
              );
            })}
            <div className={css.close}>
              X<br />
              <br />
              Close Menu
            </div>
          </ul>
        </a>
      </div>
    </div>
  );
};
