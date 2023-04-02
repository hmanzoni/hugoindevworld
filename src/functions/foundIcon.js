export const foundIconArr = (icons, nameIcon, classIcon = '', sizeIcon = '') => icons.find(i => {
  const checkName = i.type.name === nameIcon;
  const checkClass = i.props.className === classIcon;
  const checkSize = i.props.size === sizeIcon;
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

const foundIcon = (icons, nameIcon, classIcon = '') => {
  const keyObjIcon = `${nameIcon}.${classIcon}`;
  return icons[keyObjIcon]
}

export default foundIcon;