import { HomeData } from '../models/Home';
import { AboutData, AboutImgData } from '../models/About';
import { SkillsData, SkillsCardsData } from '../models/Skills';
import { ServicesData } from '../models/Services';
import { QualificationData } from '../models/Qualification';
import { HeaderData } from '../models/Header';
import { FooterData } from '../models/Footer';
import { SocialLinksData } from '../models/SocialLink';
import { BannerData } from '../models/Banner';

export interface ContentRepository {
  getHomeContent(): HomeData;
  getAboutContent(): AboutData;
  getAboutImgContent(): AboutImgData;
  getSkillsContent(): SkillsData;
  getSkillsCardsContent(): SkillsCardsData;
  getServicesContent(): ServicesData;
  getQualificationContent(): QualificationData;
  getHeaderContent(): HeaderData;
  getFooterContent(): FooterData;
  getSocialLinksContent(): SocialLinksData;
  getBannerContent(): BannerData;
}
