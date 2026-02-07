import { Language } from './Language';
import { IconReference } from './Icon';

export interface QualificationTab {
  icon: string;
  title: string;
  targetData: string;
}

export interface QualificationItem {
  id: number;
  title: string;
  subtitle: string;
  rangeYears: string;
  order: number;
}

export interface QualificationLocalizedContent {
  title: string;
  subtitle: string;
  tabs: QualificationTab[];
  educations: QualificationItem[];
  works: QualificationItem[];
}

export interface QualificationUniqueContent {
  mainIcon1: IconReference;
  mainIcon2: IconReference;
  mainIcon3: IconReference;
}

export type QualificationData = Record<Language, QualificationLocalizedContent> & {
  unique: QualificationUniqueContent;
};
