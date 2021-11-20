import React from 'react';
import HomeImg from './HomeImg';
import { UilDribbble, UilLinkedinAlt, UilGithubAlt, UilMouseAlt, UilArrowDown/*, UilMessage*/ } from '@iconscout/react-unicons';
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
const HomeScroll = () => (
  <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
      <UilMouseAlt size="32" className="home__scroll-mouse" />
      <span className="home__scroll-name">Scroll down</span>
      <UilArrowDown className="home__scroll-arrow" />
    </a>
  </div>
);

const Home = () => {
  const sizeIcons = "32";
  const socialLinks = [
    {
      link: '!#',
      icon: <UilLinkedinAlt size={sizeIcons} />,
    },
    {
      link: '!#',
      icon: <UilDribbble size={sizeIcons} />,
    },
    {
      link: '!#',
      icon: <UilGithubAlt size={sizeIcons} />,
    },
  ];
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
        <HomeScroll />
      </div>
    </section>
  );
};

export default Home;
