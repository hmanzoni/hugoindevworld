import React from 'react';
import { UilFacebookF, UilInstagram, UilTwitterAlt } from '@iconscout/react-unicons'

const FooterLink = ({ infoCard }) => {
  return (
    <li>
      <a href={infoCard.link} className="footer__link">
        {infoCard.nombre}
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
  const socialLinks = [
    { icon: <UilFacebookF />, link: '!#' },
    { icon: <UilInstagram />, link: '!#' },
    { icon: <UilTwitterAlt />, link: '!#' },
  ];
  const linksInt = [
    { nombre: 'Services', link: '!#' },
    { nombre: 'Portfolio', link: '!#' },
    { nombre: 'Contactme', link: '!#' },
  ];
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div className="h1 footer__title">Alexa</div>
          <span className="footer__subtitle">Software development</span>
          <ul className="footer__links">
            {linksInt.map((linkInt, index) => (
              <FooterLink key={index} infoCard={linkInt} />
            ))}
          </ul>
          <div className="footer__socials">
            {socialLinks.map((socialLink, index) => (
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
