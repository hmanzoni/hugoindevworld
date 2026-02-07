import { RefObject } from 'react';

const rolesListHandler = (rolesRef: RefObject<HTMLDivElement>): ReturnType<typeof setInterval> | undefined => {
  let current = 1;
  const timeMoveText = 2500;
  const rolesElement = rolesRef?.current;
  if (rolesElement) {
    const height = rolesElement.clientHeight;
    const numberDivs = rolesElement.children.length;
    const first = rolesElement.firstElementChild as HTMLElement | null;
    if (!first) return undefined;
    return setInterval(() => {
      const offset = current * -height;
      first.style.marginTop = `${offset}px`;
      if (current === numberDivs) {
        first.style.marginTop = '0px';
        current = 1;
      } else {
        current++;
      }
    }, timeMoveText);
  }
  return undefined;
};

export default rolesListHandler;