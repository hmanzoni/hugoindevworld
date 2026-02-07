import React, { useEffect, useState, ReactElement } from 'react';
import '@assets/css/header.css';
import { useAppContext } from '@presentation/context/useAppContext';
import foundIcon from '@presentation/utils/foundIcon';
import { HeaderData, NavItemInfo } from '@domain/models/Header';

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
  const { icons, changeLanguage, language, contentRepo } = useAppContext();
  const headerInfo: HeaderData = contentRepo.getHeaderContent();
  const { name, linkName, darkThemeActive, availablesLang } = headerInfo['unique'];
  const [isActive, setActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(darkThemeActive);

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

  const closeIcon = foundIcon(icons, 'UilTimes', 'nav__close');
  const moonIcon = foundIcon(icons, 'UilMoon', 'change-theme');
  const sunIcon = foundIcon(icons, 'UilSun', 'change-theme');
  const appsIcon = foundIcon(icons, 'UilApps', 'nav__toggle');

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
          <div onClick={() => setActive(false)} id="nav-close">
            {closeIcon}
          </div>
        </div>

        <div className="nav__btns">
          {isDarkTheme ? (
            <div id="theme-button" onClick={() => setIsDarkTheme(false)}>
              {sunIcon}
            </div>
          ) : (
            <div id="theme-button" onClick={() => setIsDarkTheme(true)}>
              {moonIcon}
            </div>
          )}
          <div className="nav__toggle" id="nav-toggle">
            <div onClick={() => setActive(true)}>
              {appsIcon}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
