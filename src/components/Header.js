import React, {useState, useEffect} from 'react';
import {
  UilTimes,
  UilMoon,
  UilApps,
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  // UilScenery,
  // UilMessage,
  UilSun 
} from '@iconscout/react-unicons';
import '../assets/css/header.css';

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
  const [isActive, setActive] = useState(false);
  const [darkThemeActive, setDarkThemeActive] = useState(false);

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
    { link: '#home', title: 'Home', icon: <UilEstate className="nav__icon"/> },
    { link: '#about', title: 'About', icon: <UilUser className="nav__icon"/> },
    { link: '#skills', title: 'Skills', icon: <UilFileAlt className="nav__icon"/> },
    { link: '#services', title: 'Services', icon: <UilBriefcaseAlt className="nav__icon"/> },
    // { link: '#portfolio', title: 'Portfolio', icon: <UilScenery className="nav__icon"/> },
    // { link: '#contactme', title: 'Contactme', icon: <UilMessage className="nav__icon"/> },
  ];

  return (
    <header className="header scroll-header" id="header">
      <nav className="nav container">
        <a href="!#" className="nav__logo">
          Hugo
        </a>
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
            <UilApps onClick={ () => setActive(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
