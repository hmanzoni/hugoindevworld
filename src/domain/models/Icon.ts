import { ReactElement } from 'react';

export interface IconConfig {
  iconName: string;
  propsIcon?: {
    className?: string;
    [key: string]: unknown;
  };
  iconSize?: string;
  iconColor?: string;
}

export type IconRegistry = Record<string, ReactElement>;

export interface IconReference {
  name: string;
  class: string;
}

export interface IconContactReference {
  iconName: string;
  iconClass: string;
}
