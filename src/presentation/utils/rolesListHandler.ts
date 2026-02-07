import { RefObject } from 'react';

const rolesListHandler = (rolesRef: RefObject<HTMLDivElement>): void => {
  let current = 1;
  const timeMoveText = 2500;
  const rolesElement = rolesRef?.current;
  if (rolesElement) {
    const height = rolesElement.clientHeight;
    const numberDivs = rolesElement.children.length;
    const first = rolesElement.firstElementChild as HTMLElement | null;
    if (!first) return;
    setInterval(() => {
      const number = current * -height;
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
