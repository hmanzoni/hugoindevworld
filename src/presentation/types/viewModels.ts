import { ReactElement } from 'react';
import { SkillCardInfo } from '@domain/models/Skills';

export interface SkillContentItem {
  title: string;
  code: string;
  icon: ReactElement | undefined;
  iconClass: string;
  isOpen: boolean;
  year: number;
  subtitle: string;
  cardsSkills: SkillCardInfo[];
}

export interface ServiceContentItem {
  title: string;
  iconName: string;
  iconClass: string;
  subtitle: string;
  code: string;
  isOpen: boolean;
  textsList: string[];
  icon: ReactElement | undefined;
}
