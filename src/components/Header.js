import React, { useContext, useEffect, useState } from 'react';
import {
  UilApps, UilMoon, UilSun, UilTimes
} from '@iconscout/react-unicons';
import '../assets/css/header.css';
import customContext from '../context/customs/customsContext';
import foundIcon from './functions/foundIcon';

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
  const langAvailables = ['EN', 'ES', 'IT'];
  const [isActive, setActive] = useState(false);
  const [darkThemeActive, setDarkThemeActive] = useState(false);

  const customsContext = useContext(customContext);
  const { icons, changeLanguage, language } = customsContext;

  const getCurrentTheme = (selectTheme) => selectTheme !== 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const selectTheme = localStorage.getItem('selected-theme');
    localStorage.setItem('selected-theme', getCurrentTheme(selectTheme));
    if (darkThemeActive) {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }
  }, [darkThemeActive]);

  const linksNavitems = [
    { link: '#home', title: 'Home', icon: foundIcon(icons, 'UilEstate', 'nav__icon') },
    { link: '#about', title: 'About', icon: foundIcon(icons, 'UilUser', 'nav__icon') },
    { link: '#skills', title: 'Skills', icon: foundIcon(icons, 'UilFileAlt', 'nav__icon') },
    { link: '#services', title: 'Services', icon: foundIcon(icons, 'UilBriefcaseAlt', 'nav__icon') },
    // { link: '#portfolio', title: 'Portfolio', icon: foundIcon(icons, 'UilScenery', 'nav__icon') },
    // { link: '#contactme', title: 'Contactme', icon: foundIcon(icons, 'UilMessage', 'nav__icon') },
  ];

  return (
    <header className="header scroll-header" id="header">
      <nav className="nav container">
        <a href="!#" className="nav__logo">
          Hugo
        </a>
        <div className="nav__lang">
          {langAvailables.map( (lang, index) => <div key={index} className={language === lang.toLocaleLowerCase() ? 'active-link' : ''} onClick={()=>changeLanguage(lang)}>{lang}</div>)}
        </div>
        <div className={`nav__menu ${isActive ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            {linksNavitems.map((linkNavitem, index) => (
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
