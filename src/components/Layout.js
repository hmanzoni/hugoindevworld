import React, { useContext, useEffect } from 'react';
import { arrIcons } from './ui/icons';
import foundIcon from '../functions/foundIcon';
import iconContext from '../context/customs/customsContext';
import Header from './sections/Header';
import Footer from './sections/Footer';

const Layout = ({children}) => {
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
      {children}
      <Footer />
      <a href="!#" className="show-scroll scrollup" id="scroll-up" aria-label="Scroll up">{arrowUp}</a>
    </>
  );
};

export default Layout;
