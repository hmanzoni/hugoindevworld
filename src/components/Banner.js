import React, { useContext } from 'react';
import '../assets/css/project.css';
import project from '../assets/img/project.png';
import iconContext from '../context/icons/customsContext';
import foundIcon from './functions/foundIcon';

const Banner = () => {
  const customsContext = useContext(iconContext);
  const { icons } = customsContext;
  
  const messageProject = foundIcon(icons, 'UilMessage', 'project__icon');
  
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me now and get a 30% discount on your new project.
            </p>
            <a href="!#" className="button button--flex button--white">
              Contact Me
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
