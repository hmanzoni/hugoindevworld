import React, {useState} from 'react';
import { UilCalendarAlt, UilGraduationCap, UilBriefcaseAlt } from '@iconscout/react-unicons';
import '../assets/css/qualification.css';

const QualificationRounderLine = () => (
  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>
);

const SingleQualification = ({ infoCard }) => (
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
        <UilCalendarAlt />
        {infoCard.rangeYears}
      </div>
    </div>
    {(infoCard.order % 2) === 1 && (
        <QualificationRounderLine />
    )}
  </div>
);

const Qualification = () => {
  const [tabActive, setTabActive] = useState('work')
  const educations = [
    {
      id: 1,
      title: 'Biochemistry',
      subtitle: 'Universidad Nacional de Córdoba',
      rangeYears: '2008 - 2012',
      order: 1,
    },
    {
      id: 2,
      title: 'Basic Web Develop',
      subtitle: 'Udemy',
      rangeYears: '2017 - 2019',
      order: 2,
    },
    {
      id: 3,
      title: 'Advance Web, Sofware Develop',
      subtitle: 'Udemy',
      rangeYears: '2019 - Actual',
      order: 3,
    },
    {
      id: 4,
      title: 'DevOps Skills',
      subtitle: 'Udemy',
      rangeYears: '2021 - Actual',
      order: 4,
    }
  ];
  const works = [
    {
      id: 1,
      title: 'Web Developer',
      subtitle: 'Dana Giraldo',
      rangeYears: '07/2018 - 10/2018',
      order: 1,
    },
    {
      id: 2,
      title: 'Web Developer',
      subtitle: 'Gustos Alto Adige',
      rangeYears: '12/2018 - 07/2020',
      order: 2,
    },
    {
      id: 3,
      title: 'Sofware Developer',
      subtitle: 'Trueblue',
      rangeYears: '09/2020 - 03/2021',
      order: 3,
    }
  ];

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${tabActive === 'education' && "qualification__active"}`}
            data-target="#education"
            onClick={() => setTabActive('education')}
          >
            <UilGraduationCap className="qualification__icon" />
            Education
          </div>
          <div
            className={`qualification__button button--flex ${tabActive === 'work' && "qualification__active"}`}
            data-target="#work"
            onClick={() => setTabActive('work')}
          >
            <UilBriefcaseAlt className="qualification__icon" />
            Work
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${tabActive === 'education' && "qualification__active"}`}
            data-content
            id="education"
          >
            {educations.map((education) => (
              <SingleQualification key={education.id} infoCard={education} />
            ))}
          </div>
          <div className={`qualification__content ${tabActive === 'work' && "qualification__active"}`} data-content id="work">
            {works.map((work) => (
              <SingleQualification key={work.id} infoCard={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
