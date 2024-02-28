import { HTMLProps } from 'react';

export const LogoSmall = ({ className }: HTMLProps<SVGElement>) => {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.2463 6.85712C28.3191 6.85712 29.9995 5.3221 29.9995 3.42856C29.9995 1.53502 28.3191 0 26.2463 0C24.1735 0 22.4931 1.53502 22.4931 3.42856C22.4931 5.3221 24.1735 6.85712 26.2463 6.85712ZM6.13009 22.9958C4.72811 24.3347 2.45504 24.3347 1.05306 22.9958C-0.348928 21.6569 -0.348928 19.486 1.05306 18.1471L6.13009 22.9958ZM2.86566e-07 6.9348L0 2.33338e-05L17.8688 17.0652V24L2.86566e-07 6.9348ZM12.1312 2.33338e-05V6.9348L30 24L30 17.0652L12.1312 2.33338e-05Z"
        fill="currentColor"
      />
    </svg>
  );
};
