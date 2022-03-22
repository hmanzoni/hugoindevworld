import React, { useContext, useState, useEffect } from 'react';
import '../assets/css/services.css';
import customContext from '../context/customs/customsContext';
import ServicesContent from './ui/ServicesContent';
import foundIcon from './functions/foundIcon';
import servicesInfo from './data/services';

const Services = () => {
  const [servicesContent, setServicesContent] = useState([]);

  const customsContext = useContext(customContext);
  const { icons, language } = customsContext;

  const { title, subtitle, textServicesContent, servicesCardsInfo } = servicesInfo[language || 'en'];
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
