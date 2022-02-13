import React, { useContext, useState } from 'react';
import '../assets/css/qualification.css';
import customContext from '../context/customs/customsContext';
import { foundIcon } from './ui/icons';
import qualificationInfo from './data/qualification';

const QualificationRounderLine = () => (
  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>
);

const SingleQualification = ({ infoCard, calendarAlt }) => (
  <div className="qualification__data">
    {(infoCard.order % 2) === 0 && (
      <>
        <div></div>
        <QualificationRounderLine />
      </>
    )}
    <div>
      <h3 className="qualification__title">{infoCard.title}</h3>
      <span className="qualification__subtitle">{infoCard.subtitle}</span>
      <div className="qualification__calendar">
        {calendarAlt}
        {infoCard.rangeYears}
      </div>
    </div>
    {(infoCard.order % 2) === 1 && (
        <QualificationRounderLine />
    )}
  </div>
);

const Qualification = () => {
  const [tabActive, setTabActive] = useState('work');
  
  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;
  
  const {title, subtitle, tabs, educations, works, mainIcon1, mainIcon2, mainIcon3} = qualificationInfo[language || 'en'];

  const graduationCap = foundIcon(icons, mainIcon1.name, mainIcon1.class);
  const briefcaseAlt = foundIcon(icons, mainIcon2.name, mainIcon2.class);
  const calendarAlt = foundIcon(icons, mainIcon3.name);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={`qualification__button button--flex ${tabActive === tab.targetData && "qualification__active"}`}
              data-target={`#${tab.targetData}`}
              onClick={() => setTabActive(tab.targetData)}
            >
              {tab.icon === 'mainIcon1' ? graduationCap : briefcaseAlt}
              {tab.title}
            </div>
          ))}
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${tabActive === 'education' && "qualification__active"}`}
            data-content
            id="education"
          >
            {educations.map((education) => (
              <SingleQualification key={education.id} infoCard={education} calendarAlt={calendarAlt}/>
            ))}
          </div>
          <div className={`qualification__content ${tabActive === 'work' && "qualification__active"}`} data-content id="work">
            {works.map((work) => (
              <SingleQualification key={work.id} infoCard={work} calendarAlt={calendarAlt}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
