import { Language } from './Language';

export interface HomeLocalizedContent {
  title: string;
  subtitle: string;
  description: string;
  contactMeText: string;
}

export interface HomeScrollIconInfo {
  name: string;
  icon: string;
  classIcon: string;
}

export interface HomeUniqueContent {
  iconHomeScrollInfo: HomeScrollIconInfo[];
  scrollText: string;
  showContactButton: boolean;
  contactLink: string;
  contactTextEmail: string;
  iconContactMe: {
    iconName: string;
    iconClass: string;
  };
}

export type HomeData = Record<Language, HomeLocalizedContent> & {
  unique: HomeUniqueContent;
};
