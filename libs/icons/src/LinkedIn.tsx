import { createIcon } from './create-icon';
import { IconBase } from './types';

export const LinkedIn = (props: IconBase) => {
  return createIcon({
    ...props,
    viewBox: '0 0 24 24',
    path: [
      <path d="M20.4467 20.452H16.8933V14.8827C16.8933 13.5547 16.8667 11.8453 15.04 11.8453C13.188 11.8453 12.9053 13.2907 12.9053 14.7853V20.452H9.35067V9H12.764V10.56H12.8107C13.288 9.66133 14.448 8.71067 16.1813 8.71067C19.7813 8.71067 20.448 11.0813 20.448 14.1653V20.452H20.4467ZM5.33733 7.43333C5.06607 7.43368 4.79741 7.38049 4.54675 7.27681C4.29609 7.17312 4.06836 7.02099 3.87661 6.82911C3.68486 6.63724 3.53287 6.40941 3.42935 6.15868C3.32582 5.90795 3.27281 5.63926 3.27333 5.368C3.2736 4.95978 3.39491 4.5608 3.62192 4.22153C3.84894 3.88225 4.17146 3.61791 4.54871 3.46194C4.92595 3.30596 5.34098 3.26536 5.74131 3.34525C6.14163 3.42515 6.50927 3.62197 6.79774 3.91081C7.08621 4.19965 7.28255 4.56755 7.36193 4.96798C7.44131 5.3684 7.40017 5.78338 7.24371 6.16042C7.08725 6.53747 6.82249 6.85965 6.48292 7.08623C6.14335 7.3128 5.74422 7.4336 5.336 7.43333H5.33733ZM7.11867 20.452H3.55467V9H7.12V20.452H7.11867ZM22.2267 0H1.772C0.790667 0 0 0.773333 0 1.72933V22.2707C0 23.2267 0.792 24 1.77067 24H22.2213C23.2 24 24 23.2267 24 22.2707V1.72933C24 0.773333 23.2 0 22.2213 0H22.2253H22.2267Z" />,
    ],
    displayName: 'LinkedIn',
  });
};