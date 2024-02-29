import { HTMLProps } from 'react';

export const Corner = ({ className }: HTMLProps<SVGElement>) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.36 0.36053C66.1498 0.554313 119.446 53.8502 119.639 119.64H0.36V0.36053Z"
        stroke="currentColor"
        strokeWidth="0.72"
      />
    </svg>
  );
};
