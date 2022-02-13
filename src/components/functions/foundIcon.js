const foundIcon = (icons, nameIcon, classIcon = '', sizeIcon = '') => icons.find(i => {
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

export default foundIcon;