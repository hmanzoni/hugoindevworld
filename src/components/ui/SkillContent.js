import React from 'react';

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

export default SkillContent;