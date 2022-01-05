import React, {useContext, useEffect} from 'react';
import Header from './Header';
import {arrIcons} from './ui/icons';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Services from './Services';
// import Portfolio from './Portfolio';
// import Banner from './Banner';
// import Testimonial from './Testimonial';
// import ContactMe from './ContactMe';
import Footer from './Footer';
import Loader from './Loader';
import iconContext from '../context/icons/iconsContext';

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
  }, [loading, icons]);
  const arrowUp = icons.find(i => i?.type?.name === 'UilArrowUp' && i.props.className === 'scrollup__icon');
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
