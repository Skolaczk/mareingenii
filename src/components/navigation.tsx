import Link from 'next/link';

import { ModalTemplate } from '@/components';
import { navigationItems } from '@/lib/data';

type TNavigationMenuProps = {
  close: () => void;
};

export const Navigation = ({ close }: TNavigationMenuProps) => {
  return (
    <ModalTemplate close={close}>
      <div className="container mt-10 flex h-[calc(100vh-64px)] flex-col space-y-10 lg:mt-0 lg:justify-center lg:space-y-14">
        {navigationItems.map(({ name, href }, i) => (
          <Link
            key={name}
            href={href}
            className="xs:text-5xl flex justify-between text-4xl md:text-7xl lg:text-9xl"
            onClick={close}
          >
            <span className="font-thin">0{i + 1}</span>
            <p className="font-serif uppercase">{name}</p>
          </Link>
        ))}
      </div>
    </ModalTemplate>
  );
};
