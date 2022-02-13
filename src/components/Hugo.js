import React, { useContext, useEffect } from 'react';
import { arrIcons, foundIcon } from './ui/icons';
import iconContext from '../context/icons/iconsContext';
import About from './About';
import Home from './Home';
import Header from './Header';
import Skills from './Skills';
import Services from './Services';
import Qualification from './Qualification';
import Footer from './Footer';

const Hugo = () => {
  const iconsContext = useContext(iconContext);
  const { getIcons, icons } = iconsContext;

  useEffect(() => {
    if (!icons.length) {
      getIcons(arrIcons);
    }
  }, [, icons, getIcons ]);

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
