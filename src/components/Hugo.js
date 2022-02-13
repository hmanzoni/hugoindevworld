import React, { useContext, useEffect } from 'react';
import { arrIcons } from './ui/icons';
import foundIcon from './functions/foundIcon';
import iconContext from '../context/customs/customsContext';
import About from './About';
import Home from './Home';
import Header from './Header';
import Skills from './Skills';
import Services from './Services';
import Qualification from './Qualification';
import Footer from './Footer';

const Hugo = () => {
  const customsContext = useContext(iconContext);
  const { getIcons, icons, setDefaultLang, isSetupLang } = customsContext;

  useEffect(() => {
    if (!icons.length) {
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
      <a href="!#" className="show-scroll scrollup" id="scroll-up">{arrowUp}</a>
    </>
  );
};

export default Hugo;
