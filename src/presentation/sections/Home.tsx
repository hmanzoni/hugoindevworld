import React, { Suspense, lazy, ReactElement } from 'react';
import '@assets/css/home.css';
import { useAppContext } from '@presentation/context/useAppContext';
import { SocialLinks, ContactMeElement } from '@presentation/components/SocialLinks';
import HomeScroll from '@presentation/components/HomeScroll';
import foundIcon from '@presentation/utils/foundIcon';

const HomeImg = lazy(() => import('@presentation/components/HomeImg'));

const Home = () => {
  const { icons, language, contentRepo } = useAppContext();
  const homeInfo = contentRepo.getHomeContent();
  const socialLinksData = contentRepo.getSocialLinksContent();
  const { title, subtitle, description, contactMeText } = homeInfo[language || 'en'];
  const { iconHomeScrollInfo, iconContactMe, showContactButton, contactLink, contactTextEmail } =
    homeInfo['unique'];

  const iconContact = foundIcon(icons, iconContactMe.iconName, iconContactMe.iconClass);
  const objInfoContact = { contactMeText, contactLink, contactTextEmail, iconContact };

  const socialLinks = socialLinksData.home.map((iconInfo) => ({
    link: iconInfo.link,
    icon: foundIcon(icons, iconInfo.icon),
  }));

  const iconHomeScroll: Record<string, ReactElement | undefined> = {};
  iconHomeScrollInfo.forEach(
    (iconInfo) => (iconHomeScroll[iconInfo.name] = foundIcon(icons, iconInfo.icon, iconInfo.classIcon))
  );

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {socialLinks.map((socialLink, index) => (
              <SocialLinks key={index} infoCard={socialLink} classAnchor="home__social-icon" />
            ))}
          </div>

          <div className="home__img">
            <Suspense fallback={'Loading...'}>
              <HomeImg />
            </Suspense>
          </div>

          <div className="home__data">
            <h1 className="home__title">{title}</h1>
            <h3 className="home__subtitle">{subtitle}</h3>
            <p className="home__description">{description}</p>
            {showContactButton && <ContactMeElement infoContact={objInfoContact} />}
          </div>
        </div>
        <HomeScroll iconHomeScroll={iconHomeScroll} scrollText={homeInfo['unique'].scrollText} />
      </div>
    </section>
  );
};

export default Home;
