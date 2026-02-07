import { Language } from './Language';
import { IconReference } from './Icon';

export interface SkillCardInfo {
  name: string;
  percent: string;
}

export interface SkillInfo {
  title: string;
  code: string;
  icon: string;
  iconClass: string;
  isOpen: boolean;
  year: number;
  subtitle: string;
  cardsSkills: SkillCardInfo[];
}

export interface SkillsLocalizedContent {
  title: string;
  subtitle: string;
  skillsInfo: SkillInfo[];
}

export interface SkillsUniqueContent {
  mainIconSkills: IconReference;
  iconArrowOpen: IconReference;
}

export type SkillsData = Record<Language, SkillsLocalizedContent> & {
  unique: SkillsUniqueContent;
};

export type SkillsCardsData = Record<string, SkillCardInfo[]>;
