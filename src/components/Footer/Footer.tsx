import classes from './Footer.module.css';
import { links } from './constants';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <div className={classes.footer__top}>
          <img src="src/assets/Logo.svg" className={classes.footer__logo} />
          <address>
            <a href="tel:+74959842513" className={classes.footer__phone}>
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className={classes.footer__mail}>
              info@neoflex.ru
            </a>
          </address>
        </div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.key}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.footer__line}></div>
        <div className={classes.footer__cookies}>
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </div>
      </div>
    </footer>
  );
}
