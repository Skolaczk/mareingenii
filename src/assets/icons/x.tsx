import { HTMLProps } from 'react';

export const X = ({ className }: HTMLProps<SVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.2 36.5595V3.43945H21.8L21.8 36.5595H18.2ZM3 21.7595V18.3195H37V21.7595L3 21.7595Z"
        fill="currentColor"
      />
    </svg>
  );
};
