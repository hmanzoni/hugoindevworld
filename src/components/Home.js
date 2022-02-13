import React, { useContext } from 'react';
import '../assets/css/home.css';
import customContext from '../context/customs/customsContext';
import HomeImg from './HomeImg';
import { foundIcon } from './ui/icons';
import homeInfo from './data/home';

const HomeSocialLink = ({ infoCard }) => (
  <a
    href={infoCard.link}
    target="_blank"
    className="home__social-icon"
    rel="noreferrer"
  >
    {infoCard.icon}
  </a>
);
const HomeScroll = ({iconHomeScroll, scollText}) => (
  <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
      {iconHomeScroll.mouseAlt}
      <span className="home__scroll-name">{scollText}</span>
      {iconHomeScroll.arrowDown}
    </a>
  </div>
);

const Home = () => {

  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;
  const {title, subtitle, description, socialLinksInfo, iconHomeScrollInfo, scollText} = homeInfo[language || 'en'];
  const socialLinks = [];
  const iconHomeScroll = {};

  socialLinksInfo.forEach(iconInfo => {
    const params = {link: iconInfo.link, icon: foundIcon(icons, iconInfo.icon)}
    socialLinks.push(params);
  });

  iconHomeScrollInfo.forEach(iconInfo => iconHomeScroll[iconInfo.name] = foundIcon(icons, iconInfo.icon, iconInfo.classIcon));
  
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {socialLinks.map((socialLink, index) => (
              <HomeSocialLink key={index} infoCard={socialLink} />
            ))}
          </div>

          <div className="home__img">
            <HomeImg />
          </div>

          <div className="home__data">
            <h1 className="home__title">{title}</h1>
            <h3 className="home__subtitle">{subtitle}</h3>
            <p className="home__description">{description}</p>
            {/* <a href="!#" className="button button--flex">
              Contact Me <UilMessage className="button__icon" />
            </a> */}
          </div>
        </div>
        <HomeScroll iconHomeScroll={iconHomeScroll} scollText={scollText} />
      </div>
    </section>
  );
};

export default Home;
