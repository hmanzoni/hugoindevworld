import React, { useContext, useState } from 'react';
import { UilArrowRight, UilTimes } from '@iconscout/react-unicons';
import '../assets/css/services.css';
import customContext from '../context/customs/customsContext';
import { foundIcon } from './ui/icons';
import servicesInfo from './data/services';

const ServicesList = ({ text, checkCircle }) => (
  <li className="services__modal-service">
    {checkCircle}
    <p>{text}</p>
  </li>
);

const ServicesContent = ({ cardInfo, clickerFn, checkCircle, textServicesContent }) => {
  return (
    <div className="services__content">
      <div>
        {cardInfo.icon}
        <h3 className="services__title">
          {cardInfo.title}
          <br />
          {cardInfo.subtitle}
        </h3>
      </div>
      <span className="button button--flex button--small button--link services__button" onClick={() => clickerFn(cardInfo.code)}>
        {textServicesContent}
        <UilArrowRight className="button__icon" />
      </span>
      <div className={`services__modal ${cardInfo.isOpen && 'active-modal'}`} onClick={(e) => e.target.className === 'services__modal active-modal' && clickerFn(cardInfo.code)}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            {cardInfo.title}
            <br />
            {cardInfo.subtitle}
          </h4>
          <UilTimes className="services__modal-close" onClick={() => clickerFn(cardInfo.code)} />
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

  const {title, subtitle, textServicesContent, mainIcon1, servicesCardsInfo} = servicesInfo[language || 'en'];

  const checkCircle = foundIcon(icons, mainIcon1.name, mainIcon1.class);
  const services = [];

  servicesCardsInfo.forEach(service => {
    const iconElement = foundIcon(icons, service.icon, service.iconClass);
    service.icon = iconElement
    services.push(service);
  });

  if (!servicesContent.length) {
    setServicesContent(services);
  }

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
          <ServicesContent key={index} cardInfo={serviceContent} clickerFn={handlerOpenClose} checkCircle={checkCircle} textServicesContent={textServicesContent} />
        ))}
      </div>
    </section>
  );
};

export default Services;
