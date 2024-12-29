import { Button } from '../../ui/Button/Button';
import { links } from './constants';
import classes from './Header.module.css';
import { Link } from 'react-router';

export function Header() {
  
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
      <Button text="Online Bank" verticalPadding='1rem' horizontalPadding='1rem' borderRadius='16px' handler={() => {return}} />
    </header>
  );
}
