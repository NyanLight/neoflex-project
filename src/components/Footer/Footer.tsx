import classes from './Footer.module.css';
import type { CustomLink } from '../../types/Link.type';

export function Footer() {
  const links: CustomLink[] = [
    { key: 1, name: 'About bank', url: 'example.com' },
    { key: 2, name: 'Ask a Question', url: 'example.com' },
    { key: 3, name: 'Quality of service', url: 'example.com' },
    { key: 4, name: 'Requisites', url: 'example.com' },
    { key: 5, name: 'Press center', url: 'example.com' },
    { key: 6, name: 'Investors', url: 'example.com' },
    { key: 7, name: 'Analytics', url: 'example.com' },
    { key: 8, name: 'Business and processes', url: 'example.com' },
    { key: 9, name: 'Compliance and business ethics', url: 'example.com' },
  ];

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
