import React, { useContext } from 'react';
import '../../assets/css/testimonial.css';
import testimonial1 from '../../assets/img/testimonial1.jpg';
import testimonial2 from '../../assets/img/testimonial2.jpg';
import testimonial3 from '../../assets/img/testimonial3.jpg';
import iconContext from '../../context/icons/customsContext';
import foundIcon from '../../functions/foundIcon';

const TestimonialCard = ({ infoCard }) => {
  const customsContext = useContext(iconContext);
  const { icons } = customsContext;

  const star = foundIcon(icons, 'UilStar', 'testimonial__icon-star');

  const qtyStarsIcons = () => {
    let icons = [];
    for (let i = 0; i < infoCard.stars; i++) {
      icons.push(
        { star }
      );
    }
    return icons;
  };

  return (
    <div className="testimonial__content swiper-slide">
      <div className="testimonial__data">
        <div className="testimonial__header">
          <img
            src={infoCard.imgSrc}
            alt={infoCard.imgAlt}
            className="testimonial__img"
          />
          <div>
            <h3 className="testimonial__name">{infoCard.name}</h3>
            <span className="testimonial__client">{infoCard.type}</span>
          </div>
        </div>
        <div>{qtyStarsIcons()}</div>
      </div>
      <p className="testimonial__description"> {infoCard.description} </p>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      imgSrc: testimonial1,
      imgAlt: 'testimonial1',
      name: 'Sara Smith',
      description:
        'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.',
      type: 'Client',
      stars: 5,
    },
    {
      imgSrc: testimonial2,
      imgAlt: 'testimonial2',
      name: 'Matt Robinson',
      description:
        'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.',
      type: 'Client',
      stars: 5,
    },
    {
      imgSrc: testimonial3,
      imgAlt: 'testimonial3',
      name: 'Raul Harris',
      description:
        'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.',
      type: 'Client',
      stars: 5,
    },
  ];
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>
      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} infoCard={testimonial} />
          ))}
        </div>
        <div className="swiper-pagination swiper-pagination-testimonial"></div>
      </div>
    </section>
  );
};

export default Testimonial;
