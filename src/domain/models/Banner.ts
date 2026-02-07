import { Language } from './Language';
import { IconContactReference } from './Icon';

export interface BannerLocalizedContent {
  title: string;
  description: string;
  contactMeText: string;
}

export interface BannerUniqueContent {
  iconBanner: IconContactReference;
}

export type BannerData = Record<Language, BannerLocalizedContent> & {
  unique: BannerUniqueContent;
};
