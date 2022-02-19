import React, { useContext, useEffect, useState } from 'react';
import {
  UilApps, UilMoon, UilSun, UilTimes
} from '@iconscout/react-unicons';
import '../assets/css/header.css';
import customContext from '../context/customs/customsContext';
import foundIcon from './functions/foundIcon';
import headerInfo from './data/header';

const NavItems = ({ infoCard, hideMenu }) => (
  <li className="nav__item">
    <a href={infoCard.link} onClick={hideMenu} className="nav__link active-link">
      {infoCard.icon}
      {infoCard.title}
    </a>
  </li>
);

const Header = () => {
  const darkTheme = 'dark-theme';
  const itemNameStorage = 'selected-theme';
  const { name, linkName, defaultTheme, availablesLang } = headerInfo['unique'];
  const [isActive, setActive] = useState(false);
  const [darkThemeActive, setDarkThemeActive] = useState(defaultTheme);

  const customsContext = useContext(customContext);
  const { icons, changeLanguage, language } = customsContext;
  const {linksNavitems} = headerInfo[language || 'en'];

  const getCurrentTheme = (selectTheme) => selectTheme !== 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const selectTheme = localStorage.getItem(itemNameStorage);
    localStorage.setItem(itemNameStorage, getCurrentTheme(selectTheme));
    if (darkThemeActive) {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }
  }, [darkThemeActive]);

  const linksArr = [];
  linksNavitems.forEach(linkInfo => linksArr.push({ link: linkInfo.link, title: linkInfo.title, icon: foundIcon(icons, linkInfo.iconName, linkInfo.iconClass) }));

  return (
    <header className="header scroll-header" id="header">
      <nav className="nav container">
        <a href={linkName} className="nav__logo">
          {name}
        </a>
        <div className="nav__lang">
          {availablesLang.map( (lang, index) => <div key={index} className={language === lang.toLocaleLowerCase() ? 'active-link' : ''} onClick={()=>changeLanguage(lang)}>{lang}</div>)}
        </div>
        <div className={`nav__menu ${isActive ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            {linksArr.map((linkNavitem, index) => (
              <NavItems key={index} infoCard={linkNavitem} hideMenu={() => setActive(false)} />
            ))}
          </ul>
          <UilTimes onClick={() => setActive(false)} className="nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
            {
              darkThemeActive ?
              <UilSun className="change-theme" id="theme-button" onClick={() => setDarkThemeActive(false)} />
              :
              <UilMoon className="change-theme" id="theme-button" onClick={() => setDarkThemeActive(true)} />
            }
          <div className="nav__toggle" id="nav-toggle">
            <UilApps onClick={() => setActive(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
