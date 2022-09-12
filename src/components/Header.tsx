import Link from 'next/link';

import css from '../styles/Header.module.css';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Test', path: '/test' },
];

export const Header: React.FC = () => {
  return (
    <div className={css.topbar}>
      <div></div>
      <div>
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
