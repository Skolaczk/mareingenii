import { HTMLProps } from 'react';

export const Circle = ({ className }: HTMLProps<SVGElement>) => {
  return (
    <svg
      width="282"
      height="282"
      viewBox="0 0 282 282"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="141"
        cy="141"
        r="140.64"
        stroke="currentColor"
        strokeWidth="0.72"
      />
    </svg>
  );
};
