import { Language } from './Language';

export interface FooterLinkInfo {
  title: string;
  link: string;
}

export interface FooterLocalizedContent {
  title: string;
  subtitle: string;
  rightsText: string;
  linksInt: FooterLinkInfo[];
}

export type FooterData = Record<Language, FooterLocalizedContent>;
