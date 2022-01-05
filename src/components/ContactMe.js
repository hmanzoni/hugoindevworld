import React, { useContext } from 'react';
import '../assets/css/contact.css';
import iconContext from '../context/icons/iconsContext';

const ContactInfo = ({ cardInfo }) => {
  const { title, subtitle, icon } = cardInfo;
  return (
    <div className="contact__information">
      {icon}
      <div>
        <div className="contact__title">{title}</div>
        <span className="contact__subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

const ContactForm = ({messageBtnIcon}) => {
  return (
    <form action="" className="contact__form grid">
      <div className="contact__inputs grid">
        <div className="contact__content">
          <label htmlFor="" className="contact__label">
            Name
          </label>
          <input type="text" className="contact__input" />
        </div>
        <div className="contact__content">
          <label htmlFor="" className="contact__label">
            Email
          </label>
          <input type="email" className="contact__input" />
        </div>
      </div>
      <div className="contact__content">
        <label htmlFor="" className="contact__label">
          Project
        </label>
        <input type="text" className="contact__input" />
      </div>
      <div className="contact__content">
        <label htmlFor="" className="contact__label">
          Message
        </label>
        <textarea
          name=""
          id=""
          cols="0"
          rows="7"
          className="contact__input"
        ></textarea>
      </div>
      <div>
        <a href="!#" className="button button--flex">
          Send Message
          {messageBtnIcon}
        </a>
      </div>
    </form>
  );
};

const ContactMe = () => {

  const iconsContext = useContext(iconContext);
  const { icons } = iconsContext;

  const messageBtnIcon = icons.find(i => i?.type?.name === 'UilMessage' && i.props.className === 'button__icon');
  const contactsInfo = [
    {
      title: 'Call Me',
      subtitle: '333-4444-555',
      icon: icons.find(i => i?.type?.name === 'UilPhone' && i.props.className === 'contact__icon'),
    },
    {
      title: 'Email',
      subtitle: 'hugo@manzoni.com',
      icon: icons.find(i => i?.type?.name === 'UilEnvelope' && i.props.className === 'contact__icon'),
    },
    {
      title: 'Location',
      subtitle: 'Italy',
      icon: icons.find(i => i?.type?.name === 'UilMapMarker' && i.props.className === 'contact__icon'),
    },
  ];
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          {contactsInfo.map((contactSingleInfo, index) => (
            <ContactInfo key={index} cardInfo={contactSingleInfo} />
          ))}
        </div>
        <ContactForm messageBtnIcon={messageBtnIcon}/>
      </div>
    </section>
  );
};

export default ContactMe;
