import { createIcon } from './create-icon.js';
import { IconBase } from './types.js';

const BoxLine = (props: IconBase) => {
  return createIcon({
    ...props,
    viewBox: '0 0 24 24',
    d: 'M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L13.0001 11.4234V20.11L19.5 16.3469V7.65311L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329Z',
    displayName: 'BoxLine',
  });
};

export default BoxLine;
