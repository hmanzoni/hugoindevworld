import React, { ReactElement } from 'react';
import { QualificationItem } from '@domain/models/Qualification';

interface SingleQualificationProps {
  infoCard: QualificationItem;
  calendarAlt: ReactElement | undefined;
}

const QualificationRounderLine = () => (
  <div>
    <span className="qualification__rounder"></span>
    <span className="qualification__line"></span>
  </div>
);

const SingleQualification = ({ infoCard, calendarAlt }: SingleQualificationProps) => (
  <div className="qualification__data">
    {infoCard.order % 2 === 0 && (
      <>
        <div></div>
        <QualificationRounderLine />
      </>
    )}
    <div>
      <h3 className="qualification__title">{infoCard.title}</h3>
      <span className="qualification__subtitle">{infoCard.subtitle}</span>
      <div className="qualification__calendar">
        {calendarAlt}
        <p>{infoCard.rangeYears}</p>
      </div>
    </div>
    {infoCard.order % 2 === 1 && <QualificationRounderLine />}
  </div>
);

export default SingleQualification;
