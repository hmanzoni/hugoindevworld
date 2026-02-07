import React, { ReactElement } from 'react';

interface HomeScrollProps {
  iconHomeScroll: Record<string, ReactElement | undefined>;
  scrollText: string;
}

const HomeScroll = ({ iconHomeScroll, scrollText }: HomeScrollProps) => (
  <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
      {iconHomeScroll.mouseAlt}
      <span className="home__scroll-name">{scrollText}</span>
      {iconHomeScroll.arrowDown}
    </a>
  </div>
);

export default HomeScroll;
