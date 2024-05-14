import { createIcon } from './create-icon.js';
import { IconBase } from './types.js';

export const ContrastLine = (props: IconBase) => {
  return createIcon({
    ...props,
    path: (
      <path d="M12 21.9966C6.47715 21.9966 2 17.5194 2 11.9966C2 6.47373 6.47715 1.99658 12 1.99658C17.5228 1.99658 22 6.47373 22 11.9966C22 17.5194 17.5228 21.9966 12 21.9966ZM12 19.9966C16.4183 19.9966 20 16.4149 20 11.9966C20 7.5783 16.4183 3.99658 12 3.99658C7.58172 3.99658 4 7.5783 4 11.9966C4 16.4149 7.58172 19.9966 12 19.9966ZM12 17.9966V5.99658C15.3137 5.99658 18 8.68287 18 11.9966C18 15.3103 15.3137 17.9966 12 17.9966Z" />
    ),
    displayName: 'ContrastLine',
  });
};
