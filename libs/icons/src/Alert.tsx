import { createIcon } from './create-icon.js';
import { IconBase } from './types.js';

export const Alert = (props: IconBase) => {
  return createIcon({
    ...props,
    d: 'M11.866 0.999956L21.392 17.5C21.4797 17.652 21.5259 17.8244 21.5259 18C21.5259 18.1755 21.4797 18.3479 21.392 18.4999C21.3042 18.652 21.178 18.7782 21.026 18.866C20.8739 18.9537 20.7015 19 20.526 19H1.47397C1.29844 19 1.126 18.9537 0.973983 18.866C0.821967 18.7782 0.695733 18.652 0.607967 18.4999C0.520202 18.3479 0.473998 18.1755 0.473999 18C0.474 17.8244 0.520206 17.652 0.607974 17.5L10.134 0.999956C10.2217 0.847949 10.348 0.721722 10.5 0.633962C10.652 0.546202 10.8244 0.5 11 0.5C11.1755 0.5 11.3479 0.546202 11.5 0.633962C11.652 0.721722 11.7782 0.847949 11.866 0.999956ZM3.20597 17H18.794L11 3.49996L3.20597 17ZM9.99997 14H12V16H9.99997V14ZM9.99997 6.99996H12V12H9.99997V6.99996Z',
    displayName: 'Alert',
  });
};
