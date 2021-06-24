import * as React from 'react';

function EdgwareLogo() {
  return (
    <svg viewBox='0 0 248 248' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
      <title>{'Bitmap'}</title>
      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='prefix__a'>
          <stop stopColor='#121212' offset='0%' />
          <stop stopColor='#DBFEFF' offset='100%' />
        </linearGradient>
        <path id='prefix__b' d='M458 4813h238v238H458z' />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path fill='url(#prefix__a)' d='M0 4204h1440v1185H0z' transform='translate(-453 -4808)' />
        <g transform='translate(-453 -4808)'>
          <image
            x={458}
            y={4813}
            width={238}
            height={238}
            xlinkHref='data:image/png;base64,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AAAAADj5TfYAACJ7SURBVHgB7d17sH31/MdxEfpWhC6UUO6XLkNqSnSZIjMoJeNSKF8yoVyGxIzkMsk1xRBC+IoZJEYIlbsmvvhGItGIooxKye3n8nv2ffm+rfY+Z5+1z76cvfd57j/OWXvttT7r83msz+e9P+uz1+VWt/KlgAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoo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gAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiwXAT+H2Ldi5fQspd+AAAAAElFTkSuQmCC'
          />
          <use stroke='#121212' strokeWidth={10} xlinkHref='#prefix__b' />
        </g>
      </g>
    </svg>
  );
}

export default EdgwareLogo;