import React, { useEffect, useState } from 'react';
import '@assets/css/skills.css';
import { useAppContext } from '@presentation/context/useAppContext';
import SkillContent from '@presentation/components/SkillContent';
import foundIcon from '@presentation/utils/foundIcon';
import { calcYears } from '@domain/services';
import { SkillContentItem } from '@domain/models/Skills';
import { JsonContentRepository } from '@infrastructure/adapters/JsonContentRepository';

const contentRepo = new JsonContentRepository();
const skillInfo = contentRepo.getSkillsContent();
const skillsCards = contentRepo.getSkillsCardsContent();

const Skills = () => {
  const [skillsContents, setSkillsContents] = useState<SkillContentItem[]>([]);

  const { icons, language } = useAppContext();

  const { title, subtitle, skillsInfo } = skillInfo[language || 'en'];
  const { mainIconSkills, iconArrowOpen } = skillInfo['unique'];

  const bracketsCurly = foundIcon(icons, mainIconSkills.name, mainIconSkills.class);
  const angleDown = foundIcon(icons, iconArrowOpen.name, iconArrowOpen.class);

  useEffect(() => {
    const skills: SkillContentItem[] = skillsInfo.map((skill) => ({
      ...skill,
      icon: foundIcon(icons, skill.icon, skill.iconClass),
      subtitle: calcYears(skill.subtitle, skill.year),
      cardsSkills: skillsCards[skill.code] || skill.cardsSkills,
    }));
    setSkillsContents(skills);
  }, [language, skillsInfo, icons]);

  const handlerOpenClose = (skillCode: string) => {
    const index = skillsContents.findIndex((skill) => skill.code === skillCode);
    if (index === -1) return;
    const changeState = !skillsContents[index].isOpen;
    setSkillsContents([
      ...skillsContents.slice(0, index),
      { ...skillsContents[index], isOpen: changeState },
      ...skillsContents.slice(index + 1),
    ]);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="skills__container container grid">
        <div>
          {skillsContents.map((skillContent, index) => (
            <SkillContent
              key={index}
              infoCard={skillContent}
              clickerFn={handlerOpenClose}
              bracketsCurly={bracketsCurly}
              angleDown={angleDown}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
