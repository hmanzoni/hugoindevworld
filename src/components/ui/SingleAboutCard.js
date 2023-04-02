import React from 'react';
import calcYears from '../../functions/calcYears';

const SingleAboutCard = ({ infoCard }) => {
  let title = infoCard.title;
  const { name, desc } = infoCard;
  if (title === '$year' && infoCard.year) {
    title = calcYears(title, infoCard.year, true);
  }
  return (
    <div>
      <span className="about__info-title">{title}+</span>
      <span className="about__info-name">
        {name}
        <br />
        {desc}
      </span>
    </div>
  );
};

export default SingleAboutCard;