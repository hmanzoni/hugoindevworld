import React, { useState, useEffect } from 'react';
import '@assets/css/services.css';
import { useAppContext } from '@presentation/context/useAppContext';
import ServicesContent from '@presentation/components/ServicesContent';
import foundIcon from '@presentation/utils/foundIcon';
import { ServiceContentItem } from '@domain/models/Services';
import { JsonContentRepository } from '@infrastructure/adapters/JsonContentRepository';

const contentRepo = new JsonContentRepository();
const servicesInfo = contentRepo.getServicesContent();

const Services = () => {
  const [servicesContent, setServicesContent] = useState<ServiceContentItem[]>([]);

  const { icons, language } = useAppContext();

  const { title, subtitle, textServicesContent, servicesCardsInfo } = servicesInfo[language || 'en'];
  const { mainIcon1, mainIcon2, mainIcon3 } = servicesInfo['unique'];

  const iconsObj = {
    checkCircle: foundIcon(icons, mainIcon1.name, mainIcon1.class),
    arrowRight: foundIcon(icons, mainIcon2.name, mainIcon2.class),
    timesIcon: foundIcon(icons, mainIcon3.name, mainIcon3.class),
  };

  useEffect(() => {
    const services: ServiceContentItem[] = servicesCardsInfo.map((service) => ({
      ...service,
      icon: foundIcon(icons, service.iconName, service.iconClass),
    }));
    setServicesContent(services);
  }, [language, servicesCardsInfo, icons]);

  const handlerOpenClose = (servCode: string) => {
    const index = servicesContent.findIndex((service) => service.code === servCode);
    if (index === -1) return;
    const changeState = !servicesContent[index].isOpen;
    setServicesContent([
      ...servicesContent.slice(0, index),
      { ...servicesContent[index], isOpen: changeState },
      ...servicesContent.slice(index + 1),
    ]);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      <div className="services__container container grid">
        {servicesContent.map((serviceContent, index) => (
          <ServicesContent
            key={index}
            cardInfo={serviceContent}
            clickerFn={handlerOpenClose}
            iconsObj={iconsObj}
            textServicesContent={textServicesContent}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
