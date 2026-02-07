import React, { useRef, useEffect, Suspense, lazy } from 'react';
import '@assets/css/aboutImg.css';
import rolesListHandler from '@presentation/utils/rolesListHandler';
import { AboutImgUniqueContent } from '@domain/models/About';

const AboutImg = lazy(() => import('./AboutImg'));

interface AboutCardProps {
  aboutImgTexts: AboutImgUniqueContent;
  rolesText: string[];
}

const AboutCard = ({ aboutImgTexts, rolesText }: AboutCardProps) => {
  const rolesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rolesListHandler(rolesRef);
  }, []);

  return (
    <div className="wrapper">
      <figure className="wrapper__snip">
        <Suspense fallback={'Loading...'}>
          <AboutImg />
        </Suspense>
        <figcaption>
          <div>
            <h2>{aboutImgTexts.title}</h2>
            <h3>{aboutImgTexts.subtitle}</h3>
          </div>
        </figcaption>
      </figure>
      <div className="roles" ref={rolesRef}>
        {rolesText.map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
