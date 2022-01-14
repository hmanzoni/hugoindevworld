import React, { useContext, useState } from 'react';
import { UilArrowRight, UilTimes } from '@iconscout/react-unicons';
import '../assets/css/services.css';
import iconContext from '../context/icons/iconsContext';
import { foundIcon } from './ui/icons';

const ServicesList = ({ text, checkCircle }) => (
  <li className="services__modal-service">
    {checkCircle}
    <p>{text}</p>
  </li>
);

const ServicesContent = ({ cardInfo, clickerFn, checkCircle }) => {
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
        View More
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
  
  const iconsContext = useContext(iconContext);
  const { icons } = iconsContext;

  const checkCircle = foundIcon(icons, 'UilCheckCircle', 'services__modal-icon');
  const services = [
    {
      title: 'DevOps',
      icon: foundIcon(icons, 'UilCloudDatabaseTree', 'services__icon'),
      subtitle: 'DevOps',
      code: 'DO',
      isOpen: false,
      textsList: [
        'Integrate server in Azure or Firebase.',
        'Integrate Docker and Kubernetes.',
        'Improve deployment process.',
        'Integrate GIT (version controller) in your code.',
        'Create custom process with Bash.',
        'Setup Services SMTP.',
      ],
    },
    {
      title: 'Frontend',
      icon: foundIcon(icons, 'UilWebGrid', 'services__icon'),
      subtitle: 'Frontend',
      code: 'FE',
      isOpen: false,
      textsList: [
        'Integrate functions for new business requirements.',
        'Make visual changes for renew a software/site.',
        'Improve and optimize the existing code.',
        'Debug and resolve bugs.',
      ],
    },
    {
      title: 'Backend',
      icon: foundIcon(icons, 'UilServer', 'services__icon'),
      subtitle: 'Backend',
      code: 'BE',
      isOpen: false,
      textsList: [
        'Integrate a API services for consulting data in DB.',
        'Integrate new data structure.',
        'Integrate a services for send emails.',
        'Control and update the package versions.',
      ],
    },
  ];

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
    <section className="services section">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i can offer</span>
      <div className="services__container container grid">
        {servicesContent.map((serviceContent, index) => (
          <ServicesContent key={index} cardInfo={serviceContent} clickerFn={handlerOpenClose} checkCircle={checkCircle} />
        ))}
      </div>
    </section>
  );
};

export default Services;
