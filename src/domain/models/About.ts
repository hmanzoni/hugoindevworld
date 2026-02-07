import { Language } from './Language';

export interface AboutCardInfo {
  id: string;
  year?: number;
  title: string;
  name: string;
  desc: string;
}

export interface AboutLocalizedContent {
  title: string;
  subtitle: string;
  downloadAltIcon: string;
  downloadText: string;
  showDownloadCV: boolean;
  fileNameCV: string;
  description: string[];
  aboutCardsInfo: AboutCardInfo[];
}

export type AboutData = Record<Language, AboutLocalizedContent>;

export interface AboutImgLocalizedContent {
  rolesText: string[];
}

export interface AboutImgUniqueContent {
  title: string;
  subtitle: string;
}

export type AboutImgData = Record<Language, AboutImgLocalizedContent> & {
  unique: AboutImgUniqueContent;
};
