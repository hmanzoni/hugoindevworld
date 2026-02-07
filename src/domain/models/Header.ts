import { Language } from './Language';

export interface NavItemInfo {
  link: string;
  title: string;
  iconName: string;
  iconClass: string;
}

export interface HeaderLocalizedContent {
  linksNavitems: NavItemInfo[];
}

export interface HeaderUniqueContent {
  name: string;
  darkThemeActive: boolean;
  availablesLang: string[];
  linkName: string;
}

export type HeaderData = Record<Language, HeaderLocalizedContent> & {
  unique: HeaderUniqueContent;
};
