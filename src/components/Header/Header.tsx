import { Button } from '../../ui/Button/Button';
import type { CustomLink } from '../../types/Link.type';
import classes from './Header.module.css';
import { Link } from 'react-router';

export function Header() {
  const links: CustomLink[] = [
    {
      key: 1,
      name: 'Credit card',
      url: '/loan',
    },
    {
      key: 2,
      name: 'Product',
      url: '/product',
    },
    {
      key: 3,
      name: 'Account',
      url: '/account',
    },
    {
      key: 4,
      name: 'Resource',
      url: '/resource',
    },
  ];

  return (
    <header className={classes.header}>
      <Link to={'/'}><span className={classes.header__textLogo}>NeoBank</span></Link>
      <nav>
        <ul className={classes.header__navigation}>
          {links.map((link) => (
            <li key={link.key}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button text="Online Bank" verticalPadding='1rem' horizontalPadding='1rem' borderRadius='16px' />
    </header>
  );
}
