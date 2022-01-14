const sizeIcons = "32";
export const arrIcons = [
  {iconName: 'UilTwitterAlt'},
  {iconName: 'UilFacebookF'},
  {iconName: 'UilInstagram'},
  {iconName: 'UilMessage'},
  {iconName: 'UilCalendarAlt'},
  {iconName: 'UilDownloadAlt', propsIcon: {className: "button__icon"}},
  {iconName: 'UilMessage', propsIcon: {className: "project__icon button__icon"}},
  {iconName: 'UilMessage', propsIcon: {className: "button__icon"}},
  {iconName: 'UilPhone', propsIcon: {className: "contact__icon"}},
  {iconName: 'UilEnvelope', propsIcon: {className: "contact__icon"}},
  {iconName: 'UilMapMarker', propsIcon: {className: "contact__icon"}},
  {iconName: 'UilEstate', propsIcon: {className: "nav__icon"}},
  {iconName: 'UilUser', propsIcon: {className: "nav__icon"}},
  {iconName: 'UilFileAlt', propsIcon: {className: "nav__icon"}},
  {iconName: 'UilBriefcaseAlt', propsIcon: {className: "nav__icon"}},
  {iconName: 'UilArrowDown', propsIcon: {className: "home__scroll-arrow"}},
  {iconName: 'UilArrowRight', propsIcon: {className: "button__icon"}},
  {iconName: 'UilAngleRightB', propsIcon: {className: "swiper-portfolio-icon"}},
  {iconName: 'UilAngleLeftB', propsIcon: {className: "swiper-portfolio-icon"}},
  {iconName: 'UilGraduationCap', propsIcon: {className: "qualification__icon"}},
  {iconName: 'UilBriefcaseAlt', propsIcon: {className: "qualification__icon"}},
  {iconName: 'UilCheckCircle', propsIcon: {className: "services__modal-icon"}},
  {iconName: 'UilBracketsCurly', propsIcon: {className: "skills__icon"}},
  {iconName: 'UilStar', propsIcon: {className: "testimonial__icon-star"}},
  {iconName: 'UilCloudDatabaseTree', propsIcon: {className: "services__icon"}},
  {iconName: 'UilWebGrid', propsIcon: {className: "services__icon"}},
  {iconName: 'UilServer', propsIcon: {className: "services__icon"}},
  {iconName: 'UilMouseAlt', propsIcon: {className: "home__scroll-mouse"}, iconSize: sizeIcons},
  {iconName: 'UilWebGrid', propsIcon: {className: "skills__icon"}, iconSize: sizeIcons},
  {iconName: 'UilServer', propsIcon: {className: "skills__icon"}, iconSize: sizeIcons},
  {iconName: 'UilCloudDatabaseTree', propsIcon: {className: "skills__icon"}, iconSize: sizeIcons},
  {iconName: 'UilArrowUp', propsIcon: {className: "scrollup__icon"}, iconSize: sizeIcons},
  {iconName: 'UilLinkedinAlt', iconSize: sizeIcons},
  {iconName: 'UilDribbble', iconSize: sizeIcons},
  {iconName: 'UilGithubAlt', iconSize: sizeIcons},
];

export const foundIcon = (icons, nameIcon, classIcon = '', sizeIcon = '') => icons.find(i => {
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