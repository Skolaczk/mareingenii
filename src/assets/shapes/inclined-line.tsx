import { HTMLProps } from 'react';

export const InclinedLine = ({ className }: HTMLProps<SVGElement>) => {
  return (
    <svg
      width="96"
      height="90"
      viewBox="0 0 96 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 0H7.45319L96 90L88.5468 90L0 0Z" fill="currentColor" />
    </svg>
  );
};
