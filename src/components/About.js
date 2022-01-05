import React, {useContext} from 'react';
import '../assets/css/about.css';
import about from '../assets/img/about.jpg';
import cv from '../assets/pdf/Alexa-Cv.pdf';
import iconContext from '../context/icons/iconsContext';

const SingleAboutCard = ({ infoCard }) => {
  return (
    <div>
      <span className="about__info-title">{infoCard.title}</span>
      <span className="about__info-name">
        {infoCard.name}
        <br />
        {infoCard.desc}
      </span>
    </div>
  );
};

const About = () => {
  const iconsContext = useContext(iconContext);
  const { icons } = iconsContext;
  
  const downloadAlt = icons.find(i => i?.type?.name === 'UilDownloadAlt');

  const aboutCardsInfo = [
    { title: '08+', name: 'Years', desc: 'experience' },
    { title: '20+', name: 'Completed', desc: 'project' },
    { title: '05+', name: 'Companies', desc: 'worked' },
  ];
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">How I start in IT world</span>

      <div className="about__container container grid">
        <img src={about} alt="about" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            I have been a software enthusiast IT since 2015.
            <br />
            As a professional, my main goal is to increase my knowledge in this field, things like new
            technologies and programming languages. In particular, I look enjoy discovering their
            weaknesses and strengths.
            <br />
            In addition, I consider myself a self-motivated, enthusiastic and resilient person and I
            have the ability to learn fast and adapt to any changes quickly. Moreover, I am
            very sociable, I love to learn from other cultures.
            <br />
            I have a degree on biochemistry and worked in this field for some years. Nevertheless, in
            2015 I started learning about IT, and finally I pursued my dream of starting with an
            independent team for websites for clients for a living.
          </p>

          <div className="about__info">
            {aboutCardsInfo.map((infoCard, index) => (
              <SingleAboutCard key={index} infoCard={infoCard} />
            ))}
          </div>

          <div className="about__buttons">
            <a download="" href={cv} className="button button--flex">
              Download CV
              {downloadAlt}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
