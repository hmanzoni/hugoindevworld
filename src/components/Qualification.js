import React, {useState} from 'react';
import { UilCalendarAlt, UilGraduationCap, UilBriefcaseAlt } from '@iconscout/react-unicons'

const SingleQualification = ({ infoCard }) => (
  <div className="qualification__data">
    {!infoCard.isRight && (
      <>
        <div></div>
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
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
    {infoCard.isRight && (
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
    )}
  </div>
);

const Qualification = () => {
  const [tabActive, setTabActive] = useState('work')
  const educations = [
    {
      id: 1,
      title: 'Computer Enginenr',
      subtitle: 'Arg - University',
      rangeYears: '2009 - 2012',
      isRight: true,
    },
    {
      id: 2,
      title: 'Web Design',
      subtitle: 'Arg - University',
      rangeYears: '2011 - 2014',
      isRight: false,
    },
    {
      id: 3,
      title: 'Web Develop',
      subtitle: 'Arg - University',
      rangeYears: '2016 - 2017',
      isRight: true,
    },
    {
      id: 4,
      title: 'Master in UI/UX',
      subtitle: 'Udemy',
      rangeYears: '2018 - 2020',
      isRight: false,
    },
  ];
  const works = [
    {
      id: 1,
      title: 'Software Enginenr',
      subtitle: 'Microsoft',
      rangeYears: '2009 - 2012',
      isRight: true,
    },
    {
      id: 2,
      title: 'Frontend Developer',
      subtitle: 'Apple',
      rangeYears: '2012 - 2014',
      isRight: false,
    },
    {
      id: 3,
      title: 'Ui Designer',
      subtitle: 'Figma - Spain',
      rangeYears: '2014 - 2016',
      isRight: true,
    },
    {
      id: 4,
      title: 'Freelancer',
      subtitle: 'Italy',
      rangeYears: '2016 - ',
      isRight: false,
    },
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
