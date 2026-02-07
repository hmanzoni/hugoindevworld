export interface IconConfig {
  iconName: string;
  propsIcon?: {
    className?: string;
    [key: string]: unknown;
  };
  iconSize?: string;
  iconColor?: string;
}

export type IconRegistry = Record<string, unknown>;

export interface IconReference {
  name: string;
  class: string;
}

export interface IconContactReference {
  iconName: string;
  iconClass: string;
}
