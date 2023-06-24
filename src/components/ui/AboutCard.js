import React, { useRef, Suspense, lazy } from 'react';
import '../../assets/css/aboutImg.css';
import rolesListHandler from '../../functions/rolesListHandler';


const AboutImg = lazy(() => import('./AboutImg'));

const AboutCard = ({ aboutImgTexts, rolesText }) => {
  const rolesRef = useRef();
  return (
    <div className="wrapper">
      <figure className="wrapper__snip">
        <Suspense fallback={"Loading..."}>
          <AboutImg />
        </Suspense>
        <figcaption>
          <div>
            <h2>{aboutImgTexts.title}</h2>
            <h3>{aboutImgTexts.subtitle}</h3>
          </div>
        </figcaption>
        {/* <a href="aboutme" aria-label="About me link"></a> */}
      </figure>
      <div className="roles" ref={rolesRef} onLoad={rolesListHandler(rolesRef)}>
        {rolesText.map((text, index) => <div key={index}>{text}</div>)}
      </div>
    </div>
  );
};

export default AboutCard;
