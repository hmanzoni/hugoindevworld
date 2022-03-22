import React, { useContext } from 'react';
import '../assets/css/home.css';
import customContext from '../context/customs/customsContext';
import HomeImg from './ui/HomeImg';
import { SocialLinks, ContactMeElement } from './ui/SocialLinks';
import HomeScroll from './ui/HomeScroll';
import foundIcon from './functions/foundIcon';
import homeInfo from './data/home';
import { home as socialLinksInfo } from './data/socialLinks';


const Home = () => {

  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;
  const { title, subtitle, description, scollText, contactMeText } = homeInfo[language || 'en'];
  const { iconHomeScrollInfo, iconContactMe, showContactButton, contactLink, contactTextEmail } = homeInfo['unique'];
  const socialLinks = [];
  const iconHomeScroll = {};

  const iconContact = foundIcon(icons, iconContactMe.iconName, iconContactMe.iconClass);
  const objInfoContact = { contactMeText, contactLink, contactTextEmail, iconContact }
  socialLinksInfo.forEach(iconInfo => {
    const params = { link: iconInfo.link, icon: foundIcon(icons, iconInfo.icon) }
    socialLinks.push(params);
  });

  iconHomeScrollInfo.forEach(iconInfo => iconHomeScroll[iconInfo.name] = foundIcon(icons, iconInfo.icon, iconInfo.classIcon));

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {socialLinks.map((socialLink, index) => (
              <SocialLinks key={index} infoCard={socialLink} classAnchor={'home__social-icon'} />
            ))}
          </div>

          <div className="home__img">
            <HomeImg />
          </div>

          <div className="home__data">
            <h1 className="home__title">{title}</h1>
            <h3 className="home__subtitle">{subtitle}</h3>
            <p className="home__description">{description}</p>
            {showContactButton && <ContactMeElement infoContact={objInfoContact} />}
          </div>
        </div>
        <HomeScroll iconHomeScroll={iconHomeScroll} scollText={scollText} />
      </div>
    </section>
  );
};

export default Home;
