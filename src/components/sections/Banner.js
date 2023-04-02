import React, { useContext } from 'react';
import '../../assets/css/project.css';
import project from '../../assets/img/project.png';
import iconContext from '../context/icons/customsContext';
import foundIcon from '../../functions/foundIcon';
import bannerInfo from '../../data/banner';

const Banner = () => {
  const customsContext = useContext(iconContext);
  const { icons, language } = customsContext;
  const { title, description, contactMeText } = bannerInfo[language || 'en'];
  const { iconBanner } = bannerInfo['unique'];

  const messageProject = foundIcon(icons, iconBanner.iconName, iconBanner.iconClass);

  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">{title}</h2>
            <p className="project__description">
              {description}
            </p>
            <a href="#contact" className="button button--flex button--white">
              {contactMeText}
              {messageProject}
            </a>
          </div>
          <img src={project} alt="project" className="project__img" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
