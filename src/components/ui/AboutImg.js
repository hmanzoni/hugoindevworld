import React, { useRef } from 'react';
import '../../assets/css/aboutImg.css';
import about from '../../assets/img/about.jpg';
import rolesListHandler from '../../functions/rolesListHandler';

const AboutImg = ({ aboutImgTexts, rolesText }) => {
  const rolesRef = useRef();
  return (
    <div className="wrapper">
      <figure className="wrapper__snip">
        <img src={about} alt="about" className="about__img" />
        <figcaption>
          <div>
            <h2>{aboutImgTexts.title}</h2>
            <h4>{aboutImgTexts.subtitle}</h4>
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

export default AboutImg;
