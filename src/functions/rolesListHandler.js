const rolesListHandler = (rolesRef) => {
  let current = 1; // keeps track of the current div
  const timeMoveText = 2500; // time in milisec 2000 = 2 seg
  const rolesElement = rolesRef?.current;
  if (rolesElement) {
    const height = rolesElement.clientHeight; // the height of the roles div
    const numberDivs = rolesElement.children.length; // the number of children of the roles div
    const first = rolesElement.firstElementChild; // the first div nested in roles div
    setInterval(() => {
      let number = current * - height;
      first.style.marginTop = number + 'px';
      if (current === numberDivs) {
        first.style.marginTop = '0px';
        current = 1;
      } else {
        current++;
      }
    }, timeMoveText);
  }
};

export default rolesListHandler;