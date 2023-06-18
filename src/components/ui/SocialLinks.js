import React from 'react';

export const ContactMeElement = ({ infoContact }) => (
  <a href={infoContact.contactLink} className="button button--flex home__mailto" aria-label="Mail link">
    {infoContact.contactMeText}
    {infoContact.iconContact}
    {<div className='home__social-mail'>{infoContact.contactTextEmail}</div>}
  </a>
)

export const SocialLinks = ({ infoCard, classAnchor }) => (
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

export const ButtonDownloadCV = ({ infoCard }) => (
  <div className="about__buttons">
    <a download={infoCard.fileNameCV} href={infoCard.linkCV} className="button button--flex" aria-label="Download CV">
      {infoCard.downloadText}
      {infoCard.downloadAlt}
    </a>
  </div>
);
