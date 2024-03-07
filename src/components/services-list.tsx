'use client';

import { X } from '@/assets/icons';
import { useOpenClose } from '@/hooks';
import { cn } from '@/lib/utils';

type TServicesListProps = {
  title: string;
  services: {
    title: string;
    content: { question: string; answer: string }[];
  }[];
};

export const ServicesList = ({ title, services }: TServicesListProps) => {
  const { isOpen, toggle } = useOpenClose();

  return (
    <details>
      <summary
        onClick={toggle}
        className="border-primary flex cursor-pointer items-center justify-between gap-2 border-b py-8 md:py-16"
      >
        <h4 className="xs:text-3xl font-serif text-2xl uppercase md:text-5xl lg:text-7xl">
          {title}
        </h4>
        <X
          className={cn('size-6 md:size-8 lg:size-auto', isOpen && 'rotate-45')}
        />
      </summary>
      {services.map(({ title, content }, idx) => (
        <div
          key={idx}
          className="border-primary space-y-5 border-b py-5 lg:flex lg:gap-5 lg:space-y-0 lg:py-10"
        >
          <div className="lg:flex lg:w-1/2 lg:gap-5">
            <span className="font-serif text-xl md:text-2xl lg:text-3xl">
              0{idx + 1}
            </span>
            <h3 className="text-2xl font-extralight uppercase md:text-4xl lg:max-w-md lg:text-5xl">
              {title}
            </h3>
          </div>
          <div className="space-y-5 lg:w-1/2">
            {content.map(({ question, answer }, idx) => (
              <div key={idx}>
                <p className="font-semibold">{question}</p>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </details>
  );
};
