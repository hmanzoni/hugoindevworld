import React, { useContext } from 'react';
import '../../assets/css/footer.css';
import customContext from '../../context/customs/customsContext';
import foundIcon from '../functions/foundIcon';
import { SocialLinks } from '../ui/SocialLinks';
import footerInfo from '../data/footer';
import { footer as socialLinksInfo } from '../data/socialLinks';

const FooterLink = ({ infoCard }) => {
  return (
    <li>
      <a href={infoCard.link} className="footer__link">
        {infoCard.title}
      </a>
    </li>
  );
};

const Footer = () => {

  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;

  const { title, subtitle, rightsText, linksInt } = footerInfo[language || 'en'];
  const actualYear = new Date().getUTCFullYear();

  const arrIconsSocial = [];
  socialLinksInfo.forEach(socialInfo => arrIconsSocial.push({ icon: foundIcon(icons, socialInfo.icon), link: socialInfo.link }));

  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div className="h1 footer__title">{title}</div>
          <span className="footer__subtitle">{subtitle}</span>
          <ul className="footer__links">
            {linksInt.map((linkInt, index) => (
              <FooterLink key={index} infoCard={linkInt} />
            ))}
          </ul>
          <div className="footer__socials">
            {arrIconsSocial.map((socialLink, index) => (
              <SocialLinks key={index} infoCard={socialLink} classAnchor={'footer__social'} />
            ))}
          </div>
        </div>
        <p className="footer__copy">&#169; {actualYear} {rightsText}</p>
      </div>
    </footer>
  );
};

export default Footer;
