import React from 'react';
import '@assets/css/about.css';
import enCV from '@assets/pdf/en.CV.pdf';
import esCV from '@assets/pdf/es.CV.pdf';
import itCV from '@assets/pdf/it.CV.pdf';
import { useAppContext } from '@presentation/context/useAppContext';
import foundIcon from '@presentation/utils/foundIcon';
import SingleAboutCard from '@presentation/components/SingleAboutCard';
import AboutCard from '@presentation/components/AboutCard';
import { ButtonDownloadCV } from '@presentation/components/SocialLinks';
import { JsonContentRepository } from '@infrastructure/adapters/JsonContentRepository';

const contentRepo = new JsonContentRepository();
const aboutInfo = contentRepo.getAboutContent();
const aboutImgInfo = contentRepo.getAboutImgContent();

const TextDesc = ({ text }: { text: string }) => (
  <>
    {text}
    <br />
  </>
);

const About = () => {
  const { icons, language } = useAppContext();

  const {
    title,
    subtitle,
    downloadAltIcon,
    description,
    aboutCardsInfo,
    downloadText,
    showDownloadCV,
    fileNameCV,
  } = aboutInfo[language || 'en'];
  const { rolesText } = aboutImgInfo[language || 'en'];
  const aboutImgTexts = aboutImgInfo['unique'];
  const linkCV = language === 'es' ? esCV : language === 'it' ? itCV : enCV;

  const downloadAlt = foundIcon(icons, downloadAltIcon);

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="about__container container grid">
        <AboutCard aboutImgTexts={aboutImgTexts} rolesText={rolesText} />
        <div className="about__data">
          <p className="about__description">
            {description.map((singleText, index) => (
              <TextDesc key={index} text={singleText} />
            ))}
          </p>

          <div className="about__info">
            {aboutCardsInfo.map((infoCard) => (
              <SingleAboutCard key={infoCard.id} infoCard={infoCard} />
            ))}
          </div>

          {showDownloadCV && (
            <ButtonDownloadCV infoCard={{ fileNameCV, linkCV, downloadText, downloadAlt }} />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
