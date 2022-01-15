import React, { useContext } from 'react';
import '../assets/css/footer.css';
import iconContext from '../context/icons/iconsContext';
import { foundIcon } from './ui/icons';

const FooterLink = ({ infoCard }) => {
  return (
    <li>
      <a href={infoCard.link} className="footer__link">
        {infoCard.title}
      </a>
    </li>
  );
};

const FooterSocialLink = ({ infoCard }) => {
  return (
    <a
      href={infoCard.link}
      target="_blank"
      className="footer__social"
      rel="noreferrer"
    >
      {infoCard.icon}
    </a>
  );
};

const Footer = () => {

  const iconsContext = useContext(iconContext);
  const { icons } = iconsContext;

  const arrIconsSocial = [
    {icon: foundIcon(icons, 'UilTwitterAlt'), link: '!#'}, 
    {icon: foundIcon(icons, 'UilFacebookF'), link: '!#'}, 
    {icon: foundIcon(icons, 'UilInstagram'), link: '!#'},
  ];

  const linksInt = [
    { title: 'Services', link: '!#' },
    { title: 'Portfolio', link: '!#' },
    { title: 'Contactme', link: '!#' },
  ];
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div className="h1 footer__title">Hugo</div>
          <span className="footer__subtitle">Software development</span>
          <ul className="footer__links">
            {linksInt.map((linkInt, index) => (
              <FooterLink key={index} infoCard={linkInt} />
            ))}
          </ul>
          <div className="footer__socials">
            {arrIconsSocial.map((socialLink, index) => (
              <FooterSocialLink key={index} infoCard={socialLink} />
            ))}
          </div>
        </div>
        <p className="footer__copy">&#169; Hugo all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
