import React from 'react';
import { UilPhone, UilEnvelope, UilMapMarker, UilMessage } from '@iconscout/react-unicons';
import '../assets/css/contact.css';

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

const ContactForm = () => {
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
          <UilMessage className="button__icon" />
        </a>
      </div>
    </form>
  );
};

const ContactMe = () => {
  const contactsInfo = [
    {
      title: 'Call Me',
      subtitle: '333-4444-555',
      icon: <UilPhone className="contact__icon" />,
    },
    {
      title: 'Email',
      subtitle: 'hugo@manzoni.com',
      icon: <UilEnvelope className="contact__icon" />, // 'uil uil-envelope',
    },
    {
      title: 'Location',
      subtitle: 'Italy',
      icon: <UilMapMarker className="contact__icon" />, // 'uil uil-map-marker',
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
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe;
