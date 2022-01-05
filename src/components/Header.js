import React, {useState, useEffect, useContext} from 'react';
import iconContext from '../context/icons/iconsContext';
import {
  UilTimes,
  UilMoon,
  UilApps,
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

  const iconsContext = useContext(iconContext);
  const { icons } = iconsContext;

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
    { link: '#home', title: 'Home', icon: icons.find(i => i?.type?.name === 'UilEstate' && i.props.className === 'nav__icon') },
    { link: '#about', title: 'About', icon: icons.find(i => i?.type?.name === 'UilUser' && i.props.className === 'nav__icon') },
    { link: '#skills', title: 'Skills', icon: icons.find(i => i?.type?.name === 'UilFileAlt' && i.props.className === 'nav__icon') },
    { link: '#services', title: 'Services', icon: icons.find(i => i?.type?.name === 'UilBriefcaseAlt' && i.props.className === 'nav__icon') },
    // { link: '#portfolio', title: 'Portfolio', icon: icons.find(i => i?.type?.name === 'UilScenery' && i.props.className === 'nav__icon') },
    // { link: '#contactme', title: 'Contactme', icon: icons.find(i => i?.type?.name === 'UilMessage' && i.props.className === 'nav__icon') },
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
            <UilApps onClick={() => setActive(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
