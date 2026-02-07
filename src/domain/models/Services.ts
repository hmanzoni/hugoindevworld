import { Language } from './Language';
import { IconReference } from './Icon';

export interface ServiceCardInfo {
  title: string;
  iconName: string;
  iconClass: string;
  subtitle: string;
  code: string;
  isOpen: boolean;
  textsList: string[];
}

export interface ServicesLocalizedContent {
  title: string;
  subtitle: string;
  textServicesContent: string;
  servicesCardsInfo: ServiceCardInfo[];
}

export interface ServicesUniqueContent {
  mainIcon1: IconReference;
  mainIcon2: IconReference;
  mainIcon3: IconReference;
}

export type ServicesData = Record<Language, ServicesLocalizedContent> & {
  unique: ServicesUniqueContent;
};
