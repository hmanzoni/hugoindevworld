import React, { useEffect, ReactNode } from 'react';
import { arrIcons } from './icons';
import foundIcon from '@presentation/utils/foundIcon';
import { useAppContext } from '@presentation/context/useAppContext';
import Header from '@presentation/sections/Header';
import Footer from '@presentation/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { getIcons, icons, setDefaultLang, isSetupLang } = useAppContext();

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
      <a href="!#" className="show-scroll scrollup" id="scroll-up" aria-label="Scroll up">
        {arrowUp}
      </a>
    </>
  );
};

export default Layout;
