import React, { useContext, useEffect } from 'react';
import iconContext from '../context/icons/iconsContext';
import About from './About';
// import Portfolio from './Portfolio';
// import Banner from './Banner';
// import Testimonial from './Testimonial';
// import ContactMe from './ContactMe';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Loader from './Loader';
import Qualification from './Qualification';
import Services from './Services';
import Skills from './Skills';
import { arrIcons, foundIcon } from './ui/icons';

const Hugo = () => {
  const iconsContext = useContext(iconContext);
  const { loadingFinish, loading, getIcons, icons } = iconsContext;

  useEffect(() => {
    if (!icons?.length) {
      getIcons(arrIcons);
    }
    if (loading) {
      loadingFinish();
    }
  }, [loading, icons, getIcons, loadingFinish]);

  const arrowUp = foundIcon(icons, 'UilArrowUp', 'scrollup__icon');

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Hugo;
