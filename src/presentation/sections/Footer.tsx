import React from 'react';
import '@assets/css/footer.css';
import { useAppContext } from '@presentation/context/useAppContext';
import foundIcon from '@presentation/utils/foundIcon';
import { SocialLinks } from '@presentation/components/SocialLinks';
import { JsonContentRepository } from '@infrastructure/adapters/JsonContentRepository';
import { FooterLinkInfo } from '@domain/models/Footer';

const contentRepo = new JsonContentRepository();
const footerInfo = contentRepo.getFooterContent();
const socialLinksData = contentRepo.getSocialLinksContent();

interface FooterLinkProps {
  infoCard: FooterLinkInfo;
}

const FooterLink = ({ infoCard }: FooterLinkProps) => (
  <li>
    <a href={infoCard.link} className="footer__link" aria-label="Footer link">
      {infoCard.title}
    </a>
  </li>
);

const Footer = () => {
  const { icons, language } = useAppContext();

  const { title, subtitle, rightsText, linksInt } = footerInfo[language || 'en'];
  const actualYear = new Date().getUTCFullYear();

  const arrIconsSocial = socialLinksData.footer.map((socialInfo) => ({
    icon: foundIcon(icons, socialInfo.icon),
    link: socialInfo.link,
  }));

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
              <SocialLinks key={index} infoCard={socialLink} classAnchor="footer__social" />
            ))}
          </div>
        </div>
        <p className="footer__copy">
          &#169; {actualYear} {rightsText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
