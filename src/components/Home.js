import React, { useContext } from 'react';
import HomeImg from './HomeImg';
import iconContext from '../context/icons/iconsContext';
import '../assets/css/home.css';

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
const HomeScroll = ({iconHomeScroll}) => (
  <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
      {iconHomeScroll.mouseAlt}
      <span className="home__scroll-name">Scroll down</span>
      {iconHomeScroll.arrowDown}
    </a>
  </div>
);

const Home = () => {

  const iconsContext = useContext(iconContext);
  const { icons } = iconsContext;

  const socialLinks = [
    {
      link: '!#',
      icon: icons.find(i => i?.type?.name === 'UilLinkedinAlt'),
    },
    {
      link: '!#',
      icon: icons.find(i => i?.type?.name === 'UilDribbble'),
    },
    {
      link: '!#',
      icon: icons.find(i => i?.type?.name === 'UilGithubAlt'),
    },
  ];

  const iconHomeScroll = {
    mouseAlt: icons.find(i => i?.type?.name === 'UilMouseAlt' && i.props.className === 'home__scroll-mouse'), 
    arrowDown: icons.find(i => i?.type?.name === 'UilArrowDown' && i.props.className === 'home__scroll-arrow')
}

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
            <h1 className="home__title">Hi, I'm Hugo!</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
              High level experience in web and software development knowledge,
              and continuously learning new stacks.
            </p>
            {/* <a href="!#" className="button button--flex">
              Contact Me <UilMessage className="button__icon" />
            </a> */}
          </div>
        </div>
        <HomeScroll iconHomeScroll={iconHomeScroll} />
      </div>
    </section>
  );
};

export default Home;
