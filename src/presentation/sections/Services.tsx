import React, { useMemo, useState } from 'react';
import '@assets/css/services.css';
import { useAppContext } from '@presentation/context/useAppContext';
import ServicesContent from '@presentation/components/ServicesContent';
import foundIcon from '@presentation/utils/foundIcon';
import { ServiceContentItem } from '@presentation/types/viewModels';

const Services = () => {
  const [openState, setOpenState] = useState<Record<string, boolean>>({});

  const { icons, language, contentRepo } = useAppContext();
  const servicesInfo = contentRepo.getServicesContent();

  const { title, subtitle, textServicesContent, servicesCardsInfo } = servicesInfo[language || 'en'];
  const { mainIcon1, mainIcon2, mainIcon3 } = servicesInfo['unique'];

  const iconsObj = {
    checkCircle: foundIcon(icons, mainIcon1.name, mainIcon1.class),
    arrowRight: foundIcon(icons, mainIcon2.name, mainIcon2.class),
    timesIcon: foundIcon(icons, mainIcon3.name, mainIcon3.class),
  };

  const servicesContent: ServiceContentItem[] = useMemo(
    () =>
      servicesCardsInfo.map((service) => ({
        ...service,
        icon: foundIcon(icons, service.iconName, service.iconClass),
        isOpen: openState[service.code] ?? service.isOpen,
      })),
    [language, servicesCardsInfo, icons, openState]
  );

  const handlerOpenClose = (servCode: string) => {
    setOpenState((prev) => ({
      ...prev,
      [servCode]: !prev[servCode],
    }));
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
