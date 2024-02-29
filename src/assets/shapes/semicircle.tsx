import { HTMLProps } from 'react';

export const Semicircle = ({ className }: HTMLProps<SVGElement>) => {
  return (
    <svg
      width="637"
      height="638"
      viewBox="0 0 637 638"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M109.949 527.88C255.214 673.373 490.735 673.373 636 527.88L109.949 1C-35.3163 146.494 -35.3163 382.386 109.949 527.88Z"
        stroke="currentColor"
        strokeWidth="0.72"
      />
    </svg>
  );
};
