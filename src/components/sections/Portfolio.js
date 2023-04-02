import React, { useContext } from 'react';
import '../../assets/css/portfolio.css';
import portfolio1 from '../../assets/img/portfolio1.jpg';
import portfolio2 from '../../assets/img/portfolio2.jpg';
import portfolio3 from '../../assets/img/portfolio3.jpg';
import iconContext from '../../context/icons/customsContext';
import foundIcon from '../../functions/foundIcon';

const PorfolioCards = ({ infoCard }) => {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={infoCard.img} alt={infoCard.name} className="portfolio__img" />

      <div className="portfolio__data">
        <h3 className="portfolio__title">{infoCard.title}</h3>
        <p className="portfolio__description">{infoCard.description}</p>
        <a
          href={infoCard.link}
          className="button button--flex button--small portfolio__button"
        >
          Demo
          {infoCard.icon}
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const customsContext = useContext(iconContext);
  const { icons } = customsContext;

  const arrowRight = foundIcon(icons, 'UilArrowRight', 'button__icon');
  const angleLeftB = foundIcon(icons, 'UilAngleLeftB', 'swiper-portfolio-icon');
  const angleRightB = foundIcon(icons, 'UilAngleRightB', 'swiper-portfolio-icon');
  const portfolios = [
    {
      img: portfolio1,
      name: 'portfolio1',
      title: 'Moder website',
      description:
        'Website adaptable to all devices, with ui components and animated interactions.',
      link: '#',
      textButton: 'Demo',
      icon: arrowRight,
    },
    {
      img: portfolio2,
      name: 'portfolio2',
      title: 'Brand design',
      description:
        'Website adaptable to all devices, with ui components and animated interactions.',
      link: '#',
      textButton: 'Demo',
      icon: arrowRight,
    },
    {
      img: portfolio3,
      name: 'portfolio3',
      title: 'Online store',
      description:
        'Website adaptable to all devices, with ui components and animated interactions.',
      link: '#',
      textButton: 'Demo',
      icon: arrowRight,
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          {portfolios.map((portfolio) => (
            <PorfolioCards key={portfolio.name} infoCard={portfolio} />
          ))}
        </div>
        <div className="swiper-button-next">
          {angleLeftB}
        </div>
        <div className="swiper-button-prev">
          {angleRightB}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;
