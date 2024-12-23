import { Button } from '../../ui/Button/Button';
import type { CustomLink } from '../../types/Link.type';
import classes from './Header.module.css';

export function Header() {
  const links: CustomLink[] = [
    {
      key: 1,
      name: 'Credit card',
      url: 'www.example.com',
    },
    {
      key: 2,
      name: 'Product',
      url: 'www.example.com',
    },
    {
      key: 3,
      name: 'Account',
      url: 'www.example.com',
    },
    {
      key: 4,
      name: 'Resource',
      url: 'www.example.com',
    },
  ];

  return (
    <header className={classes.header}>
      <span className={classes.header__textLogo}>NeoBank</span>
      <nav>
        <ul className={classes.header__navigation}>
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button text="Online Bank" padding={16} />
    </header>
  );
}
