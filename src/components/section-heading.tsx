import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

export const SectionHeading = ({
  children,
  className,
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        'after:bg-primary container relative mb-10 p-0 text-lg after:absolute after:bottom-[0.45rem] after:ml-2 after:h-px after:w-28 lg:mb-20',
        className
      )}
    >
      {children}
    </h2>
  );
};
