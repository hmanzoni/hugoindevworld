import React, { ReactElement } from 'react';

interface ServicesListProps {
  text: string;
  checkCircle: ReactElement | undefined;
}

const ServicesList = ({ text, checkCircle }: ServicesListProps) => (
  <li className="services__modal-service">
    {checkCircle}
    <p>{text}</p>
  </li>
);

interface IconsObj {
  checkCircle: ReactElement | undefined;
  arrowRight: ReactElement | undefined;
  timesIcon: ReactElement | undefined;
}

interface CardInfo {
  title: string;
  subtitle: string;
  code: string;
  isOpen: boolean;
  textsList: string[];
  icon: ReactElement | undefined;
}

interface ServicesContentProps {
  cardInfo: CardInfo;
  clickerFn: (code: string) => void;
  iconsObj: IconsObj;
  textServicesContent: string;
}

const ServicesContent = ({ cardInfo, clickerFn, iconsObj, textServicesContent }: ServicesContentProps) => {
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
      <span
        className="button button--flex button--small button--link services__button"
        onClick={() => clickerFn(cardInfo.code)}
      >
        {textServicesContent}
        {arrowRight}
      </span>
      <div
        className={`services__modal ${cardInfo.isOpen && 'active-modal'}`}
        onClick={(e) =>
          (e.target as HTMLElement).className === 'services__modal active-modal' &&
          clickerFn(cardInfo.code)
        }
      >
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            {cardInfo.title}
            <br />
            <span className="services__subtitle">{cardInfo.subtitle}</span>
          </h4>
          <div onClick={() => clickerFn(cardInfo.code)}>{timesIcon}</div>
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
