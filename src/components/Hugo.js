import React from 'react';
import Header from './Header';
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

const Hugo = () => {
  const [loading, setLoading] = React.useState(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
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
        </>
      )}
    </>
  );
};

export default Hugo;
