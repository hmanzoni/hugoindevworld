import React, {useState} from 'react';
import { UilTimes, UilMoon, UilApps, UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilScenery, UilMessage } from '@iconscout/react-unicons'

const NavItems = ({ infoCard }) => (
  <li className="nav__item">
    <a href={infoCard.link} className="nav__link active-link">
      {infoCard.icon}
      {infoCard.title}
    </a>
  </li>
);

const Header = () => {
  const [isActive, setActive] = useState(false);

  const linksNavitems = [
    { link: '#home', title: 'Home', icon: <UilEstate className="nav__icon"/> },
    { link: '#about', title: 'About', icon: <UilUser className="nav__icon"/> },
    { link: '#skills', title: 'Skills', icon: <UilFileAlt className="nav__icon"/> },
    { link: '#services', title: 'Services', icon: <UilBriefcaseAlt className="nav__icon"/> },
    { link: '#portfolio', title: 'Portfolio', icon: <UilScenery className="nav__icon"/> },
    // { link: '#contactme', title: 'Contactme', icon: <UilMessage className="nav__icon"/> },
  ];

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="!#" className="nav__logo">
          Hugo
        </a>
        <div className={`nav__menu ${isActive ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            {linksNavitems.map((linkNavitem, index) => (
              <NavItems key={index} infoCard={linkNavitem} />
            ))}
          </ul>
          <UilTimes onClick={() => setActive(false)} className="nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
          <UilMoon className="change-theme" id="theme-button" />
          <div className="nav__toggle" id="nav-toggle">
            <UilApps onClick={() => setActive(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
