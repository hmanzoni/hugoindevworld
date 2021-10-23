import React from 'react';
import { UilCheckCircle, UilBrushAlt, UilWebGrid, UilServer, UilArrowRight, UilTimes } from '@iconscout/react-unicons'

const ServicesList = ({ text }) => (
  <li className="services__modal-service">
    <UilCheckCircle className="services__modal-icon" />
    <p>{text}</p>
  </li>
);

const ServicesContent = ({ cardInfo }) => {
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
      <span className="button button--flex button--small button--link services__button">
        View More
        <UilArrowRight className="button__icon" />
      </span>
      <div className="services__modal">
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            {cardInfo.title}
            <br />
            {cardInfo.subtitle}
          </h4>
          <UilTimes className="services__modal-close" />
          <ul className="services__modal-services grid">
            {cardInfo.texts.map((text, index) => (
              <ServicesList key={index} text={text} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesContent = [
    {
      title: 'Ui/Ux',
      icon: <UilBrushAlt className="services__icon" />,
      subtitle: 'Designer',
      texts: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interaction.',
        'I position your company brand.',
      ],
    },
    {
      title: 'Frontend',
      icon: <UilWebGrid className="services__icon" />,
      subtitle: 'Designer',
      texts: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interaction.',
        'I position your company brand.',
      ],
    },
    {
      title: 'Backend',
      icon: <UilServer className="services__icon" />,
      subtitle: 'Designer',
      texts: [
        'I develop the user interface.',
        'Web page development.',
        'I create ux element interaction.',
        'I position your company brand.',
      ],
    },
  ];
  return (
    <section className="services section">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        {servicesContent.map((serviceContent, index) => (
          <ServicesContent key={index} cardInfo={serviceContent} />
        ))}
      </div>
    </section>
  );
};

export default Services;
