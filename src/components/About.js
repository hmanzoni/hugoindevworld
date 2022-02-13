import React, { useContext } from 'react';
import '../assets/css/about.css';
import about from '../assets/img/about.jpg';
import hugoCV from '../assets/pdf/HugoManzoni.CV.pdf';
import customContext from '../context/customs/customsContext';
import calcYears from './functions/calcYears';
import foundIcon from './functions/foundIcon';
import aboutInfo from './data/about';

const SingleAboutCard = ({ infoCard }) => {
  let title = infoCard.title;
  const {name, desc} = infoCard;
  if (title === '$year' && infoCard.year) {
    title = calcYears(title, infoCard.year, true);
  }
  return (
    <div>
      <span className="about__info-title">{title}+</span>
      <span className="about__info-name">
        {name}
        <br />
        {desc}
      </span>
    </div>
  );
};

const TextDesc = ({text}) => <>{text}<br /></>;

const About = () => {
  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;
  
  const {title, subtitle, downloadAltIcon, description, aboutCardsInfo, downloadText} = aboutInfo[language || 'en'];
  const downloadAlt = foundIcon(icons, downloadAltIcon);

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="about__container container grid">
        <img src={about} alt="about" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            {description.map((singleText, index) => <TextDesc key={index} text={singleText}></TextDesc>)}
          </p>

          <div className="about__info">
            {aboutCardsInfo.map((infoCard) => <SingleAboutCard key={infoCard.id} infoCard={infoCard} />)}
          </div>

          <div className="about__buttons">
            <a download="" href={hugoCV} className="button button--flex">
              {downloadText}
              {downloadAlt}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
