import React, {useState} from 'react';
import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons'

const SkillCard = ({ infoCard }) => (
  <div className="skills__data">
    <div className="skills__title">
      <h3 className="skills__name">{infoCard.name}</h3>
      <span className="skills__number">{infoCard.percent}</span>
    </div>
    <div className="skills__bar">
      <span className="skills__percentage skills__css"></span>
    </div>
  </div>
);

const SkillContent = ({ infoCard, clickerFn }) => {
  const sizeIcons = "32";
  return (
    <div className={`skills__content ${infoCard.isOpen ? 'skills__open' : 'skills__close'}`}>
      <div className="skills__header">
        <UilBracketsCurly size={sizeIcons} className="skills__icon" />
        <div>
          <h1 className="skills__title">{infoCard.title}</h1>
          <span className="section__subtitle">{infoCard.subtitle}</span>
        </div>
        <UilAngleDown onClick={ () => clickerFn(infoCard.code)} size={sizeIcons} className="skills__arrow" />
      </div>

      <div className="skills__list grid">
        {infoCard.cardsSkills.map((cardSkill, index) => (
          <SkillCard key={index} infoCard={cardSkill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [skillsContents, setSkillsContents] = useState([])
  const infoFECards = [
    { name: 'HTML', percent: '90%' },
    { name: 'CSS', percent: '85%' },
    { name: 'JavaScript', percent: '80%' },
    { name: 'React', percent: '75%' },
  ];
  const infoUXCards = [
    { name: 'Figma', percent: '90%' },
    { name: 'Sketch', percent: '85%' },
    { name: 'Photoshop', percent: '80%' },
  ];
  const infoBECards = [
    { name: 'PHP', percent: '90%' },
    { name: 'Node JS', percent: '85%' },
    { name: 'Firebase', percent: '80%' },
    { name: 'Python', percent: '75%' },
  ];

  const skills = [
    {
      title: 'Frontend developer',
      code: 'FE',
      isOpen: false,
      subtitle: 'More than 4 years',
      cardsSkills: infoFECards,
    },
    {
      title: 'Backend developer',
      code: 'BE',
      isOpen: false,
      subtitle: 'More than 2 years',
      cardsSkills: infoBECards,
    },
    {
      title: 'Designer developer',
      code: 'DD',
      isOpen: false,
      subtitle: 'More than 1 years',
      cardsSkills: infoUXCards,
    },
  ];

  if (!skillsContents.length) {
    setSkillsContents(skills);
  }

  const handlerOpenClose = (skillCode) => {
    const index = skillsContents.findIndex(skill => skill.code === skillCode);
    const changeState = !skillsContents.find(skill => skill.code === skillCode).isOpen;
    setSkillsContents([
         ...skills.slice(0, index),
        { ...skills[index], isOpen: changeState },  
         ...skills.slice(index + 1)
      ]
    );
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {skillsContents.map((skillContent, index) => (
            <SkillContent key={index} infoCard={skillContent} clickerFn={handlerOpenClose} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
