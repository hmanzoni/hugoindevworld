import React, { useContext, useState, useEffect } from 'react';
import '../assets/css/services.css';
import customContext from '../context/customs/customsContext';
import foundIcon from './functions/foundIcon';
import servicesInfo from './data/services';

const ServicesList = ({ text, checkCircle }) => (
  <li className="services__modal-service">
    {checkCircle}
    <p>{text}</p>
  </li>
);

const ServicesContent = ({ cardInfo, clickerFn, iconsObj, textServicesContent }) => {
  const {checkCircle, arrowRight, timesIcon } = iconsObj;
  return (
    <div className="services__content">
      <div onClick={() => clickerFn(cardInfo.code)}>
        {cardInfo.icon}
        <h3 className="services__title">
          {cardInfo.title}
          <br />
          <span className="services__subtitle">{cardInfo.subtitle}</span>
        </h3>
      </div>
      <span className="button button--flex button--small button--link services__button" onClick={() => clickerFn(cardInfo.code)}>
        {textServicesContent}
        {arrowRight}
      </span>
      <div className={`services__modal ${cardInfo.isOpen && 'active-modal'}`} onClick={(e) => e.target.className === 'services__modal active-modal' && clickerFn(cardInfo.code)}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            {cardInfo.title}
            <br />
            <span className="services__subtitle">{cardInfo.subtitle}</span>
          </h4>
          <div onClick={() => clickerFn(cardInfo.code)} >{timesIcon}</div>
          <ul className="services__modal-services grid">
            {cardInfo.textsList.map((text, index) => (
              <ServicesList key={index} text={text} checkCircle={checkCircle} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [servicesContent, setServicesContent] = useState([]);
  
  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;

  const {title, subtitle, textServicesContent, servicesCardsInfo} = servicesInfo[language || 'en'];
  const { mainIcon1, mainIcon2, mainIcon3 } = servicesInfo['unique'];

  const iconsObj = {
    checkCircle: foundIcon(icons, mainIcon1.name, mainIcon1.class),
    arrowRight: foundIcon(icons, mainIcon2.name, mainIcon2.class),
    timesIcon: foundIcon(icons, mainIcon3.name, mainIcon3.class)
  }

  useEffect(() => {
    const services = [];
  
    servicesCardsInfo.forEach(service => {
      const iconElement = foundIcon(icons, service.iconName, service.iconClass);
      service.icon = iconElement;
      services.push(service);
    });

    setServicesContent(services);
  }, [language, servicesCardsInfo, icons]);

  const handlerOpenClose = (servCode) => {
    const index = servicesContent.findIndex(skill => skill.code === servCode);
    const changeState = !servicesContent[index].isOpen;
    setServicesContent([
         ...servicesContent.slice(0, index),
        { ...servicesContent[index], isOpen: changeState },  
         ...servicesContent.slice(index + 1)
      ]
    );
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      <div className="services__container container grid">
        {servicesContent.map((serviceContent, index) => (
          <ServicesContent key={index} cardInfo={serviceContent} clickerFn={handlerOpenClose} iconsObj={iconsObj} textServicesContent={textServicesContent} />
        ))}
      </div>
    </section>
  );
};

export default Services;
