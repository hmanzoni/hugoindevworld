import React from 'react';
import { calcYears } from '@domain/services';

interface SingleAboutCardProps {
  infoCard: {
    title: string;
    name: string;
    desc: string;
    year?: number;
  };
}

const SingleAboutCard = ({ infoCard }: SingleAboutCardProps) => {
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
