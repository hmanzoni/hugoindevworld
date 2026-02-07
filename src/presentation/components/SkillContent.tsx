import React, { ReactElement } from 'react';
import { SkillCardInfo } from '@domain/models/Skills';

interface SkillCardProps {
  infoCard: SkillCardInfo;
}

const SkillCard = ({ infoCard }: SkillCardProps) => (
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

interface SkillContentProps {
  infoCard: {
    title: string;
    code: string;
    isOpen: boolean;
    subtitle: string;
    cardsSkills: SkillCardInfo[];
    icon: ReactElement | undefined;
  };
  clickerFn: (code: string) => void;
  bracketsCurly: ReactElement | undefined;
  angleDown: ReactElement | undefined;
}

const SkillContent = ({ infoCard, clickerFn, bracketsCurly, angleDown }: SkillContentProps) => (
  <div
    className={`skills__content ${infoCard.isOpen ? 'skills__open' : 'skills__close'}`}
    onClick={() => clickerFn(infoCard.code)}
  >
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
