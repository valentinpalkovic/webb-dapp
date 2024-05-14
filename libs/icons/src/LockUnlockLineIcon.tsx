import { createIcon } from './create-icon.js';
import { IconBase } from './types.js';

export const LockUnlockLineIcon = (props: IconBase) => {
  return createIcon({
    ...props,
    viewBox: '0 0 16 16',
    d: 'M4.66667 6.66671H13.3333C13.7015 6.66671 14 6.96517 14 7.33337V14C14 14.3682 13.7015 14.6667 13.3333 14.6667H2.66667C2.29848 14.6667 2 14.3682 2 14V7.33337C2 6.96517 2.29848 6.66671 2.66667 6.66671H3.33333V6.00004C3.33333 3.42271 5.42267 1.33337 8 1.33337C9.827 1.33337 11.4087 2.38324 12.1749 3.91259L10.9821 4.509C10.4348 3.41661 9.305 2.66671 8 2.66671C6.15905 2.66671 4.66667 4.15909 4.66667 6.00004V6.66671ZM3.33333 8.00004V13.3334H12.6667V8.00004H3.33333ZM6.66667 10H9.33333V11.3334H6.66667V10Z',
    displayName: 'LockUnlockLineIcon',
  });
};
