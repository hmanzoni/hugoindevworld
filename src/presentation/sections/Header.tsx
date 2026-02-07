import React, { useEffect, useState } from 'react';
import { UilApps, UilMoon, UilSun, UilTimes } from '@iconscout/react-unicons';
import '@assets/css/header.css';
import { useAppContext } from '@presentation/context/useAppContext';
import foundIcon from '@presentation/utils/foundIcon';
import { HeaderData, NavItemInfo } from '@domain/models/Header';
import { JsonContentRepository } from '@infrastructure/adapters/JsonContentRepository';
import { ReactElement } from 'react';

const contentRepo = new JsonContentRepository();
const headerInfo: HeaderData = contentRepo.getHeaderContent();

interface NavItemRendered {
  link: string;
  title: string;
  icon: ReactElement | undefined;
}

interface NavItemsProps {
  infoCard: NavItemRendered;
  hideMenu: () => void;
}

const NavItems = ({ infoCard, hideMenu }: NavItemsProps) => (
  <li className="nav__item">
    <a href={infoCard.link} onClick={hideMenu} className="nav__link active-link" aria-label="Nav link">
      {infoCard.icon}
      {infoCard.title}
    </a>
  </li>
);

const Header = () => {
  const darkTheme = 'dark-theme';
  const { name, linkName, darkThemeActive, availablesLang } = headerInfo['unique'];
  const [isActive, setActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(darkThemeActive);

  const { icons, changeLanguage, language } = useAppContext();
  const { linksNavitems } = headerInfo[language || 'en'];

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }
  }, [isDarkTheme]);

  const linksArr: NavItemRendered[] = linksNavitems.map((linkInfo: NavItemInfo) => ({
    link: linkInfo.link,
    title: linkInfo.title,
    icon: foundIcon(icons, linkInfo.iconName, linkInfo.iconClass),
  }));

  return (
    <header className="header scroll-header" id="header">
      <nav className="nav container">
        <a href={linkName} className="nav__logo" aria-label="Logo link">
          {name}
        </a>
        <div className="nav__lang">
          {availablesLang.map((lang, index) => (
            <div
              key={index}
              className={language === lang.toLowerCase() ? 'active-link' : ''}
              onClick={() => changeLanguage(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
        <div className={`nav__menu ${isActive ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            {linksArr.map((linkNavitem, index) => (
              <NavItems key={index} infoCard={linkNavitem} hideMenu={() => setActive(false)} />
            ))}
          </ul>
          <UilTimes onClick={() => setActive(false)} className="nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
          {isDarkTheme ? (
            <UilSun className="change-theme" id="theme-button" onClick={() => setIsDarkTheme(false)} />
          ) : (
            <UilMoon className="change-theme" id="theme-button" onClick={() => setIsDarkTheme(true)} />
          )}
          <div className="nav__toggle" id="nav-toggle">
            <UilApps onClick={() => setActive(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
