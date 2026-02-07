import { ReactElement } from 'react';
import { IconRegistry } from '@domain/models/Icon';

export const foundIconArr = (
  icons: ReactElement[],
  nameIcon: string,
  classIcon = '',
  sizeIcon = ''
): ReactElement | undefined =>
  icons.find((i) => {
    const checkName = (i.type as { name?: string }).name === nameIcon;
    const checkClass = (i.props as { className?: string }).className === classIcon;
    const checkSize = (i.props as { size?: string }).size === sizeIcon;
    if (classIcon && sizeIcon) {
      return checkName && checkClass && checkSize;
    } else if (classIcon) {
      return checkName && checkClass;
    } else if (sizeIcon) {
      return checkName && checkSize;
    } else {
      return checkName;
    }
  });

const foundIcon = (
  icons: IconRegistry,
  nameIcon: string,
  classIcon = ''
): ReactElement | undefined => {
  const key = `${nameIcon}.${classIcon}`;
  return icons[key] as ReactElement | undefined;
};

export default foundIcon;
