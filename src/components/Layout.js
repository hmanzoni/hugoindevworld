import React, { useContext, useEffect } from 'react';
import { arrIcons } from './ui/icons';
import foundIcon from './functions/foundIcon';
import iconContext from '../context/customs/customsContext';
import About from './sections/About';
import Home from './sections/Home';
import Header from './sections/Header';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Qualification from './sections/Qualification';
import Footer from './sections/Footer';

const Layout = () => {
  const customsContext = useContext(iconContext);
  const { getIcons, icons, setDefaultLang, isSetupLang } = customsContext;

  useEffect(() => {
    if (icons && Object.getPrototypeOf(icons) === Object.prototype && !Object.entries(icons).length) {
      getIcons(arrIcons);
    }
    if (!isSetupLang) {
      setDefaultLang();
    }
  }, [icons, getIcons, setDefaultLang, isSetupLang]);
  const arrowUp = foundIcon(icons, 'UilArrowUp', 'scrollup__icon');

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Footer />
      <a href="#" className="show-scroll scrollup" id="scroll-up">{arrowUp}</a>
    </>
  );
};

export default Layout;
