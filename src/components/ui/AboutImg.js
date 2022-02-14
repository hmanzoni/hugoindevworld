import React from 'react';
import '../../assets/css/aboutImg.css';
import about from '../../assets/img/about.jpg';
import rolesListHandler from '../functions/rolesListHandler';

const AboutImg = ({aboutImgTexts, rolesText}) => {
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
        {/* <a href="aboutme"></a> */}
      </figure>
      <div className="roles" onLoad={rolesListHandler()}>
        {rolesText.map((text, index) => <div key={index}>{text}</div>)}
      </div>
    </div>
  );
};

export default AboutImg;
