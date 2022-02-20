import React from 'react';

const HomeSocialEmail = ({textEmail}) => <div className='home__social-mail'>{textEmail}</div>

const SocialLinks = ({ infoCard, classAnchor }) => {
  const linkSplited = {
    type: infoCard.link.split(':')[0],
    text: infoCard.link.split(':')[1]
  }
  const isMailHome = classAnchor.includes('home') && linkSplited.type === 'mailto';

  return (
    <a
      href={infoCard.link}
      target="_blank"
      className={classAnchor}
      rel="noreferrer"
    >
      {infoCard.icon}
      {isMailHome && <HomeSocialEmail textEmail={linkSplited.text} />}
    </a>
  );
};

export default SocialLinks;
