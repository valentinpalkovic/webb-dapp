import { createIcon } from './create-icon.js';
import { IconBase } from './types.js';

export const AddBoxLineIcon = (props: IconBase) => {
  return createIcon({
    ...props,
    d: 'M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z',
    displayName: 'AddBoxLineIcon',
  });
};
