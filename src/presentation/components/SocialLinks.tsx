import React, { ReactElement } from 'react';

interface SocialLinkCardInfo {
  link: string;
  icon: ReactElement | undefined;
}

interface SocialLinksProps {
  infoCard: SocialLinkCardInfo;
  classAnchor: string;
}

export const SocialLinks = ({ infoCard, classAnchor }: SocialLinksProps) => (
  <a
    href={infoCard.link}
    target="_blank"
    aria-label="Social link"
    className={classAnchor}
    rel="noreferrer"
  >
    {infoCard.icon}
  </a>
);

interface ContactMeInfo {
  contactMeText: string;
  contactLink: string;
  contactTextEmail: string;
  iconContact: ReactElement | undefined;
}

interface ContactMeElementProps {
  infoContact: ContactMeInfo;
}

export const ContactMeElement = ({ infoContact }: ContactMeElementProps) => (
  <a href={infoContact.contactLink} className="button button--flex home__mailto" aria-label="Mail link">
    {infoContact.contactMeText}
    {infoContact.iconContact}
    {<div className="home__social-mail">{infoContact.contactTextEmail}</div>}
  </a>
);

interface ButtonDownloadCVInfo {
  fileNameCV: string;
  linkCV: string;
  downloadText: string;
  downloadAlt: ReactElement | undefined;
}

interface ButtonDownloadCVProps {
  infoCard: ButtonDownloadCVInfo;
}

export const ButtonDownloadCV = ({ infoCard }: ButtonDownloadCVProps) => (
  <div className="about__buttons">
    <a download={infoCard.fileNameCV} href={infoCard.linkCV} className="button button--flex" aria-label="Download CV">
      {infoCard.downloadText}
      {infoCard.downloadAlt}
    </a>
  </div>
);
