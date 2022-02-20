import React from 'react';

const HomeScroll = ({iconHomeScroll, scollText}) => (
  <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
      {iconHomeScroll.mouseAlt}
      <span className="home__scroll-name">{scollText}</span>
      {iconHomeScroll.arrowDown}
    </a>
  </div>
);

export default HomeScroll;
