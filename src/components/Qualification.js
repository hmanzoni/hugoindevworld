import React, { useContext, useState } from 'react';
import '../assets/css/qualification.css';
import customContext from '../context/customs/customsContext';
import SingleQualification from './ui/SingleQualification';
import foundIcon from './functions/foundIcon';
import qualificationInfo from './data/qualification';

const Qualification = () => {
  const [tabActive, setTabActive] = useState('work');

  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;

  const { title, subtitle, tabs, educations, works } = qualificationInfo[language || 'en'];
  const { mainIcon1, mainIcon2, mainIcon3 } = qualificationInfo['unique'];

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
              <SingleQualification key={education.id} infoCard={education} calendarAlt={calendarAlt} />
            ))}
          </div>
          <div className={`qualification__content ${tabActive === 'work' && "qualification__active"}`} data-content id="work">
            {works.map((work) => (
              <SingleQualification key={work.id} infoCard={work} calendarAlt={calendarAlt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
