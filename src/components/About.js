import React from 'react';
import about from './assets/img/about.jpg';
import cv from './assets/pdf/Alexa-Cv.pdf';
import { UilDownloadAlt } from '@iconscout/react-unicons'

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
  const aboutCardsInfo = [
    { title: '08+', name: 'Years', desc: 'experience' },
    { title: '20+', name: 'Completed', desc: 'project' },
    { title: '05+', name: 'Companies', desc: 'worked' },
  ];
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={about} alt="about" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </p>

          <div className="about__info">
            {aboutCardsInfo.map((infoCard, index) => (
              <SingleAboutCard key={index} infoCard={infoCard} />
            ))}
          </div>

          <div className="about__buttons">
            <a download="" href={cv} className="button button--flex">
              Download CV
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
