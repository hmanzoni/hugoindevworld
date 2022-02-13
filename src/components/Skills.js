import React, { useContext, useEffect, useState } from 'react';
import '../assets/css/skills.css';
import customContext from '../context/customs/customsContext';
import foundIcon from './functions/foundIcon';
import calcYears from './functions/calcYears';
import skillInfo from './data/skills';
import skillsCards from './data/skillsCards';

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

const SkillContent = ({ infoCard, clickerFn, bracketsCurly, angleDown }) => (
    <div className={`skills__content ${infoCard.isOpen ? 'skills__open' : 'skills__close'}`} onClick={() => clickerFn(infoCard.code)}>
      <div className="skills__header">
        {bracketsCurly}
        <div>
          <h1 className="skills__title">{infoCard.title}</h1>
          <span className="skills__subtitle">{infoCard.subtitle}</span>
        </div>
        {angleDown}
      </div>

      <div className="skills__list grid">
        {infoCard.cardsSkills.map((cardSkill, index) => (
          <SkillCard key={index} infoCard={cardSkill} />
        ))}
      </div>
    </div>
  );

const Skills = () => {
  const [skillsContents, setSkillsContents] = useState([]);
  
  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;

  const {title, subtitle, skillsInfo} = skillInfo[language || 'en'];
  const {mainIconSkills, iconArrowOpen} = skillInfo['unique'];

  const bracketsCurly = foundIcon(icons, mainIconSkills.name, mainIconSkills.class);
  const angleDown = foundIcon(icons, iconArrowOpen.name, iconArrowOpen.class);

  useEffect(() => {
    const skills = [];
    skillsInfo.forEach(skill => {
      const iconElement = foundIcon(icons, skill.icon, skill.iconClass)
      skill.icon = iconElement;
      skill.subtitle = calcYears(skill.subtitle, skill.year);
      const skillCardsInformation = skillsCards[skill.code];
      skill.cardsSkills = skillCardsInformation;
      
      skills.push(skill);
    });
    setSkillsContents(skills);
  }, [language, skillsInfo, icons]);

  const handlerOpenClose = (skillCode) => {
    const index = skillsContents.findIndex(skill => skill.code === skillCode);
    const changeState = !skillsContents[index].isOpen;
    setSkillsContents([
         ...skillsContents.slice(0, index),
        { ...skillsContents[index], isOpen: changeState },  
         ...skillsContents.slice(index + 1)
      ]
    );
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="skills__container container grid">
        <div>
          {skillsContents.map((skillContent, index) => (
            <SkillContent key={index} infoCard={skillContent} clickerFn={handlerOpenClose} bracketsCurly={bracketsCurly} angleDown={angleDown} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
