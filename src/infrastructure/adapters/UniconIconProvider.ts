import React, { ComponentType } from 'react';
import * as ico from '@iconscout/react-unicons';
import { IconProvider } from '@domain/ports/IconProvider';
import { IconConfig, IconRegistry } from '@domain/models/Icon';

const iconLibrary = ico as unknown as Record<string, ComponentType<{ size?: string | number; color?: string; className?: string }>>;

export class UniconIconProvider implements IconProvider {
  createIconRegistry(configs: IconConfig[]): IconRegistry {
    const registry: IconRegistry = {};

    configs.forEach((iconInfo) => {
      const nameIcon = iconInfo.iconName;
      if (!nameIcon) return;

      const classIcon = iconInfo.propsIcon?.className || '';
      const key = `${nameIcon}.${classIcon}`;
      const iconComponent = iconLibrary[nameIcon];
      if (!iconComponent) return;

      const props = iconInfo.propsIcon || {};
      const elementProps: Record<string, unknown> = { ...props };
      if (iconInfo.iconSize) elementProps.size = iconInfo.iconSize;
      if (iconInfo.iconColor) elementProps.color = iconInfo.iconColor;

      registry[key] = React.createElement(iconComponent, elementProps as Record<string, string>);
    });

    return registry;
  }

  createIconArray(configs: IconConfig[]): React.ReactElement[] {
    const elements: React.ReactElement[] = [];

    configs.forEach((iconInfo) => {
      if (!iconInfo.iconName) return;

      const iconComponent = iconLibrary[iconInfo.iconName];
      if (!iconComponent) return;

      const props = iconInfo.propsIcon || {};
      const elementProps: Record<string, unknown> = { ...props };
      if (iconInfo.iconSize) elementProps.size = iconInfo.iconSize;
      if (iconInfo.iconColor) elementProps.color = iconInfo.iconColor;

      elements.push(React.createElement(iconComponent, elementProps as Record<string, string>));
    });

    return elements;
  }
}
