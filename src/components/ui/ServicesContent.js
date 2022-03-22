import React from 'react';

const ServicesList = ({ text, checkCircle }) => (
  <li className="services__modal-service">
    {checkCircle}
    <p>{text}</p>
  </li>
);

const ServicesContent = ({ cardInfo, clickerFn, iconsObj, textServicesContent }) => {
  const { checkCircle, arrowRight, timesIcon } = iconsObj;
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

export default ServicesContent;