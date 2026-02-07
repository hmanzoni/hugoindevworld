import React, { useMemo, useState } from 'react';
import '@assets/css/skills.css';
import { useAppContext } from '@presentation/context/useAppContext';
import SkillContent from '@presentation/components/SkillContent';
import foundIcon from '@presentation/utils/foundIcon';
import { calcYears } from '@domain/services';
import { SkillContentItem } from '@presentation/types/viewModels';

const Skills = () => {
  const [openState, setOpenState] = useState<Record<string, boolean>>({});

  const { icons, language, contentRepo } = useAppContext();
  const skillInfo = contentRepo.getSkillsContent();
  const skillsCards = contentRepo.getSkillsCardsContent();

  const { title, subtitle, skillsInfo } = skillInfo[language || 'en'];
  const { mainIconSkills, iconArrowOpen } = skillInfo['unique'];

  const bracketsCurly = foundIcon(icons, mainIconSkills.name, mainIconSkills.class);
  const angleDown = foundIcon(icons, iconArrowOpen.name, iconArrowOpen.class);

  const skillsContents: SkillContentItem[] = useMemo(
    () =>
      skillsInfo.map((skill) => ({
        ...skill,
        icon: foundIcon(icons, skill.icon, skill.iconClass),
        subtitle: calcYears(skill.subtitle, skill.year),
        cardsSkills: skillsCards[skill.code] || skill.cardsSkills,
        isOpen: openState[skill.code] ?? skill.isOpen,
      })),
    [language, skillsInfo, icons, openState, skillsCards]
  );

  const handlerOpenClose = (skillCode: string) => {
    setOpenState((prev) => ({
      ...prev,
      [skillCode]: !prev[skillCode],
    }));
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
