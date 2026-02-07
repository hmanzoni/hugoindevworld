import { ContentRepository } from '@domain/ports/ContentRepository';
import { HomeData } from '@domain/models/Home';
import { AboutData, AboutImgData } from '@domain/models/About';
import { SkillsData, SkillsCardsData } from '@domain/models/Skills';
import { ServicesData } from '@domain/models/Services';
import { QualificationData } from '@domain/models/Qualification';
import { HeaderData } from '@domain/models/Header';
import { FooterData } from '@domain/models/Footer';
import { SocialLinksData } from '@domain/models/SocialLink';
import { BannerData } from '@domain/models/Banner';

import homeData from '../data/home.json';
import aboutData from '../data/about.json';
import aboutImgData from '../data/aboutImg.json';
import skillsData from '../data/skills.json';
import skillsCardsData from '../data/skillsCards.json';
import servicesData from '../data/services.json';
import qualificationData from '../data/qualification.json';
import headerData from '../data/header.json';
import footerData from '../data/footer.json';
import socialLinksData from '../data/socialLinks.json';
import bannerData from '../data/banner.json';

export class JsonContentRepository implements ContentRepository {
  getHomeContent(): HomeData {
    return homeData as unknown as HomeData;
  }
  getAboutContent(): AboutData {
    return aboutData as unknown as AboutData;
  }
  getAboutImgContent(): AboutImgData {
    return aboutImgData as unknown as AboutImgData;
  }
  getSkillsContent(): SkillsData {
    return skillsData as unknown as SkillsData;
  }
  getSkillsCardsContent(): SkillsCardsData {
    return skillsCardsData as unknown as SkillsCardsData;
  }
  getServicesContent(): ServicesData {
    return servicesData as unknown as ServicesData;
  }
  getQualificationContent(): QualificationData {
    return qualificationData as unknown as QualificationData;
  }
  getHeaderContent(): HeaderData {
    return headerData as unknown as HeaderData;
  }
  getFooterContent(): FooterData {
    return footerData as unknown as FooterData;
  }
  getSocialLinksContent(): SocialLinksData {
    return socialLinksData as unknown as SocialLinksData;
  }
  getBannerContent(): BannerData {
    return bannerData as unknown as BannerData;
  }
}
